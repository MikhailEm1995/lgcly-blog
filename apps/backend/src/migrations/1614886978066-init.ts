import {MigrationInterface, QueryRunner} from "typeorm";

export class init1614886978066 implements MigrationInterface {
    name = 'init1614886978066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "link" character varying NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "brief" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "articleId" integer, CONSTRAINT "REL_75a6a932c2e34673e8b0be2924" UNIQUE ("articleId"), CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "post_id" integer, CONSTRAINT "REL_0518c3db42e78190976040019e" UNIQUE ("post_id"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects-images" ("id" integer NOT NULL, "link" character varying NOT NULL, "project_id" integer, CONSTRAINT "PK_21085d6ad9f838a90e3ed0b145b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts-tags" ("postId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_8a9e6f80d1a4699c6103753d8f0" PRIMARY KEY ("postId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2fcc734deedaca10b0ee200a42" ON "posts-tags" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_51c064057eaf1993e9505f1148" ON "posts-tags" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_75a6a932c2e34673e8b0be29245" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_0518c3db42e78190976040019ed" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects-images" ADD CONSTRAINT "FK_8eda607cd62c364791a701ed1af" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts-tags" ADD CONSTRAINT "FK_2fcc734deedaca10b0ee200a42c" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts-tags" ADD CONSTRAINT "FK_51c064057eaf1993e9505f11480" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts-tags" DROP CONSTRAINT "FK_51c064057eaf1993e9505f11480"`);
        await queryRunner.query(`ALTER TABLE "posts-tags" DROP CONSTRAINT "FK_2fcc734deedaca10b0ee200a42c"`);
        await queryRunner.query(`ALTER TABLE "projects-images" DROP CONSTRAINT "FK_8eda607cd62c364791a701ed1af"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_0518c3db42e78190976040019ed"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_75a6a932c2e34673e8b0be29245"`);
        await queryRunner.query(`DROP INDEX "IDX_51c064057eaf1993e9505f1148"`);
        await queryRunner.query(`DROP INDEX "IDX_2fcc734deedaca10b0ee200a42"`);
        await queryRunner.query(`DROP TABLE "posts-tags"`);
        await queryRunner.query(`DROP TABLE "projects-images"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
