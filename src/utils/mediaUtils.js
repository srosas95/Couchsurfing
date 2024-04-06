export const isImage = (url) => {
    const imageExtensions = ['.gif', '.jpg', '.jpeg', '.png']
    for (let i = 0; i < imageExtensions.length; i++) {
        if (url.includes(imageExtensions[i]))
            return true
    }

    return false
};

export const isVideo = (url) => {
    const videoExtensions = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4']
    for (let i = 0; i < videoExtensions.length; i++) {
        if (url.includes(videoExtensions[i]))
            return true
    }

    return false
};