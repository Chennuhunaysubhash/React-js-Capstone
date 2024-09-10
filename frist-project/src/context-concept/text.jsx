import { useContext } from "react";
import { GlobalContext } from "../context";

function ContextTextComponent(){
    const {theme,theme1,handleChangeThemeTextClick} = useContext(GlobalContext);
    const name = theme1 === "light"? "Hunay Subhash Chennu":"Pawan Kalyan";
    return(
        
    <div>
        
        <h2
        style={{
        fontSize: theme ==="light"? "70px":"70px",
        backgroundColor: theme === "light"? "yellow":"blue",
        color: theme ==="light"? "blue":"yellow",
        borderRadius: theme ==="light"? "20px":"20px",
        }}>{name}</h2>
       <button onClick={handleChangeThemeTextClick}>Change Button Color</button>
    </div>
    );
   
}

export default ContextTextComponent;