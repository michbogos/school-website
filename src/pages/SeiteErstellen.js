import { Button, Input, TextField } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'

export default function SeiteErstellen() {
    const [id, setId] = useState("");
    const [error, setError] = useState("");
    
    let process = ()=>{
        var file = document.getElementById("htmlInput").files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (evt)=>{
                alert(evt.target.result);
                // let request = new XMLHttpRequest();
                // request.open("POST", `http://localhost:8000/${id}`, true);
                // request.setRequestHeader("auth", "baba");
                // request.send();
                // request.onreadystatechange = (res)=>{
                //     alert(request.status);
                // }
                fetch(`http://localhost:8000/${id}`, {  method:"post",
                                                        headers:{"auth":"baba",
                                                        'Accept': 'application/json',
                                                        'Content-Type': 'application/json'},
                                                        body:JSON.stringify({content:evt.target.result})
                                                    }).then((res)=>{
                                                        res.text().then((status)=>{alert(status)})
                                                    });
                }
            reader.onerror = (evt)=>{
                alert("error reading file");
            }
        }
    }

    return (
        <Container maxWidth="xl">
            <Stack>
                <TextField label="URL" onChange={(e)=>{setId(e.target.value)}}></TextField>
                <Input type='file' id="htmlInput"></Input>
                <Button variant="contained" onClick={process}>Hochladen</Button>
            </Stack>
        </Container>
    )
}
