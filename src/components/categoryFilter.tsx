import CategoryButton from "./categoryButton";

const CategoryFilter = () => {
  return (
    <div className="flex gap-2">
      <CategoryButton tag="All" />
      <CategoryButton tag="Chat" />
      <CategoryButton tag="Image & Video" />
      <CategoryButton tag="Dev & Code" />
      <CategoryButton tag="Productivity" />
    </div>
  );
};

export default CategoryFilter;
