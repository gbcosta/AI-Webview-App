import { useState } from "react";
import { ActiveTagProvider } from "../contexts/useActiveTag";
import { SearchbarValueProvider } from "../contexts/useSerchbarValue";
import Header from "./header";
import MainContent from "./mainContent";
import SettingsMenu from "./settingsMenu";

const Home = () => {
  const [isSettingsMenuActive, setIsSettingsMenuActive] = useState(false);

  const isHomeHidden = !isSettingsMenuActive ? "flex" : "hidden";
  return (
    <ActiveTagProvider>
      <SearchbarValueProvider>
        <div
          className={`${isHomeHidden} flex-col h-screen bg-background-primary select-none `}
        >
          <Header
            isSettingsMenuActive={isSettingsMenuActive}
            setIsSettingsMenuActive={setIsSettingsMenuActive}
          />
          <MainContent />
        </div>
        <SettingsMenu
          isActive={isSettingsMenuActive}
          setIsActive={setIsSettingsMenuActive}
        />
      </SearchbarValueProvider>
    </ActiveTagProvider>
  );
};

export default Home;
