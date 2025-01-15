interface ItalicProps extends TextProps {}

export default function Italic({ innerText }: ItalicProps) {
  return <i>{innerText}</i>;
}
