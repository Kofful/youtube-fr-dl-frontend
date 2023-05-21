import InputMask from "react-input-mask";
import {TextField} from "@mui/material";

const TimeInput = ({time, setTime, label}) => {
    return (
        <InputMask
            mask="99:99:99"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        >
            {(props) => (
                <TextField
                    {...props}
                    sx={{my: 1}}
                    variant="outlined"
                    label={label}
                    size="small"
                />
            )}
        </InputMask>
    );
};

export default TimeInput;
