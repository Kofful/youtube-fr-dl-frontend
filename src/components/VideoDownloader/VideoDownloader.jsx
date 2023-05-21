import {useContext, useState} from "react";
import FragmentContext from "../../context/FragmentContext";
import Player from "./Player";
import TimeInputsContainer from "./TimeInputsContainer";
import LinkInput from "./LinkInput";
import {Alert, Container} from "@mui/material";
import {isTimeValid} from "../../validators/timeValidator";
import LoadingButton from '@mui/lab/LoadingButton';
import {downloadFragment, saveFile} from "../../services/api/fragmentService";

const VideoDownloader = () => {
    const { videoLink, startTime, setStartTime, endTime, setEndTime } = useContext(FragmentContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const downloadVideo = async () => {
        try {
            setIsLoading(true);
            setErrorMessage('');
            const requestParams = {
                videoLink,
                startTime,
                endTime,
            };
            const response = await downloadFragment(requestParams);
            if (response.status === 200) {
                const { fileName } = response.data;
                const fileResponse = await saveFile(fileName);

                const url = URL.createObjectURL(fileResponse.data);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();

                URL.revokeObjectURL(url);
            }
            setStartTime('');
            setEndTime('');
        } catch (error) {
            if (error.response?.data?.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('Failed to download this fragment.');
            }
        }
        setIsLoading(false);
    };

    return (
      <Container style={{ display: 'flex', flexDirection: 'column' }} y={{ m: 2 }}>
          <LinkInput />
          {videoLink !== '' &&
              <>
                  <Player />
                  <TimeInputsContainer />
              </>
          }
          {videoLink !== '' && isTimeValid(startTime) && isTimeValid(endTime) &&
              <>
                  <LoadingButton
                      sx={{ my: 1 }}
                      size="large"
                      variant="contained"
                      loading={isLoading}
                      onClick={downloadVideo}
                  >
                      Download
                  </LoadingButton>
                  {errorMessage !== '' &&
                      <Alert severity="error">{errorMessage}</Alert>
                  }
              </>
          }
      </Container>
    );
};

export default VideoDownloader;
