interface BoldProps extends TextProps {}

export default function Bold({ innerText }: BoldProps) {
  return (
    // TODO: When the component called inside <p> tag in the editor, Remove <p></p> dynamically.
    <p>
      <b>{innerText}</b>
    </p>
  );
}
