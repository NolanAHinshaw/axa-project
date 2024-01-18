import emailLogo from '../images/email.png';
import instagramLogo from '../images/instagram.png';
import soundcloudLogo from '../images/soundcloud.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MenuPage() {
  //need to find a way to route the home link to the homepage
  return (
    <Grid sx={{
      margin: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
      }}>
        <Link to="/*">
          <Typography sx={{
            color: "#D9D9D9",
            fontFamily: "IBM Plex Mono",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textDecorationLine: "underline",
          }}>
              Home
          </Typography>
        </Link>
        <Link to="/about">
          <Typography sx={{
            color: "#D9D9D9",
            fontFamily: "IBM Plex Mono",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textDecorationLine: "underline",
          }}>
              About AXA
          </Typography>
        </Link>
        <Link to="/losing-control">
          <Typography sx={{
            color: "#D9D9D9",
            fontFamily: "IBM Plex Mono",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textDecorationLine: "underline",
          }}>
              Losing Control
          </Typography>
        </Link>
        <Link to="/soundcloud">
          <Typography sx={{
            color: "#D9D9D9",
            fontFamily: "IBM Plex Mono",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textDecorationLine: "underline",
          }}>
              Soundcloud
          </Typography>
        </Link>
        <Grid sx={{
          marginRight: 29.66,
        }}>
        <img src={emailLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
        <img src={soundcloudLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
        <img src={instagramLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
        </Grid>
    </Grid>
  );
}

export default MenuPage;
