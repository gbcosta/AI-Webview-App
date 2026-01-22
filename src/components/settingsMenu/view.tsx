import { Dispatch, SetStateAction, useState } from "react";
import { SettingsType, ViewType } from "../../config/settingsType";
import { getNumberInRange } from "../../config/utils";
import { getCurrentWindow, Theme } from "@tauri-apps/api/window";
import { getCurrentWebview } from "@tauri-apps/api/webview";

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

  return (
    <div className="flex flex-col pl-4 pt-1 gap-2 h-screen overflow-auto">
      <h1 className="text-text-primary text-2xl font-bold">View</h1>
      <div className="flex flex-col max-w-48 gap-2">
        <div className="flex flex-col w-full">
          <label className="text-text-primary">Theme</label>
          <select
            className="outline-none border-2 border-border-primary
          rounded-md text-text-primary px-2 bg-none h-9 appearance-none"
            value={viewSettings.theme}
            onChange={(e) => {
              setViewSettings({ ...viewSettings, theme: e.target.value });
              setSettings({
                ...settings,
                view: {
                  ...settings.view,
                  theme: e.target.value,
                },
              });
              getCurrentWindow().setTheme(e.target.value as Theme);
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="text-text-primary">Zoom</label>
          <input
            value={zoom}
            className="outline-none border-2 border-border-primary
          rounded-md text-text-primary px-2 h-9"
            onBlur={(e) => {
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
            }}
            onChange={(e) => {
              setZoom(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
