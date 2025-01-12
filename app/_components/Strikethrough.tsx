interface StrikethroughProps extends TextProps {}

export default function Strikethrough({ innerText }: StrikethroughProps) {
  return (
    // TODO: When the component called inside <p> tag in the editor, Remove <p></p> dynamically.
    <p>
      <s>{innerText}</s>
    </p>
  );
}
