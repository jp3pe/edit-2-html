"use client";

import { useEffect, useState } from "react";
import Toolbar from "./Toolbar";
import Title from "./Title";
import {
  contentData,
  titleData,
  EditableDynamicComponent,
} from "../_mock/editorData";
import EditorContent from "./EditorContent";

export default function Editor() {
  const [toolbarCoordinateY, setToolbarCoordinateY] = useState(350);
  const [displayPropertyValue, setDisplayPropertyValue] = useState("none");

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

  const titleInnerText = titleData.innerText;

  return (
    <div id="editor">
      <Toolbar
        coordinateY={toolbarCoordinateY}
        displayPropertyValue={displayPropertyValue}
      />
      <Title innerText={titleInnerText} />
      <EditorContent contentData={contentData as EditableDynamicComponent[]} />

      <style jsx>{`
        div {
          width: 100%;
          overflow-wrap: break-word;
        }
      `}</style>
    </div>
  );
}
