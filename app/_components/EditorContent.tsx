import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

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

const TEXTAREA_PREFIX = "textarea-";

interface EditorContentProps {
  setToolbarDisplayPropertyValue: Dispatch<SetStateAction<string>>;
  contentData: EditableDynamicComponent[];
}

export default function EditorContent({
  setToolbarDisplayPropertyValue,
  contentData: contentDataInput,
}: EditorContentProps) {
  const [contentData, setContentData] = useState(contentDataInput);

  const handleEnterKeyDown = useCallback(() => {
    const contentDataFinalItem = contentData.at(-1);
    const nextId: number = contentDataFinalItem
      ? contentDataFinalItem.id + 1
      : 1;

    const newComponentData: EditableDynamicComponent = {
      id: nextId,
      componentName: "Paragraph",
      innerText: "Insert new sentence.",
    };

    const tempContentData = [...contentData, newComponentData];
    setContentData(tempContentData);
  }, [contentData]);

  const handleBackspaceKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const targetElement: HTMLElement = e.target as HTMLElement;
      const targetParentElement: HTMLElement | null =
        targetElement.parentElement;

      if (targetParentElement !== null && targetElement.innerText === "\n") {
        const indexToDelete = contentData.findIndex(
          (contentDatum) =>
            `${TEXTAREA_PREFIX}${contentDatum.id}` === targetParentElement.id
        );
        const tempContentData = [...contentData];
        tempContentData.splice(indexToDelete, 1);

        setContentData(tempContentData);
        setToolbarDisplayPropertyValue("none");
      }
    },
    [contentData, setToolbarDisplayPropertyValue]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        handleEnterKeyDown();
      } else if (e.key === "Backspace") {
        handleBackspaceKeyDown(e);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleEnterKeyDown, handleBackspaceKeyDown]);

  function renderTextAreas({
    id,
    componentName,
    ...others
  }: EditableDynamicComponent) {
    const Cmp = ComponentMap[componentName];

    return (
      <TextArea
        id={`${TEXTAREA_PREFIX}${id}`}
        key={`${TEXTAREA_PREFIX}${id}`}
        textComponent={<Cmp {...others} />}
      />
    );
  }

  return <div>{contentData.map(renderTextAreas)}</div>;
}
