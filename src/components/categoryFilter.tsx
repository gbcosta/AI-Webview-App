import CategoryButton from "./categoryButton";

const CategoryFilter = () => {
  return (
    <div className="flex gap-2">
      <CategoryButton name="All" />
      <CategoryButton name="Chat" />
      <CategoryButton name="Image & Video" />
      <CategoryButton name="Dev & Code" />
      <CategoryButton name="Productivity" />
    </div>
  );
};

export default CategoryFilter;
