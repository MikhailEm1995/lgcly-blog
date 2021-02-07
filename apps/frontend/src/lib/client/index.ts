export function getMaxScroll() {
  const { innerHeight } = window;
  const { scrollHeight, offsetHeight } = window.__SCROLLBAR__.getScrollElement();

  return Math.max(scrollHeight, offsetHeight) - innerHeight;
}
