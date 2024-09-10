import { useReducer } from "react";


const initalState={
    showTextFlag :false,
    changeTextStylesFlag : false,
    changeFontStylesFlag : false
}

const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE';
const CHANGE_FONT_STYLE = 'CHANGE_FONT_STYLE';

function reducer(state, action) {
    switch(action.type) {
        case "HIDE_TEXT":
            return {
                ...state,
                showTextFlag: false
            };
        case "SHOW_TEXT":
            return {
                ...state,
                showTextFlag: true
            };
        case "CHANGE_TEXT_STYLE":
            return {
                ...state,
                changeTextStylesFlag: !state.changeTextStylesFlag
            };
            case "CHANGE_FONT_STYLE":
                return {
                    ...state,
                    changeFontStylesFlag: !state.changeFontStylesFlag,
                    
                };    
        default:
            return state;
    }
}

export default function UseReducerExample(){
    const [state,dispatch] = useReducer(reducer,initalState)
    return(
        <div>
            {
                state?.showTextFlag ? <h3
                style={
                    {
                        backgroundColor: state?.changeTextStylesFlag ? "black":"blue", 
                        fontSize: state?.changeFontStylesFlag ? "20px":"30px"
                    }
                }>Use Reducer Hook Example</h3>:null
            }
            
            <button onClick={()=> dispatch({type: HIDE_TEXT})}>Hide Text</button>
            <button onClick={()=> dispatch({type: SHOW_TEXT})}>Show Text</button>
            <button onClick={()=> dispatch({type: CHANGE_TEXT_STYLE})}>Toggle Text Styles</button>
            <button onClick={()=> dispatch({type: CHANGE_FONT_STYLE})}>Toggle Font Styles</button>
        </div>
    );
}