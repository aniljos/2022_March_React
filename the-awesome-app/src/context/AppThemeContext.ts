import React  from 'react';

export interface ThemeState{

    mode: string // light or dark
}

const defaultThemeState: ThemeState = {
    mode: "dark"
}

export const AppThemeContext = React.createContext(defaultThemeState)