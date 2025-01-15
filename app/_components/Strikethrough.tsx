interface StrikethroughProps extends TextProps {}

export default function Strikethrough({ innerText }: StrikethroughProps) {
  return <s>{innerText}</s>;
}
