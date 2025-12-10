import CategoryFilter from "./categoryFilter";
import CategoryInfos from "./categoryInfos";
import AiCards from "./AiCards";
import { ais } from "../config/ais.json";
import { BorderColor } from "../config/borderColor";
import { useEffect, useState } from "react";
import { Tag } from "../config/tagType";

const MainContent = () => {
  const [tag, setTag] = useState("all");
  const [aisByFilter, setAisByFilter] = useState(ais);

  useEffect(() => {
    setAisByFilter(
      ais.filter((e) => {
        return e.tag == tag || tag == "all";
      }),
    );
  }, [tag]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <CategoryFilter />
        <CategoryInfos />
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-5">
        {aisByFilter.map((ai, key) => {
          return (
            <AiCards
              key={key}
              name={ai.name}
              content={ai.content}
              tag={ai.tag as Tag}
              color={ai.color as BorderColor}
              link={ai.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
