import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  FocusEvent,
} from "react";
import { SettingsType, ViewType } from "../../config/settingsType";
import { getNumberInRange } from "../../config/utils";
import { getCurrentWindow, Theme } from "@tauri-apps/api/window";
import { getCurrentWebview } from "@tauri-apps/api/webview";
import { SettingTab, SelectSettingsTab, InputSettingsTab } from "./settingsTab";

export const View = ({
  settings,
  setSettings,
}: {
  settings: SettingsType;
  setSettings: Dispatch<SetStateAction<SettingsType | undefined>>;
}) => {
  const [viewSettings, setViewSettings] = useState<ViewType>({
    ...settings.view,
    zoom: settings.view.zoom,
  });
  const [zoom, setZoom] = useState(settings.view.zoom.toString());

  const handleChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    setViewSettings({ ...viewSettings, theme: e.target.value });
    setSettings({
      ...settings,
      view: {
        ...settings.view,
        theme: e.target.value,
      },
    });
    getCurrentWindow().setTheme(e.target.value as Theme);
  };

  const handleChangeZoom = (e: FocusEvent<HTMLInputElement, Element>) => {
    const newZoom = getNumberInRange(Number(e.target.value), {
      min: 0.25,
      max: 2,
      isNan: 1,
    });

    getCurrentWebview().setZoom(newZoom);
    setViewSettings({ ...viewSettings, zoom: newZoom });
    setZoom(newZoom.toString());

    setSettings({
      ...settings,
      view: {
        ...viewSettings,
        zoom: newZoom,
      },
    });
  };

  return (
    <SettingTab tabName="View">
      <div className="flex flex-col w-full">
        <SelectSettingsTab
          label="Theme"
          value={viewSettings.theme}
          onChange={handleChangeTheme}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </SelectSettingsTab>
      </div>
      <div className="flex flex-col w-full">
        <InputSettingsTab
          label="Zoom"
          value={zoom}
          onBlur={handleChangeZoom}
          onChange={(e) => {
            setZoom(e.target.value);
          }}
        />
      </div>
    </SettingTab>
  );
};
