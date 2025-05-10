import { createContext, useContext, useState } from "react";

type Settings = {
  language: string;
};

const SettingsContext = createContext({
  settings: { language: "none" },
  setSettings: (value: Settings) => {},
});

type SettingsToggleProps = {
  children: React.ReactNode;
};

const SettingsProvider = (props: SettingsToggleProps) => {
  const [settings, setSettings] = useState<Settings>({ language: "english" });

  return (
    <SettingsContext.Provider
      value={{ settings: settings, setSettings: setSettings }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

function useSettings() {
  const settings = useContext(SettingsContext);
  return settings;
}

export { SettingsProvider, useSettings };
