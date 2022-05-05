import React  from 'react';

export interface ThemeState{

    mode: string // light or dark

}

export interface ThemeAction{
    type: string
}

export interface Theme{
    state: ThemeState,

    //To update the state
    dispatch?: React.Dispatch<ThemeAction>
}

const defaultThemeState: Theme = {
    state: {
        mode: "dark"
    }
}

export const AppThemeContext = React.createContext(defaultThemeState)

