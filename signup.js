import { Grid, TextField,Button } from "@mui/material";
import Box from '@mui/material/Box';
import userSignup from "../firebase/firebasemethod";
import React, { useState } from "react";


const Signup = () =>{

    const [ email, setemail ] = useState("");
    const [ password, setpassword ] = useState("");
    const [ username, setusername ] = useState("");
    const [ ContactNumber, setContactNumber ] = useState("");
    const [ image, setimage ] = useState("");

   const Check = () =>{
    userSignup({email,password,}).then((sucess)=>{
 console.log("enter")
    }).catch((error)=>{
console.log(error)
    })
   }

    return(
       
       
       <Grid>
            <h1>SignUp</h1>
           
            <Box sx={{display: 'flex', flexDirection: 'column', width: '20%'}}>
            <TextField  onChange={(e)=>setemail(e.target.value) } id="outlined-basic" label="Email" variant="outlined" />
            <TextField  onChange={(e)=>setpassword(e.target.value) } id="outlined-basic" label="Password" variant="outlined" />
            <TextField  onChange={(e)=>setusername(e.target.value) } id="outlined-basic" label="Username" variant="outlined" />
            <TextField  onChange={(e)=>setContactNumber(e.target.value) } id="outlined-basic" label="ContactNumber" variant="outlined" />
            <TextField  onChange={(e)=>setimage(e.target.value) } variant="outlined" type="file" />
            <Button type="button" onClick={Check}>SignUp</Button>
            </Box>
            

        </Grid>
    )
}

export default Signup;