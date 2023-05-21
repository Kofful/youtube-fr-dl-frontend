export const isTimeValid = (time) => {
    const regExp = new RegExp(/^\d{2}:\d{2}:\d{2}$/);

    return regExp.test(time);
};
