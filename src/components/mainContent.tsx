import CategoryFilter from "./categoryFilter";
import CategoryInfos from "./categoryInfos";
import AiCards from "./AiCards";
import { BorderColor } from "../config/borderColor";
import { Tag } from "../config/tagType";
import { ais } from "../config/ais.json";
import { useEffect, useState } from "react";
import { useActiveTag } from "../contexts/useActiveTag";
import { useSearchbarValue } from "../contexts/useSerchbarValue";

const MainContent = () => {
  const [aisByFilter, setAisByFilter] = useState(ais);
  const searchbarValueContext = useSearchbarValue();
  const activeTagContext = useActiveTag();

  const handleFiltersChange = () => {
    setAisByFilter(
      ais
        .filter((e) => {
          return e.tag == activeTagContext.tag || activeTagContext.tag == "All";
        })
        .filter((e) => {
          return (
            e.name
              .toLowerCase()
              .includes(searchbarValueContext.value.toLowerCase()) ||
            searchbarValueContext.value == ""
          );
        }),
    );
  };

  useEffect(() => {
    handleFiltersChange();
  }, [activeTagContext.tag, searchbarValueContext.value]);

  return (
    <div className="p-6 flex flex-col gap-4 overflow-hidden">
      <div className="flex flex-col gap-4">
        <CategoryFilter />
        <CategoryInfos toolsFinded={aisByFilter.length} />
      </div>
      <div
        className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4
        grid-cols-1 gap-5 overflow-scroll py-4 px-4"
      >
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
