"use client";

import { useEffect, useState } from "react";
import Bold from "./Bold";
import Italic from "./Italic";
import Paragraph from "./Paragraph";
import Strikethrough from "./Strikethrough";
import TextArea from "./TextArea";
import Title from "./Title";
import Toolbar from "./Toolbar";
import Underline from "./Underline";

interface EditorProps {
  className: string;
}

export default function Editor({ className }: EditorProps) {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      const y = e.clientY;
      setToolbarCoordinateY(y);
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);

  const [toolbarCoordinateY, setToolbarCoordinateY] = useState(350);

  return (
    <div className={className}>
      <Title innerText="Title" />
      <TextArea textComponent={<Paragraph innerText="샘플 텍스트입니다." />} />
      <TextArea
        textComponent={<Bold innerText="굵게 적용된 샘플 텍스트입니다." />}
      />
      <TextArea
        textComponent={
          <Underline innerText="밑줄이 적용된 샘플 텍스트입니다." />
        }
      />
      <TextArea
        textComponent={
          <Strikethrough innerText="취소선이 적용된 샘플 텍스트입니다." />
        }
      />
      <TextArea
        textComponent={
          <Italic innerText="기울림이 적용된 샘플 텍스트입니다." />
        }
      />
      <TextArea textComponent={<Paragraph innerText="샘플 텍스트입니다." />} />
      <TextArea textComponent={<Paragraph innerText="샘플 텍스트입니다." />} />
      <TextArea textComponent={<Paragraph innerText="샘플 텍스트입니다." />} />
      <Toolbar coordinateY={toolbarCoordinateY} />
    </div>
  );
}
