import { useContext } from "react";
import { GlobalContext } from "../context";



function ContextButtonCompoenent(){
    const {theme1,handleChangeThemeButtonClick} = useContext(GlobalContext);
    return <button style={{
        backgroundColor: theme1 === "light"? "yellow":"red",
    }} onClick={handleChangeThemeButtonClick}
    >Change Theme</button>
}
export default ContextButtonCompoenent;