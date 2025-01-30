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

export default function Editor() {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      const targetElement: HTMLElement = e.target as HTMLElement;

      if (targetElement.closest("#editor")) {
        setDisplayPropertyValue("flex");

        const targetElementArea = targetElement.getBoundingClientRect();
        const targetElementY = targetElementArea.top;
        setToolbarCoordinateY(targetElementY);
      } else {
        setDisplayPropertyValue("none");
      }
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);

  const [toolbarCoordinateY, setToolbarCoordinateY] = useState(350);
  const [displayPropertyValue, setDisplayPropertyValue] = useState("none");

  return (
    <div id="editor">
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
      <TextArea textComponent={<Paragraph />} />
      <Toolbar
        coordinateY={toolbarCoordinateY}
        displayPropertyValue={displayPropertyValue}
      />

      <style jsx>{`
        div {
          width: 100%;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
}
