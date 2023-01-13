import { Input, Stack, Paper, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Login from './Login'

let dropHandler = (e)=>{
    e.preventDefault()
    if (e.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...e.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === 'file') {
            const file = item.getAsFile();
            alert(file)
            //console.log(`… file[${i}].name = ${file.name}`);
            }
        });
        } else {
        // Use DataTransfer interface to access the file(s)
        [...e.dataTransfer.files].forEach((file, i) => {
            //console.log(`… file[${i}].name = ${file.name}`);
        });
    }
}

export default function FotoHochladen(props) {
    if(props.pb.authStore.isValid){
        return (
            <Container maxWidth="xl">
                <Paper ondrop={dropHandler} ondragover={(e)=>{e.preventDefault()}} variant='outlined' sx={{width:"100%", height:"20vh", padding:"1vh"}}>
                    <Stack width="100%" height="100%" justifyContent={"center"}>
                        <Input type='file'></Input>
                    </Stack>
                </Paper>
            </Container>
        )
    }
    else{
        return <Login logIn={props.logIn}></Login>
    }
}
