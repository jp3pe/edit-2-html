interface ParagraphProps extends TextProps {}

export default function Paragraph({ innerText = "\u200B" }: ParagraphProps) {
  return (
    <p contentEditable={true} suppressContentEditableWarning={true}>
      {innerText}
    </p>
  );
}
