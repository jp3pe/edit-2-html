export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      Bold: {
        id: string;
        innerText?: string;
      };
      Italic: {
        id: string;
        innerText?: string;
      };
      Paragraph: {
        id: string;
        innerText?: string;
      };
      Strikethrough: {
        id: string;
        innerText?: string;
      };
    }
  }
}
