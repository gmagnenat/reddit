 export const dataInfo = (user, time) => {
    const dateCreated = new Date(time*1000);
    const dateCurrent = new Date();
    const minutesDiff = Math.floor(Math.abs((dateCurrent - dateCreated) / (1000 * 60)));
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);

    if(minutesDiff < 60) {
        return `Posted by ${user}, ${minutesDiff} minutes ago`
    }
    if(hoursDiff < 24) {
        return `Posted by ${user}, ${hoursDiff} hours ago`
    }
    if(daysDiff === 1) {
        return `Posted by ${user}, yesterday`
    }
    return `Posted by ${user}, ${daysDiff} ago`
}