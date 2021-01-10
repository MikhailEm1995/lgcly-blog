export function getMaxScroll() {
  const { innerHeight } = window;
  const {
    body: { scrollHeight, offsetHeight },
    documentElement: { clientHeight, scrollHeight: deScrollHeight, offsetHeight: deOffsetHeight },
  } = document;

  return Math.max(scrollHeight, offsetHeight, clientHeight, deScrollHeight, deOffsetHeight) - innerHeight;
}
