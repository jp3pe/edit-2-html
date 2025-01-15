import { JSX, ReactElement } from "react";

interface TextAreaProps {
  textComponent: ReactElement<JSX.Element>;
}

export default function TextArea({ textComponent }: TextAreaProps) {
  return <div>{textComponent}</div>;
}
