import { Input, Stack, Paper , TextField, Autocomplete, Button } from '@mui/material'
import { Container } from '@mui/system'
import {React, useEffect, useState} from 'react'
import Login from './Login'

export default function FotoHochladen(props) {

    useEffect(()=>{
        props.getImageGroups()
    }, [])

    const [imageFile, setImageFile] = useState(null)

    let dropHandler = (e)=>{
        e.preventDefault()
        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...e.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                const file = item.getAsFile();
                setImageFile(file)
                //console.log(`… file[${i}].name = ${file.name}`);
                }
            });
            } else {
            // Use DataTransfer interface to access the file(s)
            [...e.dataTransfer.files].forEach((file, i) => {
                setImageFile(file)
                //console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    }

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
                <Paper ondrop={dropHandler} ondragover={(e)=>{e.preventDefault()}} variant='outlined' sx={{width:"100%", height:"20vh", padding:"1vh"}}>
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
