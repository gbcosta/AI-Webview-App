import CategoryFilter from "./categoryFilter";
import CategoryInfos from "./categoryInfos";
import AiCards from "./AiCards";
import { BorderColor } from "../config/borderColor";
import { Tag } from "../config/tagType";
import { ais } from "../config/ais.json";
import { useEffect, useState } from "react";
import { useActiveTag } from "../contexts/useActiveTag";

const MainContent = () => {
  const [aisByFilter, setAisByFilter] = useState(ais);

  const activeTagContext = useActiveTag();
  useEffect(() => {
    setAisByFilter(
      ais.filter((e) => {
        return e.tag == activeTagContext.tag || activeTagContext.tag == "All";
      }),
    );
  }, [activeTagContext.tag]);

  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <CategoryFilter />
        <CategoryInfos toolsFinded={aisByFilter.length} />
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
