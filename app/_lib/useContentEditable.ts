import { ChangeEvent, useEffect, useRef, useState } from "react";
import { focusContentEditableTextToEnd } from "./events";

export const useContentEditable = (initialContent: string) => {
  // HTMLParagraphElement can be change into HTMLDivElement in the future.
  const $contentEditable = useRef<HTMLParagraphElement | null>(null);

  const [content, _setContent] = useState(initialContent);

  const onInput = (event: ChangeEvent<HTMLParagraphElement>) => {
    _setContent(event.target.innerText);
  };

  const setContent = (newContent: string) => {
    if ($contentEditable.current) {
      $contentEditable.current.innerText = newContent;

      _setContent(newContent);
    }
  };

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    function handleKeyDown() {
      if ($contentEditable.current) {
        focusContentEditableTextToEnd($contentEditable.current);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { content, setContent, onInput, $contentEditable };
};
