import React from 'react'

import {Stack, Avatar, Button, IconButton} from "@mui/material"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useNavigate } from 'react-router-dom'

export default function LoggedInFragment(props) {
  let navigate = useNavigate();
  return (
    <Stack spacing={4} direction="row">
      <IconButton style={{ backgroundColor: 'transparent' }} onClick={props.toggleMode} color="primary">
                {props.mode === "light" ?
                  <WbSunnyIcon/> :
                  <DarkModeIcon/>
              }
      </IconButton>
        {props.auth.record.verified ? <><Button onClick={()=>{navigate("/school-website/new")}} variant="text">Neuer Beitrag</Button>
                                      <Button onClick={()=>{navigate("/school-website/termin_erstellen")}} variant="text">Neuer Termin</Button>
                                      <Button onClick={()=>{navigate("/school-website/foto_hochladen")}} variant="text">Foto Hochladen</Button></>:
        <></>
        }
        <Button variant='text' onClick={props.logOut}>Log out</Button>
        <Avatar>{props.auth.record.username[0]}</Avatar>
    </Stack>
  )
}
