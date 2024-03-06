import { useContext } from 'react';
import React from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeToggleButton = () =>{
    const {theme,changeTheme} = useContext(ThemeContext)
    return (
       <button id="global-theme-toggler" className={`btn btn-${theme} txt-${theme}`} onClick={changeTheme} >
        {`Switch to ${theme=="light"?"dark":"light"} theme`}
       </button>
    )
}
export {ThemeToggleButton}
