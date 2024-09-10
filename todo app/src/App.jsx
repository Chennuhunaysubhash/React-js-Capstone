import { useEffect, useState } from "react"
import classes from './styles.module.css';
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";
function App() {
  const [loading, setloading] = useState(false);
  const [todoList, setTodoList]= useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);


  async function fetchListOfTodos() {
    try {
      setloading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log(result);
      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result?.todos);
        setloading(false);
        setErrorMsg("");
      }else{
        setTodoList([]);
        setloading(false);
        setErrorMsg("");
      }
      
    } catch (error) {
      console.log(error);
      setErrorMsg('some error ocurred')
      
    }
  }
  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = await apiResponse.json();
      if(details){
        setTodoDetails(details);
        setOpenDialog(true)
      }else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
      console.log(details);
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  useEffect(()=>{
    fetchListOfTodos();
  },[])



  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} sx={{
      backgroundColor: 'lightgray', // Custom background color
      borderRadius: '8px', // Rounded corners
      margin: '20px', // Margin around the skeleton
    }}/>;


return(
<div className={classes.mainWrapper}>
  <h1 className={classes.headerTitle}> Sample Todo List App Using Material UI</h1>
  <div className={classes.todoListWrapper}>
    {
      todoList && todoList.length > 0 
      ? todoList.map((todoItem) => (
      // eslint-disable-next-line react/jsx-key
      <TodoItem 
      fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
      todo={todoItem} />
    ))
      :null}
  </div>
  <TodoDetails
  setOpenDialog={setOpenDialog}
  openDialog={openDialog}
  todoDetails={todoDetails}
  setTodoDetails={setTodoDetails}
  />
</div>
);
}

export default App
