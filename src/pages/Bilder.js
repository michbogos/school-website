import React from 'react'
import { Typography, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

export default function Bilder() {
  return (
    <Container maxWidth="xl">
        <ImageList>
            <Option url="klassenfotos" title="Klassenfotos" img="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2020/10/1A.jpg"></Option>
            <Option url="rundgang" title="Rundgang" img="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2022/05/rund11-1.jpg"></Option>
            <Option url="erasmus" title="Erasmus+" img="https://www.schlosstraunsee.at/wordpress/wp-content/uploads/2021/12/5.jpg"></Option>
            <Option url="team" title="Lehrer- Verwaltungs- und Erziehungsteam" img="https://www.schlosstraunsee.at/wordpress/bilder/Lehrerfoto.jpg"></Option>
        </ImageList>
    </Container>
  )
}

function Option(props) {
    return(
        <ImageListItem to={`/school-website/bilder/${props.url}`} component={Link}>
            <img
              {...srcset(props.img, 250, 200, 2, 2)}
              alt={props.title}
              loading="lazy"
            />
            <ImageListItemBar sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={props.title}

              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`right-arrow ${props.title}`}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              }
              actionPosition="left"></ImageListItemBar>
        </ImageListItem>
    )
}
