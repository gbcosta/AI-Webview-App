import { createContext, ReactNode, useContext, useState } from "react";

interface searchbarValueContextType {
  value: string;
  changeValue: (text: string) => void;
  getValue: () => string;
  resetValue: () => void;
}

const searchbarValueContext = createContext<
  searchbarValueContextType | undefined
>(undefined);

export const SearchbarValueProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [value, setValue] = useState("");

  const changeValue = (text: string) => {
    setValue(text);
  };

  const getValue = () => value;

  const resetValue = () => {
    setValue("");
  };

  const contextValue = {
    value,
    changeValue,
    getValue,
    resetValue,
  };

  return (
    <searchbarValueContext.Provider value={contextValue}>
      {children}
    </searchbarValueContext.Provider>
  );
};

export const useSearchbarValue = () => {
  const context = useContext(searchbarValueContext);
  if (context === undefined) {
    throw new Error("useActiveTag must be used inside of widgetProvider");
  }
  return context;
};
