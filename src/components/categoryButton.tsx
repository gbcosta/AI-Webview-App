const CategoryButton = ({ name }: { name: string }) => {
  return (
    <div
      className="text-text-primary bg-background-secondary border-2
        border-border-primary px-6 py-2 rounded-3xl cursor-pointer hover:bg-zinc-800"
    >
      {name}
    </div>
  );
};

export default CategoryButton;
