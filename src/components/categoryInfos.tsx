import { FiLayout } from "react-icons/fi";

const CategoryInfos = ({ toolsFinded }: { toolsFinded: number }) => {
  return (
    <div className="flex w-full">
      <div className="flex gap-4">
        <FiLayout className="text-2xl text-indigo-500" />
        <span className="text-text-primary font-bold text-lg">All Tools </span>
      </div>
      <div className="flex-1 text-right">
        <span
          className="bg-background-secondary text-text-secondary px-3
          py-1 rounded-lg border-border-primary border-2"
        >
          {toolsFinded} Tools
        </span>
      </div>
    </div>
  );
};

export default CategoryInfos;
