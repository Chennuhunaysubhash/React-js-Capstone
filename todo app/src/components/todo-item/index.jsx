import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";


// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
function  TodoItem({todo, fetchDetailsOfCurrentTodo}){
    console.log(todo);
    
    return (<Card sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        
        backgroundColor: "rgb(161, 182, 105)" ,
                 fontWeight:"bold",
                 fontSize:"25px",
                 "&:hover":{
                    width: '100%', // Adjust the width as needed
                    height: '100%',
                    backgroundImage: "url(src/images/image1.jpeg)",
                    backgroundSize: 'cover', // Ensures the image covers the entire element
                    backgroundPosition: 'center', // Centers the image
                    backgroundRepeat: 'no-repeat',
                 }
    }
    }>
        <CardContent>
            <Typography variant="h5" color={"text.secondary"} sx={
            {
                "&:hover":{
                    color: "#fff",
                }
            }
        }>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button 
            onClick={()=> fetchDetailsOfCurrentTodo(todo?.id)}
            sx={{
                backgroundColor: "#000000",
                color: "#fff",
                opacity: "0.75",
                "&:hover":{
                    backgroundColor: "#000000",
                    color: "#fff",
                    opacity: "1",
                },
            }
            }>Details</Button>
        </CardActions>
    </Card>);
}

export default TodoItem;