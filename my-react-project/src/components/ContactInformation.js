import emailLogo from '../images/email.png';
import instagramLogo from '../images/instagram.png';
import soundcloudLogo from '../images/soundcloud.png';
import { Grid, Typography } from '@mui/material';

function ContactInformation() {

return (
    <Grid container spacing={2} sx={{
        display: "flex",
        width: "820px",
        padding: "20px 0px",
        flexFirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
        <Typography sx={{
          width: 820,
          color: "#D9D9D9",
          fontFamily:" Source Sans Pro",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          textDecorationLine: "underline",
          justifyContent: "space-between",
          display: 'flex', 
          justifyContent: 'flex-end',
          "image-container:hover": {
            color: "#7593FF",
          },
        }}>
          <img src={emailLogo} style={{ width: 20, height: 20, marginRight: 5, cursor: "pointer" }} alt="logo" />
        contact@axamusic.us
          <img src={soundcloudLogo} style={{ width: 20, height: 20, marginLeft: "auto", cursor: "pointer"}} alt="logo" />
          <img src={instagramLogo} style={{ width: 20, height: 20, marginLeft: 20, cursor: "pointer"}} alt="logo" />    
        </Typography>
        <Typography sx={{
          width: "350px",
          color: "#D9D9D9",
          fontFamily:" Source Sans Pro",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          justifyContent: "right", 
          marginLeft: 45,          
        }}>
          Copyright AXA © 2023       
        </Typography>
    </Grid>
    )
}
export default ContactInformation;