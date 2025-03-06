import React from "react";

import { $getSelection, $isRangeSelection } from "lexical";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $setBlocksType } from "@lexical/selection";

import "./styles.css";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListItemNode,
  ListNode,
} from "@lexical/list";

const theme = {
  heading: {
    h1: "editor-h1",
    h2: "editor-h2",
    h3: "editor-h3",
  },
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

type HeadingTag = "h1" | "h2" | "h3";
function HeadingToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const headingTags: HeadingTag[] = ["h1", "h2", "h3"];
  const onClick = (tag: HeadingTag): void => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag));
      }
    });
  };

  return (
    <>
      {headingTags.map((tag) => (
        <button
          onClick={() => {
            onClick(tag as HeadingTag);
          }}
          key={tag}
        >
          {tag.toUpperCase()}
        </button>
      ))}
    </>
  );
}

type ListTag = "ol" | "ul";
function ListToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const listTags: ListTag[] = ["ol", "ul"];
  const onClick = (tag: ListTag): void => {
    if (tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  return (
    <>
      {listTags.map((tag) => (
        <button
          onClick={() => {
            onClick(tag as ListTag);
          }}
          key={tag}
        >
          {tag.toUpperCase()}
        </button>
      ))}
    </>
  );
}

function ToolbarPlugin() {
  return (
    <div>
      <HeadingToolbarPlugin />
      <ListToolbarPlugin />
    </div>
  );
}

export default function EditorContent() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <ListPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={"Enter some text..."}
            placeholder={<div>Enter some text...</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
