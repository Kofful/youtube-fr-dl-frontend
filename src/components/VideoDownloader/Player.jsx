import {useContext} from "react";
import FragmentContext from "../../context/FragmentContext";
import {getSecondsFromTimeString} from "../../services/timeService";
import {extractVideoId} from "../../services/urlService";
import {Box} from "@mui/material";
import "./Player.css";

const Player = () => {
    const { videoLink, startTime, endTime} = useContext(FragmentContext);

    const startSeconds = getSecondsFromTimeString(startTime);
    const endSeconds = getSecondsFromTimeString(endTime);
    const videoId = extractVideoId(videoLink);

    const source = `https://www.youtube.com/embed/${videoId}?start=${startSeconds}&end=${endSeconds}&autoplay=1&mute=0`;

    return (
       <Box sx={{ my: 1 }} className="player-wrapper">
           <iframe
               id='fragment-player'
               title='fragment-player'
               src={source}
           />
       </Box>
    );
};

export default Player;
