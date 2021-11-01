import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const handlesubmit = () => {

}

export default function Loginform() {
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
            Sign In
        </Typography>

        <TextField id="outlined-basic" label="username" variant="outlined" sx={{marginLeft: '2%', marginTop: '5%', width: '100%'}} />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" sx={{marginLeft: '2%',marginTop: '5%', width: '100%'}} />
        <Button variant="outlined" sx={{marginLeft: '28%',marginTop: '5%',width: '50%'}} type='submit'  onClick= {handlesubmit}> submit </Button>
        <Button href="/signup"> go to signup </Button>
        </div>
        </Box>

    </div>
  );
}