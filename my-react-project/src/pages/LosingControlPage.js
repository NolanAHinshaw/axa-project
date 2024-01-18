import chevronLeft from '../images/chevron-left.png';
import menuLogo from '../images/menu.png';
import { Grid, Typography, Popper, Paper, Box, IconButton } from '@mui/material';
import ContactInformation from '../components/ContactInformation';
import { useRef, useState } from 'react';
import oceanLogo from '../images/OceanWave.png';
import dropboxLogo from '../images/DropboxLogo.png';
import soundcloudBox from '../images/SoundCloudBox.png';
import Waveform from '../components/Waveform';
import MenuPage from './MenuPage';
import { BackButton } from '../components/BackButton';
import { tracks } from '../data/tracks';

function LosingControl() {
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
                width: '80%',
            }}>
                {/* <img src={losingControlLogo} style={{ width: 489, height: 66, marginBottom: 10}} className="image-container" alt="logo" /> */}
                <Waveform     
                    height={100}
                    waveColor="#146F83"
                    progressColor="#D9D9D9"
                    barWidth={2}
                    barGap={1}
                    url={tracks[0].src}
                    
                />
                <Grid sx={{
                    display: "flex",
                }}>
                    <img src={dropboxLogo} style={{ width: 112, height: 34, marginBottom: 10, padding: " 10px 20px", gap: 10, display: "flex"}} className="image-container" alt="logo" />
                    <img src={soundcloudBox} style={{ width: 112, height: 34, marginBottom: 10, padding: " 10px 20px", display: "flex"}} className="image-container" alt="logo" />
                </Grid>
            </Grid>
            <Grid sx={{
                display: "flex",
                width: "820px",
                alignItems: "center",
                gap: "20px",
                }}>
                <img src={oceanLogo} style={{ width: 350, height: 350, marginBottom: 10}} className="image-container" alt="logo" />
                <Grid>
                    <Typography sx={{
                        color: "#7593FF",
                        fontFamily: "IBM Plex Mono",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        marginBottom: "10px",
                    }}>
                        Song Bio
                    </Typography>
                    <Typography sx={{
                        color: "#D9D9D9",
                        fontFamily: "Source Sans Pro",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                    }}>
                        Sometimes in life, you fall into a dark place - almost like you’re underwater. You try and try to grasp for control. Then you meet someone who changes your life forever and pulls you out of that place. You learn that relinquishing the need for control was what you needed all along.
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{
                width: 350,
                height: 81,
            }}>
                <Typography sx={{
                    color: "#7593FF",
                    fontFamily: "IBM Plex Mono",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    marginBottom: "10px",
                }}>
                    Song Credits
                </Typography>
                <Typography sx={{
                    display: "flex",
                    width: 100,
                    color: "#D9D9D9",
                    fontFamily: "Source Sans Pro",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    marginBottom: "10px",
                }}>
                    Andy Miller 
                    Andy Doan
                </Typography>
            </Grid>
        <ContactInformation/>
        </Grid>
  );
}

export default LosingControl;
