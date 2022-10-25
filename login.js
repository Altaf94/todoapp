import { Grid, TextField,Button } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useState } from "react";
import loginUser from '../firebase/firebasemethod'

const Login = () => {
    
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    

    const Login = () =>{
        loginUser({email,password}).then((sucess) =>{
            console.log("sucess")
            }).catch((error) =>{
                console.log(error)
            })
    }


    
    return (
       
       <Grid className="box">
        <Box sx={{display: 'flex', flexDirection: 'column', width: '20%'}}>
        <Grid className="Signup">
        <h1>Login</h1>
        <TextField  onChange={(e)=>setEmail(e.target.value) }  id="outlined-basic" label="Email" variant="outlined" />
        <TextField  onChange={(e)=>setPassword(e.target.value) }  id="outlined-basic" label="Password" variant="outlined" />
        <Button onClick={Login}>Login</Button>
        </Grid>
        </Box>
        

    </Grid>

    )
}

export default Login;