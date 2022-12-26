import { ImageList, Typography, ImageListItem } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

export default function Fotos(props) {

  return (
    <Container maxWidth="xl">
      <Typography textAlign={"center"} variant='h1'>Bilder</Typography>
      <ImageList variant='masonry'>
        {props.images.map((item)=>{
          return(
          <ImageListItem key={item}>
          <img
            src={item}
            srcSet={item}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>)
        })}
      </ImageList>
    </Container>
  )
}
