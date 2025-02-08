import { JSX, ReactElement } from "react";

interface TextAreaProps {
  key: string;
  textComponent: ReactElement<JSX.Element>;
}

export default function TextArea({ textComponent }: TextAreaProps) {
  return (
    <div>
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
