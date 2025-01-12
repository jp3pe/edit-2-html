interface BoldProps extends TextProps {}

export default function Bold({ innerText }: BoldProps) {
  return <b>{innerText}</b>;
}
