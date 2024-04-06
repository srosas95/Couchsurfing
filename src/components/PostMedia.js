import Image from "next/image";
import { isVideo, isImage } from "@/utils/mediaUtils";


export const PostMedia = ({
    mediaURL = '/media/default.png',
    ...props
}) => {

    console.log(mediaURL)
    console.log(isImage(mediaURL))
    return (
        <div className="flex flex-col p-2  justify-between rounded-lg text-center mt-2 mb-2">

            {isImage(mediaURL) && <Image
                src={mediaURL}
                width={100}
                height={100}
                alt="content-pic"
                className="mr-auto ml-auto"
            />}
            {isVideo(mediaURL) && <video width="320" height="240" controls preload="none">
                <source src="/path/to/video.mp4" type="video/mp4" />
                <track
                    src={mediaURL}
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>}
        </div>
    );
};
