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

export default function EditorContent({ contentData }: EditorContentProps) {
  return (
    <div>
      {contentData.map(({ id, componentName, ...others }) => {
        const Cmp = ComponentMap[componentName];

        return (
          <TextArea
            key={`textarea-${id}`}
            textComponent={<Cmp key={`title-${id}`} {...others} />}
          />
        );
      })}
    </div>
  );
}
