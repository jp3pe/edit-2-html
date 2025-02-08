import { EditableDynamicComponent } from "../_mock/editorData";
import {
  Bold,
  Italic,
  Paragraph,
  Strikethrough,
  Underline,
} from "@/app/_components/CustomComponents";

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

export default function EditorContent({ contentData }: EditorContentProps) {
  return (
    <div>
      {contentData.map(({ componentName, ...others }) => {
        const Cmp = ComponentMap[componentName];

        return (
          // TODO: Change div into using TextArea component?
          <div key={`title-${others.id}`}>
            <Cmp key={`title-${others.id}`} {...others} />
          </div>
        );
      })}
    </div>
  );
}
