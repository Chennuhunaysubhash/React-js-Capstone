
import Productlistseq from "./productlist/productlistseq"
import "./product-index.css"
import { useEffect, useState } from "react";
const dummy = ["Apple", "Banana", "Cat"];

const initFlagValue = true;


function ProductList() {
    const[flag,setFlag] = useState(initFlagValue);
    const[count,setCount]= useState(0);
    const[changeStyle,setChangeStyle]=useState(false);

    function handlerFlag(){
        setFlag(!flag);
    }
    function handlerCount(){
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("only once load");
        setFlag(!flag)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
            if(count===10) setChangeStyle(!changeStyle);
    },[count]);
    return (
        <div className="div-product">
            <button onClick={handlerFlag}>Toggle text</button>
            {
                flag ?(<h4>hunay subhash chennu</h4>):(<h4>false</h4>)
            }
            <div>
                <button style={{backgroundColor: changeStyle? 'blue':'pink'}} onClick={handlerCount}>add+</button>
                <p style={{color: changeStyle? 'red':'black', fontSize: changeStyle? '30px':'12px'}}>Count is {count}</p>
            </div>
           
            <h3>Product List</h3>
            <ol>
            {dummy.map((product, index) => (
                <Productlistseq item={product} key={index}/>
            ))}
            </ol>

        </div>
    );
}

export default ProductList;
