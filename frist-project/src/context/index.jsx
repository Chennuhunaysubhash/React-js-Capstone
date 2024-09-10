import { createContext, useState } from "react";

export const GlobalContext = createContext(null);




// eslint-disable-next-line react/prop-types
function GlobalState({children}){
    const [theme,setTheme]= useState("light");
    const [theme1,setBtheme]= useState("light");
    function handleChangeThemeButtonClick(){
        setTheme(theme === "light"? "dark":"light");
    }
    function handleChangeThemeTextClick(){
        setBtheme(theme1 === "light"? "dark":"light");
        console.log(theme1);
        
    }
    
    return <GlobalContext.Provider value={{theme,theme1,handleChangeThemeButtonClick,handleChangeThemeTextClick}}>{children}</GlobalContext.Provider>
}
export default GlobalState;