import dayjs from "dayjs";

export const getSecondsFromTimeString = (time) => {
    const timeWithoutMilliseconds = time.split('.')[0];
    const parsedTime = dayjs(timeWithoutMilliseconds, 'HH:mm:ss');
    const duration = dayjs.duration({
        hours: parsedTime.hour(),
        minutes: parsedTime.minute(),
        seconds: parsedTime.second(),
    });

    return duration.asSeconds();
};
