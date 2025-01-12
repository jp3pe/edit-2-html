import Bold from "./Bold";
import Italic from "./Italic";
import Paragraph from "./Paragraph";
import Strikethrough from "./Strikethrough";
import Title from "./Title";
import Toolbar from "./Toolbar";
import Underline from "./Underline";

interface EditorProps {
  className: string;
}

export default function Editor({ className }: EditorProps) {
  return (
    <div className={className}>
      <Title innerText="Title" />
      <Paragraph innerText="샘플 텍스트입니다." />
      <Bold innerText="굵게 적용된 샘플 텍스트입니다." />
      <Underline innerText="밑줄이 적용된 샘플 텍스트입니다." />
      <Strikethrough innerText="취소선이 적용된 샘플 텍스트입니다." />
      <Italic innerText="기울림이 적용된 샘플 텍스트입니다." />
      <Paragraph innerText="샘플 텍스트입니다." />
      <Paragraph innerText="샘플 텍스트입니다." />
      <Paragraph innerText="샘플 텍스트입니다." />
      {/* Toolbar 테스트용 import */}
      <Toolbar />
    </div>
  );
}
