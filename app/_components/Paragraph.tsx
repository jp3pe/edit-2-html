import { useContentEditable } from "../_lib/useContentEditable";

interface ParagraphProps extends TextProps {}

export default function Paragraph({ innerText = "\u200B" }: ParagraphProps) {
  const contentEdit = useContentEditable(innerText);

  return (
    <p
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={contentEdit.onInput}
    >
      {contentEdit.content}
    </p>
  );
}
