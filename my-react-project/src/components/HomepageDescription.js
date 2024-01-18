import { Grid, Typography } from '@mui/material';
import chevronRight from '../images/chevron-right.png';
import seulgiPhoto from '../images/seulgi.png';
import ningNingPhoto from '../images/ningning.png';
import {initLightboxJS} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'

import mainLogo from '../images/MainPhoto.png';

export function HomepageDescription() {
    return ( 
        <Grid>
            <Grid container className='homepage-description'>
                <Typography sx={{
                width: 400,
                height: 123,
                fontFamily:"Source Sans Pro",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                gap: 10,
                }}>
                    Delve into the ethereal depths of AXA and immerse 
                    yourself within the euphoric soundscape that defies 
                    conventions and transcends into new dimensions of sonic bliss.
                    <Typography sx={{
                    textDecorationLine: 'underline',
                    width: 150,
                    fontFamily: "inherit",
                    fontSize: 20, 
                    color: "inherit",
                    textAlign: "start",
                    marginTop: "10px",
                    ":hover": {
                        color: "#7593FF",
                        cursor: "pointer",
                      },
                    }}>
                        Learn More
                        <img src={chevronRight} style={{ width: 20, height: 20}} className="App-logo" alt="logo" />
                    </Typography>
                </Typography>
                    <SlideshowLightbox className="lightbox-container">
                            <img src={seulgiPhoto} style={{ width: 170, height: 170, marginLeft: "5px"}} className="App-logo" alt="logo" />
                            <img src={ningNingPhoto} style={{ width: 170, height: 170}} className="App-logo" alt="logo" />
                    </SlideshowLightbox>
            </Grid> 
        </Grid>
    );
}