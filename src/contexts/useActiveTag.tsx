import { createContext, useState, ReactNode, useContext } from "react";
import { Tag } from "../config/tagType";

interface activeTagContextType {
  tag: Tag;
  changeActiveTag: (tagName: Tag) => void;
  getActiveTag: () => Tag;
  resetTag: () => void;
}

const activeTagContext = createContext<activeTagContextType | undefined>(
  undefined,
);

export const ActiveTagProvider = ({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) => {
  const [tag, setTag] = useState<Tag>("all");
  const changeActiveTag = (tagName: Tag) => {
    setTag(tagName);
  };

  const getActiveTag = () => tag;

  const resetTag = () => setTag("all");

  const contextValue = {
    tag,
    changeActiveTag,
    getActiveTag,
    resetTag,
  };

  return (
    <activeTagContext.Provider value={contextValue}>
      {children}
    </activeTagContext.Provider>
  );
};

export const useActiveTag = () => {
  const context = useContext(activeTagContext);
  if (context === undefined)
    throw new Error("useActiveTag must be used inside of widgetProvider");
  return context;
};
