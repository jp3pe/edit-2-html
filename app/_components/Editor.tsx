"use client";

import { useCallback, useEffect, useState } from "react";

import { contentData, titleData } from "@/app/_mock/editor-data";
import { EditableDynamicComponent } from "@/app/types/editable-dynamic-component";

import Toolbar from "@/app/_components/Toolbar";
import Title from "@/app/_components/Title";
import EditorContent from "@/app/_components/EditorContent";

export default function Editor() {
  const [toolbarCoordinateY, setToolbarCoordinateY] = useState(350);
  const [toolbarDisplayPropertyValue, setToolbarDisplayPropertyValue] =
    useState("none");

  const handleMouseOn = useCallback((e: MouseEvent) => {
    const targetElement: HTMLElement = e.target as HTMLElement;

    if (targetElement.closest("#editor")) {
      setToolbarDisplayPropertyValue("flex");

      const targetElementArea = targetElement.getBoundingClientRect();
      const targetElementY = targetElementArea.top;
      setToolbarCoordinateY(targetElementY);
    } else {
      setToolbarDisplayPropertyValue("none");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleMouseOn);
    return () => {
      document.removeEventListener("click", handleMouseOn);
    };
  }, [handleMouseOn]);

  const titleInnerText = titleData.innerText;

  return (
    <div id="editor">
      {/* <Toolbar
        coordinateY={toolbarCoordinateY}
        displayPropertyValue={toolbarDisplayPropertyValue}
      /> */}
      <Title innerText={titleInnerText} />
      <EditorContent
        // setToolbarDisplayPropertyValue={setToolbarDisplayPropertyValue}
        // contentData={contentData as EditableDynamicComponent[]}
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
