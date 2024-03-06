import React, { useEffect, useState } from 'react';

const LocalThemedBox = (props) => {
    const [loaclTheme, setLlocalTheme] = useState(props.theme);
    const {theme} = props;

    useEffect(()=>{
        setLlocalTheme(theme);
    },[theme]);
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${loaclTheme}`}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={`txt-${loaclTheme}`}>
        lorem ipsum dolor iterit n stuff
        </p>
        <button id="local-theme-toggler" onClick={()=>{setLlocalTheme(loaclTheme==="light"?"dark":"light")}} className={`btn btn-${loaclTheme} txt-${loaclTheme}`}>{`Toggle local theme to ${loaclTheme==="light"?"dark":"light"}`}</button>
    </div>
)
}

export {LocalThemedBox}
