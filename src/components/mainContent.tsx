import CategoryFilter from "./categoryFilter";
import CategoryInfos from "./categoryInfos";
import AiCards from "./AiCards";
import { ais } from "../config/ais.json";

const MainContent = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <CategoryFilter />
        <CategoryInfos />
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-5">
        {ais.map((ai) => {
          return <AiCards name={ai.name} content={ai.content} tag={ai.tag} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
