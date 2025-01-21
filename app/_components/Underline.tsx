interface UnderlineProps extends TextProps {}

export default function Underline({ innerText }: UnderlineProps) {
  return <u>{innerText}</u>;
}
