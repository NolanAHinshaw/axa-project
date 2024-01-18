import axaLogo from '../images/Logo.png';
import emailLogo from '../images/email.png';
import instagramLogo from '../images/instagram.png';
import soundcloudLogo from '../images/soundcloud.png';
import mainLogo from '../images/MainPhoto.png';
import chevronRight from '../images/chevron-right.png';
import menuLogo from '../images/menu.png';
import { Grid, Typography, Button, Popper, Box, Paper, IconButton} from '@mui/material';
import { HomepageDescription } from '../components/HomepageDescription';
import aaLogo from '../images/AA.png';
import ContactInformation from '../components/ContactInformation';
import MenuPage from './MenuPage';
import { BackButton } from '../components/BackButton';
import { useRef, useState } from 'react';
import '../App.css';

function HomepageDashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid sx={{
      margin: 10,
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "30px",
      color: "#D9D9D9",

      }}>
        <IconButton ref={anchorRef} onClick={handleToggle}>
            <img
            src={menuLogo}/>
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper sx={{
            bgcolor: '#0F0F0FF2',
            zIndex: 1,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
              <MenuPage/>
          </Paper>
        </Popper>
      <Grid className='App'>
        <img className="image-container" src={axaLogo} style={{ width: 180, height: 125, }} alt="logo" />
        <Grid>
          <Typography className="text" sx={{
              textAlign: 'start',
              width: "100%",
              height: 78,
              fontFamily: "inherit",
              fontSize: 20, 
              color: "inherit",
              wordBreak: "break-word",
              }}>
                Andy Doan  <br/> & Andy Miller
            </Typography>
          <img src={emailLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
          <img src={soundcloudLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
          <img src={instagramLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo" />
        </Grid>
      <img src={mainLogo} style={{ width: 350, height: 220}} className="App-logo" alt="logo" />
      </Grid>
      <HomepageDescription/> 
      <Grid sx={{
        display: "flex",
        width: "100%",
        alignItems:"center",
        gap: "10px",
      }}>
        <img src={aaLogo} style={{ width: 100, height: 100}} className="App-logo" alt="logo" />
        <Typography className="text" sx={{
          color: "#D9D9D9",
          fontFamily: "IBM Plex Mono",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          textAlign: "start",
          textDecorationLine: "none",
          }}>
            <a href='#' className='link'>
            <span className="span-text" style={{ textDecoration: 'underline', cursor: "pointer", marginLeft: 10, ":hover": { color: "#7593FF", }, }}> 
              Losing Control 
            </span>
            </a>
            <img src={chevronRight} style={{ width: 20, height: 20}} className="App-logo" alt="logo" />
            <Typography sx={{
              color: "#D9D9D9",
              fontFamily: "IBM Plex Mono",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "start",
              alignSelf: "stretch",
              marginLeft: 1,
              }}>
              progressive / trance / melodic techno 
            </Typography>
        </Typography>
      </Grid>
      <Grid>
        <Typography>
          Atlanta, GA
        </Typography>
        <Typography sx={{
          marginTop: "20px",
          color: "#D9D9D9",
          fontFamily:" Source Sans Pro",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          textDecorationLine: "underline",
          ":hover": {
            color: "#7593FF",
            cursor: "pointer",
          },
        }}>
          Andy Doan Resume
        </Typography>
        <Typography sx={{
          color: "#D9D9D9",
          fontFamily:" Source Sans Pro",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          textDecorationLine: "underline",
          ":hover": {
            color: "#7593FF",
            cursor: "pointer",
          },
        }}>
          Andy Miller Resume
        </Typography>
      </Grid>
      <ContactInformation/>
    </Grid>
  );
}

export default HomepageDashboard;
