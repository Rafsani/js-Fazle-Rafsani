import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { display } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

export default function Signupform() {
    let history = useHistory();
    const [username,setusername] = React.useState("");
    const [pass,setpass] = React.useState("");
    const [Confirm,setConfirm] = React.useState("");

    const handleChangeuser = (e) =>
    {
        setusername(e.target.value);
    }
    const handleChangepass = (e) =>
    {
        setpass(e.target.value);
    }
   
    const handlesubmit = (e) => {
        const data = {
            name: username,
            password: pass,
            type: "customer"

        };

       
            e.preventDefault();
            console.log("login");
            Axios({
              method: "POST",
              data: {
                name: username,
                password: pass,
                type: "customer"
              },
              withCredentials: true,
              url: "http://localhost:5000/createUser",
            }).then((res) => {
              if (res.data === "added") {
                history.push("/");
                //return <Redirect to ='/' />
              }
              console.log(res);
            });
            //return <Redirect to ='/' />
            //history.push('/');
          



    }


  return (
    <div style={{padding: '10%',display: 'flex' ,flexDirection: 'column', justifyContent: 'space-between',alignItems: 'center'}}>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 2, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        >

        <div style={{display: 'flex', flexDirection: 'column' }}> 
        
        <Typography variant="h5"> 
            Sign up
        </Typography>

        <TextField id="outlined-basic" label="username" variant="outlined" sx={{marginLeft: '2%', marginTop: '5%', width: '100%'}} onChange= {handleChangeuser} />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" sx={{marginLeft: '2%',marginTop: '5%', width: '100%'}} onChange={handleChangepass} />
        <TextField id="outlined-basic" label="confirm password" variant="outlined" type="password" sx={{marginLeft: '2%',marginTop: '5%', width: '100%'}} />
        <Button sx={{marginLeft: '28%',marginTop: '5%',width: '50%'}} type='submit'  onClick= {handlesubmit}> submit </Button>
        </div>
        </Box>

    </div>
  );
}