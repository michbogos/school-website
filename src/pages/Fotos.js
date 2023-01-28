import { ImageList, Typography, ImageListItem, ImageListItemBar } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Fotos(props) {

  const label = useParams()

  useEffect(()=>{
    props.getImages(label["*"]);
  }, []);

  return (
    <Container maxWidth="xl">
      <ImageList variant='masonry'>
        {props.images.map((item)=>{
          return(
          <ImageListItem key={item.img}>
          <ImageListItemBar position='bottom' title={item.description}></ImageListItemBar>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.img}
            loading="lazy"
          />
        </ImageListItem>)
        })}
      </ImageList>
    </Container>
  )
}
