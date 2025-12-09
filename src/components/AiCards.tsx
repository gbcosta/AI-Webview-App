import { FaExternalLinkAlt } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BorderColor, gradients } from "../config/borderColor";

const Tag = ({ children }: { children: string }) => {
  return (
    <span
      className="bg-background-primary text-text-secondary 
      px-3 shrink-0 py-1 rounded-3xl border-border-primary border-2
      text-tiny"
    >
      {children}
    </span>
  );
};

const AiCards = ({
  tag,
  name,
  content,
  color,
  link,
}: {
  tag: string;
  name: string;
  content: string;
  color: BorderColor;
  link: string;
}) => {
  return (
    <div
      className="flex  h-full w-full p-3 
    bg-background-secondary rounded-lg border-border-primary border-2
    hover:-translate-y-2 transition-all duration-300 cursor-pointer group
    hover:bg-zinc-900"
      onClick={() => {
        window.location.href = link;
      }}
    >
      <div className="flex flex-col items-start gap-2">
        <div className={`bg-linear-to-tl p-0.5 rounded-lg ${gradients[color]}`}>
          <div className="relative text-white bg-black text-xl p-2 rounded-lg flex">
            <IoChatbubbleOutline className="" />
          </div>
        </div>
        <span className="text-lg font-bold text-text-primary text-md">
          {name}
        </span>
        <p className="text-[0.8rem] text-text-secondary flex flex-1">
          {content}
        </p>
        <Tag>{tag.toUpperCase()}</Tag>
      </div>
      <div className="flex flex-1 justify-end">
        <FaExternalLinkAlt
          className="text-zinc-700 text-sm group-hover:text-text-primary
          transition-all"
        />
      </div>
    </div>
  );
};

export default AiCards;
