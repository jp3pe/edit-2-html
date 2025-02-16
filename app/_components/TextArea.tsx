import { JSX, ReactElement } from "react";

interface TextAreaProps {
  id: number;
  key: string;
  textComponent: ReactElement<JSX.Element>;
}

export default function TextArea({ id, textComponent }: TextAreaProps) {
  return (
    <div id={`textarea-${id}`}>
      {textComponent}

      <style jsx>{`
        div {
          margin-top: 0.3rem;
          margin-bottom: 0.3rem;
        }

        div:hover {
          cursor: text;
        }
      `}</style>
    </div>
  );
}
