import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BaseDirectory, readFile, writeFile } from "@tauri-apps/plugin-fs";
import defaultSettings from "../../config/defaultSettings.json";
import { SettingsType } from "../../config/settingsType";
import { IoMdClose } from "react-icons/io";
import { View } from "./view";

const SettingsMenu = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [tabSelected, setTabSelected] = useState("View");
  const [settings, setSettings] = useState<SettingsType | undefined>(undefined);
  const tabs = [{ name: "View", component: View }];

  useEffect(() => {
    const readSettings = async () => {
      await readFile("./settings.json", {
        baseDir: BaseDirectory.AppData,
      })
        .then((file) => {
          const decoder = new TextDecoder("utf-8");
          const _settings = JSON.parse(decoder.decode(file)) as SettingsType;
          setSettings(_settings);
        })
        .catch(async () => {
          setSettings(defaultSettings);
        });
    };
    readSettings();
  }, []);

  useEffect(() => {
    const data = new TextEncoder().encode(JSON.stringify(settings));
    writeFile("./settings.json", data, {
      baseDir: BaseDirectory.AppData,
    });
  }, [settings]);

  const tabsMenu = tabs.map((tab, key) => {
    return (
      <MenuTabItem
        key={key}
        tabName={tab.name}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
    );
  });

  const tabsSettingsScreens = (settings: SettingsType) => {
    return tabs.map((tab, key) => {
      return tab.name == tabSelected ? (
        <tab.component
          key={key}
          setSettings={setSettings}
          settings={settings}
        />
      ) : (
        <></>
      );
    });
  };

  const isSettingsHidden = isActive ? "flex" : "hidden";
  return (
    <div className={`${isSettingsHidden} h-screen justify-center`}>
      <div className="h-screen bg-background-primary grid grid-cols-12 grid-rows-12 w-7xl">
        <div className="border-r-2 border-border-primary col-span-4 row-span-12">
          <ul className="flex flex-col items-end justify-center">{tabsMenu}</ul>
        </div>
        <div className="col-span-8 row-span-12">
          {settings != undefined ? tabsSettingsScreens(settings) : <></>}
        </div>
        <div
          className="text-white fixed top-0 right-0 mt-5 mr-10 text-2xl
          cursor-pointer hover:text-zinc-400"
          onClick={() => {
            setIsActive(false);
          }}
        >
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};

const MenuTabItem = ({
  tabSelected,
  tabName,
  setTabSelected,
}: {
  tabSelected: string;
  tabName: string;
  setTabSelected: Dispatch<SetStateAction<string>>;
}) => {
  const selected = "text-text-primary";
  const notSelected = "hover:text-zinc-300 text-text-secondary";
  const isSelected = tabName == tabSelected ? selected : notSelected;
  return (
    <li
      className={`px-4 py-1 cursor-pointer w-full text-end text-lg ${isSelected}`}
      onClick={() => {
        setTabSelected(tabName);
      }}
    >
      {tabName}
    </li>
  );
};

export default SettingsMenu;
