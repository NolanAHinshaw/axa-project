import chevronLeft from '../images/chevron-left.png';
import menuLogo from '../images/menu.png';
import portrait from '../images/portrait.png';
import { Grid, Typography, Popper, IconButton, Paper } from '@mui/material';
import ContactInformation from '../components/ContactInformation';
import { useRef, useState } from 'react';
import MenuPage from './MenuPage';
import { BackButton } from '../components/BackButton';

function AboutPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='about-page'>
      <Grid sx={{
        margin: 10,
        display: "flex",
        width: "820px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
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
          <Grid className='App' sx={{
              display: "inline-flex",
              flexDirection: "column",
              width: "93px",
              height: "74px",
              alignItems: "flex-start",
              gap: "20px",
          }}>
              {/* <Typography sx={{
              color: "#D9D9D9",
              fontFamily:" IBM Plex Mono",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textDecorationLine: "underline",
              }}>
                  <img src={chevronLeft} style={{ width: 20, height: 20}} className="App-logo" alt="logo" />
                  Back
              </Typography> */}
              <BackButton/>
              <Typography className="text" sx={{
              textAlign: "inherit",
              color: "#D9D9D9",
              fontFamily: "IBM Plex Mono",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              width: "120px",
              lineHeight: "normal",
              gap: '20px',
            }}>
              About X AXA
          </Typography>
          </Grid>
        <Grid sx={{
          display: "flex",
          width: "710px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "15px",
        }}>
          <Typography className="text" sx={{
            color: "#7593FF",
            fontFamily: "IBM Plex Mono",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            textAlign: "start",
            textDecorationLine: "none",
            }}>
              Artist Bio            
          </Typography>
          <Typography sx={{
              color: "#D9D9D9",
              fontFamily: "Source Sans Pro",
              fontSize: "14px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "start",
              }}>
              Andy [Miller] X Andy [Doan]
              <Typography sx={{
                color: "#9C9C9C",
                fontFamily: "Source Sans Pro",
                fontSize: "12px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "normal",
                textAlign: "start",
                marginTop: "5px",
                }}>
                Pronounced: “Akshuh” “ækʃʌ”        
              </Typography>
          </Typography>
          <Typography sx={{
              color: "#D9D9D9",
              fontFamily: "Source Sans Pro",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "start",
          }}>
          Delve into the ethereal depths of AXA and immerse yourself within the euphoric soundscape that defies conventions and transcends into new dimensions of sonic bliss. 
          </Typography>
          <Typography sx={{
              color: "#D9D9D9",
              fontFamily: "Source Sans Pro",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "start",
          }}>
          The realm of AXA is written and guided by the combined talent of Andy [Miller] and Andy [Doan]. Together, they have an unwavering commitment to push creative boundaries and embrace an ethos of fearless exploration and artistic innovation. Through their fusion of diverse genres and unique musical perspectives, AXA breaks free from limitations, crafting a sonic landscape that encourages a transformative, progressive journey, where the blend of melodic tones and curated rhythm becomes a gateway to transcendence.
          </Typography>
        </Grid>
        <Grid className='homepage-description'>
        <img src={portrait} style={{ width: 400, height: 200, marginBottom: 10 }} className="image-container" alt="logo" />
        <Typography sx={{
          color: "#7593FF",
          fontFamily: "IBM Plex Mono",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}>
          Knowledge & Experience
          <ol style={{ 
              listStyleType: 'disc', 
              color: "#D9D9D9",
              fontFamily: "Source Sans Pro",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "30px",
              textAlign: "start",
              paddingLeft: "20px",
          }}>
              <li>Both classically trained pianists.</li>
              <li>Both designers in their professions (UI/UX & Product Design).</li>
              <li>Production knowledge combined of over 8+ years.</li>
              <li>Live concert experience in bands and DJing.</li>
          </ol>
        </Typography>
        </Grid>
        <Grid container sx={{}}>
          <Typography sx={{
              color: "#7593FF",
              fontFamily: "IBM Plex Mono",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textAlign: "initial",
          }}>
              Values
              <ol style={{ 
                  listStyleType: 'disc', 
                  color: "#D9D9D9",
                  fontFamily: "Source Sans Pro",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  paddingLeft: "20px",
                  lineHeight: "30px",
              }}>
                  <li>Inclusive, safe spaces</li>
                  <li>Mental health awareness</li>
                  <li>Evoke self reflection and open-mindedness </li>
                  <li>Empathy</li>
              </ol>
          </Typography>
          <Grid item spacing={5} xs={6} sx={{
            paddingLeft: "140px",       
          }}>
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
        </Grid>
        <ContactInformation/>
      </Grid>
    </div>
  );
}

export default AboutPage;
