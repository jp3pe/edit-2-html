import React from "react";

import { $createTextNode, $getRoot } from "lexical";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const theme = {
  // Theme styling goes here
  //...
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

function MyHeadingPlugin() {
  const [editor] = useLexicalComposerContext();
  const onClick = (e: React.MouseEvent): void => {
    editor.update(() => {
      const root = $getRoot();
      root.append(
        $createHeadingNode("h1").append($createTextNode("Hello world"))
      );
    });
  };

  return <button onClick={onClick}>Heading</button>;
}

export default function EditorContent() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <MyHeadingPlugin />
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
