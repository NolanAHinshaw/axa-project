import axaLogo from '../images/Logo.png';
import emailLogo from '../images/email.svg';
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
          <svg src={emailLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo">
            <path d="M25 10.1118L15 16.3618L5 10.1118V7.61182L15 13.8618L25 7.61182M25 5.11182H5C3.6125 5.11182 2.5 6.22432 2.5 7.61182V22.6118C2.5 23.2749 2.76339 23.9107 3.23223 24.3796C3.70107 24.8484 4.33696 25.1118 5 25.1118H25C25.663 25.1118 26.2989 24.8484 26.7678 24.3796C27.2366 23.9107 27.5 23.2749 27.5 22.6118V7.61182C27.5 6.22432 26.375 5.11182 25 5.11182Z" fill="#D9D9D9"/>
          </svg>
          <svg src={soundcloudLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo">
            <path d="M14.45 11.0877V21.2502H25.4C27.7125 21.0877 28.75 19.6627 28.75 17.9127C28.75 16.0627 27.35 14.5752 25.475 14.5752C25 14.5752 24.6 14.6752 24.1875 14.8502C23.8875 11.9252 21.4 9.6377 18.3375 9.6377C16.875 9.6377 15.4875 10.1877 14.45 11.0877ZM13.35 12.3627C12.975 12.1377 12.575 11.9627 12.1375 11.8752V21.2502H13.875V11.6752C13.6875 11.8752 13.5125 12.1252 13.35 12.3627ZM10.4125 11.6877V21.2502H11.5625V11.7252C11.325 11.6877 11.0875 11.6752 10.8375 11.6752C10.6875 11.6752 10.55 11.6752 10.4125 11.6877ZM8.125 12.5002V21.2502H9.2625V11.9252C8.85 12.0627 8.4625 12.2627 8.125 12.5002ZM6.0375 15.6252C5.9625 15.6252 5.8875 15.5502 5.8 15.5127V21.2502H6.95V13.5752C6.4875 14.1752 6.175 14.8877 6.0375 15.6252ZM3.4875 15.2752V21.1377C3.75 21.2127 4.05 21.2502 4.375 21.2502H4.65V15.1752C4.55 15.1627 4.45 15.1502 4.375 15.1502C4.05 15.1502 3.75 15.2002 3.4875 15.2752ZM1.25 18.2002C1.25 19.1377 1.675 19.9627 2.3375 20.5252V15.8877C1.675 16.4377 1.25 17.2752 1.25 18.2002Z" fill="#D9D9D9"/>
          </svg>
          <svg src={instagramLogo} style={{ width: 30, height: 30 }} className="image-container" alt="logo">
            <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#D9D9D9"/>
          </svg>
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
