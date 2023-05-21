import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";

export const extendDayJs = () => {
    dayjs.extend(customParseFormat);
    dayjs.extend(duration)
};