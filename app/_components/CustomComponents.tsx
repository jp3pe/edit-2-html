// Use id to specify component, later?
export function Bold({ innerText }: TextProps) {
  return <b>{innerText}</b>;
}

export function Italic({ innerText }: TextProps) {
  return <i>{innerText}</i>;
}

export function Paragraph({ innerText = "\u200B" }: TextProps) {
  return (
    <p contentEditable={true} suppressContentEditableWarning={true}>
      {innerText}
    </p>
  );
}

export function Strikethrough({ innerText }: TextProps) {
  return <s>{innerText}</s>;
}
export function Underline({ innerText }: TextProps) {
  return <u>{innerText}</u>;
}
