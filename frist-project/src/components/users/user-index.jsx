import { useEffect } from "react";
import { useState } from "react";
import "./user-style.css"
export default function Users(){
    const [usersList,setUserList]= useState([]);
    //const [pending,setPending]= useState(true);
    const [display,setDisplay] = useState(false);
    async function fetchAllUser(){
        try{
            //setPending(true);
            
            console.log(display);
           const apiResponse = await fetch('https://dummyjson.com/users');
           //const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await apiResponse.json();
            console.log(result);
            if(result?.users){
                setUserList(result?.users);
                //setPending(false);
                setDisplay(false);
            }else{
                setUserList([]);
                //setPending(false);
                
            }
           
        }catch(error){
            console.log(error);
        }
        
        console.log(display);
    }
    function listEmpty(){
        setUserList([]);
        setDisplay(true)
    }
    useEffect(()=>{
        setDisplay(false);
       fetchAllUser();
     
    },[])
    console.log(usersList);
    //if(pending) return <h1>fetching the data! please wait</h1>
    
    return(<div>
        <h2 className="user-head">All User Lists</h2>
        <button onClick={display? fetchAllUser:listEmpty}>Users</button>
        <ul>
                { 
                    usersList && usersList.length >0 ?(
                        usersList.map((userItem) =>(
                            <li key={userItem?.id}>
                                <p>
                                    {userItem?.firstName} {userItem?.lastName}
                                </p>
                            </li>
                        ))
                    ):(<p>empty list</p>)
                }
            </ul>
    </div>);
}