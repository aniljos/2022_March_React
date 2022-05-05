import React, { useReducer } from 'react';
import { AppThemeContext, Theme, ThemeAction, ThemeState } from "./AppThemeContext";



const initState: ThemeState={

    mode: "dark"
    
  }

  const reducer = (currentState: ThemeState, action: ThemeAction) : ThemeState=> {

    if(action.type === "DARK"){
        return {
            ...currentState,
            mode: "dark"
        }
    }
    if(action.type === "LIGHT"){
        return {
            ...currentState,
            mode: "light"
        }
    }

    return currentState;
  }

function AppThemeProvider(props: any){


    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <AppThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppThemeContext.Provider>

    )
}

export default AppThemeProvider;