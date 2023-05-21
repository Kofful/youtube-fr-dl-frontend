import {useContext, useState} from "react";
import FragmentContext from "../../context/FragmentContext";
import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const LinkInput = () => {
    const { setVideoLink, setStartTime, setEndTime } = useContext(FragmentContext);
    const [videoLinkInput, setVideoLinkInput] = useState('');

    const previewFragment = () => {
        setVideoLink(videoLinkInput);
        setStartTime('');
        setEndTime('');
    };

    const PreviewButton = () => (
        <IconButton onClick={previewFragment}>
            <SearchIcon />
        </IconButton>
    );

    return (
        <TextField
            sx={{ my: 1 }}
            variant="outlined"
            placeholder="Video URL"
            value={videoLinkInput}
            onChange={(e) => setVideoLinkInput(e.target.value)}
            InputProps={{endAdornment: <PreviewButton/>}}
        />
    );
};

export default LinkInput;