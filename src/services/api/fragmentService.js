import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const downloadFragment = async ({ videoLink, startTime, endTime }) => {
    return axios.get(`${apiBaseUrl}/api/v1/download?url=${encodeURIComponent(videoLink)}&start=${startTime}&end=${endTime}`)
};

export const saveFile = async (fileName) => {
    return axios({
        url: `${apiBaseUrl}/api/v1/file?fileName=${fileName}`,
        method: 'GET',
        responseType: 'blob',
    })
};

