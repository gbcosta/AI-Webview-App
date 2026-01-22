import { ComponentPropsWithoutRef, ReactNode } from "react";

interface SelectSettingsTabProps extends ComponentPropsWithoutRef<"select"> {
  label: string;
  children: ReactNode[];
}
export const SelectSettingsTab = ({
  label,
  children,
  ...props
}: SelectSettingsTabProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-text-primary">{label}</label>
      <select
        className="outline-none border-2 border-border-primary
          rounded-md text-text-primary px-2 bg-none h-9 appearance-none"
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

interface InputSettingsTabProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export const InputSettingsTab = ({
  label,
  ...props
}: InputSettingsTabProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-text-primary">{label}</label>
      <input
        {...props}
        className="outline-none border-2 border-border-primary
          rounded-md text-text-primary px-2 h-9"
      />
    </div>
  );
};

export const SettingTab = ({
  children,
  tabName,
}: {
  children: ReactNode[];
  tabName: string;
}) => {
  return (
    <div className="flex flex-col pl-4 pt-1 gap-2 h-screen overflow-auto">
      <h1 className="text-text-primary text-2xl font-bold">{tabName}</h1>
      <div className="flex flex-col max-w-48 gap-2">{children}</div>
    </div>
  );
};
