export interface Natives {
  addition: (a: number, b: number) => void;
}

declare global {
  interface Window {
    Natives: Natives;
  }
}
