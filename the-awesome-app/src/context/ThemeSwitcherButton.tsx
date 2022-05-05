import React, { useContext } from 'react';
import { AppThemeContext } from './AppThemeContext';


const ThemeSwitcherButton = React.memo(() => {

    const theme = useContext(AppThemeContext);
    function switchTheme(){

        if(theme.dispatch){

            if(theme.state.mode === "dark"){
                theme.dispatch({
                    type: "LIGHT"
                });
            }

            if(theme.state.mode === "light"){
                theme.dispatch({
                    type: "DARK"
                });
            }
        }
    }

    return (
        <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
    );
})


export default ThemeSwitcherButton;