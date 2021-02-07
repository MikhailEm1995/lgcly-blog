import SimpleBar from 'simplebar';

declare global {
  interface Window {
    __SCROLLBAR__: SimpleBar;
  }
}
