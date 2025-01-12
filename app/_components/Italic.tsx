interface ItalicProps extends TextProps {}

export default function Italic({ innerText }: ItalicProps) {
  return (
    // TODO: When the component called inside <p> tag in the editor, Remove <p></p> dynamically.
    <p>
      <i>{innerText}</i>
    </p>
  );
}
