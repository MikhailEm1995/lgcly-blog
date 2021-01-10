import memoize from 'lodash/memoize';

import type { ICircleData } from './types';
import {
  DEFAULT_RADIUS,
  GUTTER_WIDTH,
  MIN_RADIUS,
  INACTIVE_COLOR,
  ACTIVE_COLOR,
  CHOOSE_COLOR,
} from './constants';

export class Sections {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  radius: number;
  relativeTops: number[];
  circlesData: ICircleData[];
  getRelativeScroll: () => number;

  constructor(params: {
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    relativeTops: number[];
    getRelativeScroll: () => number;
  }) {
    this.ctx = params.ctx;
    this.width = params.width;
    this.height = params.height;
    this.relativeTops = params.relativeTops;
    this.getRelativeScroll = params.getRelativeScroll;

    this.draw = this.draw.bind(this);
    this.getSectionIndex = this.getSectionIndex.bind(this);
    this.drawSectionsWithHighlight = this.drawSectionsWithHighlight.bind(this);
    this.calcCirclesData = this.calcCirclesData.bind(this);
    this.calcCircleData = this.calcCircleData.bind(this);
    this.enhanceCircleDataWithActive = this.enhanceCircleDataWithActive.bind(this);
    this.drawGutterBG = this.drawGutterBG.bind(this);
    this.drawFilledGutter = this.drawFilledGutter.bind(this);
    this.drawSectionCircle = this.drawSectionCircle.bind(this);

    this.radius = calcFitRadius(this.height, this.width, this.relativeTops.length);
    this.circlesData = this.calcCirclesData();
  }

  draw() {
    const { ctx, width, height } = this;
    const relativeScroll = this.getRelativeScroll();
    const drawSectionsData = this.circlesData.map(
      (data) => this.enhanceCircleDataWithActive(
        data,
        relativeScroll,
      )
    );

    ctx!.clearRect(0, 0, width, height);
    this.drawGutterBG();
    this.drawFilledGutter();
    drawSectionsData.forEach(data => this.drawSectionCircle(data));
  }

  getSectionIndex(point: { x: number; y: number; }): number | null {
    const { circlesData } = this;
    const choosen = circlesData.find((circle) => {
      return isPointInsideCircle(point, circle);
    });
    const index = circlesData.indexOf(choosen);

    return index > -1 ? index : null;
  }

  drawSectionsWithHighlight(index: number) {
    this.draw();
    this.drawSectionCircle({
      ...this.circlesData[index],
      choosen: true,
    });
  }

  private calcCirclesData(): ICircleData[] {
    return this.relativeTops.map(this.calcCircleData);
  }

  private calcCircleData(relativeTop: number): ICircleData {
    const { width, height, radius } = this;

    const top = relativeTop < 1 ? relativeTop : relativeTop / 100;
    const y = top * height;
    const adjustedY = y < radius
      ? radius
      : y > height - radius
      ? height - radius
      : y;
    
    return {
      x: roundUpToHalf(width / 2),
      y: roundUpToHalf(adjustedY),
      radius: radius,
    };
  }

  private enhanceCircleDataWithActive(
    circleData: ICircleData,
    relativeScroll: number,
  ): ICircleData & { active: boolean; } {
    const { y, radius } = circleData;

    return {
      ...circleData,
      active: (y - radius) / this.height < relativeScroll,
    };
  }

  private drawGutterBG(): void {
    const { ctx, width, height } = this;
    const x = roundUpToHalf(width / 2 - GUTTER_WIDTH / 2);
    const p0: [number, number] = [x, 0];
    const p1: [number, number] = [x, height];
  
    ctx.beginPath();
    ctx.moveTo(...p0);
    ctx.lineTo(...p1);
    ctx.strokeStyle = INACTIVE_COLOR;
    ctx.lineWidth = GUTTER_WIDTH;
    ctx.stroke();
  }

  private drawFilledGutter(): void {
    const { ctx, width, height } = this;
    const relativeScroll = this.getRelativeScroll();
    const x = roundUpToHalf(width / 2 - GUTTER_WIDTH / 2);
    const p0: [number, number] = [x, 0];
    const p1: [number, number] = [x, relativeScroll * height];
  
    ctx.beginPath();
    ctx.moveTo(...p0);
    ctx.lineTo(...p1);
    ctx.strokeStyle = ACTIVE_COLOR;
    ctx.lineWidth = GUTTER_WIDTH;
    ctx.stroke();
  }

  private drawSectionCircle(
    { x, y, radius, active, choosen }: ICircleData & {
      active?: boolean;
      choosen?: boolean;
    },
  ) {
    const { ctx } = this;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = choosen
      ? CHOOSE_COLOR
      : active
      ? ACTIVE_COLOR
      : INACTIVE_COLOR;
    ctx.fill();
  }
}

const calcFitRadius = memoize(
  function calcFitRadius(height: number, width: number, circles: number): number {
    let radius = DEFAULT_RADIUS;

    while (!isRadiusOk(width, height, radius, circles)) {
      radius--;
    }

    return radius;
  },
  (...args) => args.join('.'),
);

function isRadiusOk(
  width: number,
  height: number,
  radius: number,
  circles: number,
): boolean {
  const diameter = radius * 2;
  const isCirclesFitHeight = diameter * circles <= height;
  const isCirclesFitWidth = diameter <= width;

  return isCirclesFitHeight && isCirclesFitWidth || radius === MIN_RADIUS;
}

function roundUpToHalf(num: number) {
  const result = Math.round(num * 2) / 2;
  return (result / 0.5) % 1 > 0 ? result : result + 0.5;
}

function isPointInsideCircle(
  point: { x: number; y: number; },
  circle: { x: number; y: number; radius: number; },
) {
  const length = Math.sqrt(
    (point.x - circle.x) ** 2 + (point.y - circle.y) ** 2
  );
debugger;
  return length <= circle.radius;
}
