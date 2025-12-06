import CategoryButton from "./categoryButton";

const CategoryFillter = () => {
  return (
    <div className="flex m-4 gap-2">
      <CategoryButton name="All" />
      <CategoryButton name="Chat" />
      <CategoryButton name="Image & Video" />
      <CategoryButton name="Dev & Code" />
      <CategoryButton name="Productivity" />
    </div>
  );
};

export default CategoryFillter;
