import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, FormControl, TextField  } from "@mui/material";
import '../css/estilos.css'


const Login_form = () => {
    return (
       
        <div className="Container_Login">
            <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
            }}>
                <Grid container spacing={1}>
                    <FormControl>
                        <Typography variant="h6"> 
                            Iniciar Sesión
                        </Typography>
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </FormControl>
                    

                    


                </Grid>
            </Box>
            
        </div>
                
        

    )
}

export default Login_form;