// TODO: Change the name of the this interface?
type AllowedComponentName =
  | "Bold"
  | "Italic"
  | "Paragraph"
  | "Strikethrough"
  | "Title";

export interface EditableDynamicComponent {
  componentName: AllowedComponentName;
  innerText?: string;
}

export const titleData = [
  {
    componentName: "Title",
    innerText: "Title",
  },
];

export const contentData = [
  {
    componentName: "Paragraph",
    innerText: "샘플 텍스트입니다.",
  },
  {
    componentName: "Bold",
    innerText: "굵게 적용된 샘플 텍스트입니다.",
  },
  {
    componentName: "Underline",
    innerText: "밑줄이 적용된 샘플 텍스트입니다.",
  },
  {
    componentName: "Strikethrough",
    innerText: "취소선이 적용된 샘플 텍스트입니다.",
  },
  {
    componentName: "Italic",
    innerText: "기울림이 적용된 샘플 텍스트입니다.",
  },
  {
    componentName: "Paragraph",
    innerText: "샘플 텍스트입니다.",
  },
];
