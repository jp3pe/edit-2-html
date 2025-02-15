import { useEffect, useState } from "react";

import {
  Bold,
  Italic,
  Paragraph,
  Strikethrough,
  Underline,
} from "@/app/_components/CustomComponents";
import { EditableDynamicComponent } from "@/app/types/editable-dynamic-component";
import TextArea from "@/app/_components/TextArea";

const ComponentMap: Record<string, React.ElementType> = {
  Bold,
  Italic,
  Paragraph,
  Strikethrough,
  Underline,
};

interface EditorContentProps {
  contentData: EditableDynamicComponent[];
}

export default function EditorContent({
  contentData: contentDataInput,
}: EditorContentProps) {
  const [contentData, setContentDataChange] = useState(contentDataInput);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        const contentDataFinalItem = contentData.at(-1);
        const nextId: number = contentDataFinalItem
          ? contentDataFinalItem.id + 1
          : 1;

        const newComponentData: EditableDynamicComponent = {
          id: nextId,
          componentName: "Paragraph",
          innerText: "Insert new sentence.",
        };

        const tempContentData = contentData.slice();
        tempContentData.push(newComponentData);

        setContentDataChange(tempContentData);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contentData]);

  return (
    <div>
      {contentData.map(({ id, componentName, ...others }) => {
        const Cmp = ComponentMap[componentName];

        return (
          <TextArea
            key={`textarea-${id}`}
            textComponent={<Cmp {...others} />}
          />
        );
      })}
    </div>
  );
}
