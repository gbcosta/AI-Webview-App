import CategoryFilter from "./categoryFilter";
import CategoryInfos from "./categoryInfos";
import AiCards from "./AiCards";

const MainContent = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <CategoryFilter />
        <CategoryInfos />
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-5">
        <AiCards />
      </div>
    </div>
  );
};

export default MainContent;
