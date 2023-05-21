import {createContext, useState} from "react";

const FragmentContext = createContext({
    videoLink: '',
    setVideoLink: () => {},
    startTime: '',
    setStartTime: () => {},
    endTime: '',
    setEndTime: () => {},
});

export const FragmentContextProvider = ({children}) => {
    const [videoLink, setVideoLink] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const contextValue = { videoLink: videoLink, setVideoLink: setVideoLink, startTime, setStartTime, endTime, setEndTime };
    return (
        <FragmentContext.Provider value={contextValue}>
            {children}
        </FragmentContext.Provider>
    );
};

export default FragmentContext;
