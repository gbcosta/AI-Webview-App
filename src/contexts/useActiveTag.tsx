import { createContext, useState, ReactNode, useContext } from "react";

interface activeTagContextType {
  tag: string;
  changeActiveTag: (tagName: string) => void;
  getActiveTag: () => string;
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
  const [tag, setTag] = useState<string>("");
  const changeActiveTag = (tagName: string) => {
    setTag(tagName);
  };

  const getActiveTag = () => tag;

  const resetTag = () => setTag("");

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
