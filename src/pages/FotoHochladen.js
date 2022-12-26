import { Input, Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Login from './Login'

export default function FotoHochladen(props) {
    if(props.pb.authStore.isValid){
        return (
            <Container maxWidth="xl">
                <Box sx={{width:"100%"}}>
                    <Typography variant='body'>Datei hochladen</Typography>
                </Box>
            </Container>
        )
    }
    else{
        return <Login logIn={props.logIn}></Login>
    }
}
