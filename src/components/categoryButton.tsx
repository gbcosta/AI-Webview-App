import { Tag } from "../config/tagType";
import { useActiveTag } from "../contexts/useActiveTag";

const CategoryButton = ({ tag }: { tag: Tag }) => {
  const TagContext = useActiveTag();
  const buttonIsActive = "bg-zinc-200 text-zinc-950";
  const buttonIsNotActive = `hover:bg-zinc-800 border-border-primary 
    text-text-primary bg-background-secondary`;

  const buttonState =
    TagContext.tag != tag ? buttonIsNotActive : buttonIsActive;

  return (
    <div
      className={`border-2 px-6 py-2 rounded-3xl cursor-pointer ${buttonState}`}
      onClick={() => {
        TagContext.changeActiveTag(tag);
      }}
    >
      {tag}
    </div>
  );
};

export default CategoryButton;
