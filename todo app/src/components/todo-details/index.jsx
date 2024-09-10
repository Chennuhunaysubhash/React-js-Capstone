/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";
//import './styles.css'


function TodoDetails({ todoDetails, openDialog, setOpenDialog, setTodoDetails }){
    return <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)} open={openDialog} sx={{
              width: '100%', // Adjust the width as needed
              height: '100%',
              backgroundImage: "url(src/images/image1.jpeg)",
              backgroundSize: 'cover', // Ensures the image covers the entire element
              backgroundPosition: 'center', // Centers the image
              backgroundRepeat: 'no-repeat',
        }}>
            <DialogTitle sx={{
                 backgroundColor: "rgb(161, 182, 105)" ,
                 color: "rgb(250, 20, 39)",
                 fontWeight:"bold",
                 fontSize:"25px",
                 "&:hover":{
                    backgroundColor: "#fff",
                    color: "rgb(108, 145, 6)"
                 }
                
            }}>{todoDetails?.todo}</DialogTitle>
            <DialogActions sx={{
               backgroundColor: "rgb(68, 152, 248)",
               color: "#fff",
               fontWeight:"bold",
               opacity: "0.75",
              
               "&:hover":{
                   backgroundColor: " rgb(1, 29, 61)",
                   color: "#000",
                   fontWeight:"bold",
                   opacity: "1",
               },
            }}>
                <Button  onClick={()=> {
                    setTodoDetails(null);
                    setOpenDialog(false);
                }
                }  sx={{
                    backgroundColor: "rgb(203, 212, 75)",
                    color: "#fff",
                    fontWeight:"bold",
                    opacity: "0.75",
                    borderRadius: "10px",
                    "&:hover":{
                        backgroundColor: "rgb(121, 129, 6)",
                        color: "#000",
                        fontWeight:"bold",
                        borderRadius: "30px",
                        opacity: "1",
                    },
                }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}

export default TodoDetails;