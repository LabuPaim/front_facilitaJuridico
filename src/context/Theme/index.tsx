import { useState, ReactNode, createContext } from "react";
import { ThemeValue } from "../../types/Theme";

type TemeProviderProps = {
    children: ReactNode;
};

type TemeProps = {
    theme: ThemeValue;
    setTheme: (value: ThemeValue) => void;
};

export const TemeContext = createContext({} as TemeProps);

export const TemeProvider = ({ children }: TemeProviderProps) => {
    const [theme, setTheme] = useState(ThemeValue.light);

    return <TemeContext.Provider value={{ theme, setTheme }}>{children}</TemeContext.Provider>;
};
