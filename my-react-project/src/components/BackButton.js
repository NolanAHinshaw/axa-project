import { useNavigate} from "react-router-dom";
import { IconButton } from "@mui/material";
import chevronLeft from "../images/chevron-left.png";
export const BackButton = () => {
    let navigate = useNavigate();
    return (
        <>
            <IconButton sx={{
              color: "#D9D9D9",
              fontFamily:" IBM Plex Mono",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              textDecorationLine: "underline",
              }}
              onClick={() => navigate(-1)}>
                  <img src={chevronLeft} style={{ width: 20, height: 20}} className="App-logo" alt="logo" />
                  Back
              </IconButton>
        </>
    );
};