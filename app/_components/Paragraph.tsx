interface ParagraphProps extends TextProps {}

export default function Paragraph({ innerText }: ParagraphProps) {
  return <p>{innerText}</p>;
}
