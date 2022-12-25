import React, { useState } from 'react'

import {Card, Typography, Stack, CardContent, CardMedia, CardActions, Button} from "@mui/material";

export default function CalendarCard(props) {

  const [short, setShort] = useState(true)

  return (
    <Card>
      <CardMedia>
        <Typography variant='h3' sx={{backgroundColor:"primary.main", color:"primary.contrastText"}}>{props.date}</Typography>
      </CardMedia>
      <CardContent>
        <Stack>
          <Typography sx={{overflowWrap:"break-word"}} variant="h4">{props.title}</Typography>
          <Typography sx={{whiteSpace:"pre-line", overflowWrap:"break-word"}} variant="body1">{short ? props.description.substring(0, 150) : props.description}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        {
          (props.title.length + props.description.length) > 150 &&
           <Button variant='text' onClick = {()=>{setShort(!short)}}>{short ? "Mehr Zeigen" : "Weniger Zeigen"}</Button>
        }
      </CardActions>
    </Card>
  )
}
