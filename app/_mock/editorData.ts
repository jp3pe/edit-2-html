// TODO: Change the name of the this interface?
type AllowedComponentName =
  | "Bold"
  | "Italic"
  | "Paragraph"
  | "Strikethrough"
  | "Title";

export interface EditableDynamicComponent {
  id: number;
  componentName: AllowedComponentName;
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
