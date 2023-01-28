import { ImageList, Typography, ImageListItem, ImageListItemBar } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {useMediaQuery} from '@mui/material';

export default function Fotos(props) {

  const label = useParams()

  useEffect(()=>{
    props.getImages(label["*"]);
  }, []);

  const small = useMediaQuery('(min-width:1000px)')

  return (
    <Container maxWidth="xl">
      <ImageList variant='quilted' cols={small ? 2 : 1}>
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
