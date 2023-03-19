import React from "react";

type DarkModeSettingsType = {
    darkModeEnabled: boolean,
};

const DarkModeSettings = React.createContext<DarkModeSettingsType>({
    darkModeEnabled: false,
});

export default DarkModeSettings;