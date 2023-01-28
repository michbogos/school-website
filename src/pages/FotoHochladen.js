import { Input, Stack, Paper , TextField, Autocomplete, Button } from '@mui/material'
import { Container } from '@mui/system'
import {React, useEffect, useState} from 'react'
import Login from './Login'

export default function FotoHochladen(props) {

    useEffect(()=>{
        props.getImageGroups()
    }, [])

    let submit = ()=>{
        let data = new FormData();
        data.append("img", document.getElementById("file").files[0]);
        data.append("label", document.getElementById("label").value)
        data.append("description", document.getElementById("description").value)
        props.uploadImage(data)
    }

    if(props.pb.authStore.isValid){
        return (
            <Container maxWidth="xl">
                <Stack width="100%" height="100%" gap={4} justifyContent={"center"}>
                <Paper variant='outlined' sx={{width:"100%", height:"20vh", padding:"1vh"}}>
                        <Input id="file" type='file'></Input>
                </Paper>
                    <TextField id="description" label="Kurze Bildbeschreibung">Kurze Bildbeschreibung</TextField>
                    <Autocomplete id="label" options={props.imageGroups} renderInput={(params) => <TextField {...params} label="Gruppe" />}></Autocomplete>
                    <Button variant="contained" onClick={submit}>Hochladen</Button>
                </Stack>
            </Container>
        )
    }
    else{
        return <Login logIn={props.logIn}></Login>
    }
}
