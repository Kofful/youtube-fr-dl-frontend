import {useContext, useState} from "react";
import FragmentContext from "../../context/FragmentContext";
import {Box, Button} from "@mui/material";
import {isTimeValid} from "../../validators/timeValidator";
import TimeInput from "./TimeInput";

const TimeInputsContainer = () => {
    const { setStartTime, setEndTime } = useContext(FragmentContext);
    const [startTimeInput, setStartTimeInput] = useState('');
    const [endTimeInput, setEndTimeInput] = useState('');

    const updateTime = () => {
        setStartTime(startTimeInput);
        setEndTime(endTimeInput);
    };

    const isFormValid = () => {
        return isTimeValid(startTimeInput) && isTimeValid(endTimeInput);
    };

    return (
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <TimeInput
                time={startTimeInput}
                setTime={setStartTimeInput}
                label="Start time"
            />
            <TimeInput
                time={endTimeInput}
                setTime={setEndTimeInput}
                label="End time"
            />
            <Button sx={{ m: 1}} variant="contained" disabled={!isFormValid()} onClick={updateTime}>Update time</Button>
        </Box>
    );
};

export default TimeInputsContainer;
