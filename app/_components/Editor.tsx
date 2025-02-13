"use client";

import { useEffect, useState } from "react";

import { contentData, titleData } from "@/app/_mock/editor-data";
import { EditableDynamicComponent } from "@/app/types/editable-dynamic-component";

import Toolbar from "@/app/_components/Toolbar";
import Title from "@/app/_components/Title";
import EditorContent from "@/app/_components/EditorContent";

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
