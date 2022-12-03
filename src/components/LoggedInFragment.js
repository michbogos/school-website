import React from 'react'

import {Stack, Avatar, Button} from "@mui/material"

export default function LoggedInFragment(props) {
  return (
    <Stack spacing={4} direction="row">
        {props.auth.record.verified ? <Button variant="text">Beitrag Erstellen</Button>:
        <></>
        }
        <Avatar>{props.auth.record.username}</Avatar>
    </Stack>
  )
}
