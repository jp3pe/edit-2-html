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

export interface EditableDynamicComponent {
  id: number;
  componentName: keyof JSX.IntrinsicElements;
  innerText?: string;
}

export const titleData = {
  id: 1,
  componentName: "Title",
  innerText: "Title",
};

export const contentData = [
  {
    id: 1,
    componentName: "Paragraph",
    innerText: "샘플 텍스트입니다.",
  },
  {
    id: 2,
    componentName: "Bold",
    innerText: "굵게 적용된 샘플 텍스트입니다.",
  },
  {
    id: 3,
    componentName: "Underline",
    innerText: "밑줄이 적용된 샘플 텍스트입니다.",
  },
  {
    id: 4,
    componentName: "Strikethrough",
    innerText: "취소선이 적용된 샘플 텍스트입니다.",
  },
  {
    id: 5,
    componentName: "Italic",
    innerText: "기울림이 적용된 샘플 텍스트입니다.",
  },
  {
    id: 6,
    componentName: "Paragraph",
    innerText: "샘플 텍스트입니다.",
  },
];
