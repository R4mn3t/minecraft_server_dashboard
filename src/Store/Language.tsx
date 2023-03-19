import React from "react";

type LanguageType = {
    language: 'en' | 'de',
};

const Language = React.createContext<LanguageType>({
    language: 'en',
});

export default Language;