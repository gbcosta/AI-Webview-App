import { Tag } from "../config/tagType";
import { useActiveTag } from "../contexts/useActiveTag";

const CategoryButton = ({ tag }: { tag: Tag }) => {
  const TagContext = useActiveTag();
  const buttonIsActive =
    TagContext.tag != tag
      ? `hover:bg-zinc-800 border-border-primary 
    text-text-primary bg-background-secondary`
      : "bg-zinc-200 text-zinc-950";
  return (
    <div
      className={`border-2 px-6 py-2 rounded-3xl cursor-pointer ${buttonIsActive}`}
      onClick={() => {
        TagContext.changeActiveTag(tag);
      }}
    >
      {tag}
    </div>
  );
};

export default CategoryButton;
