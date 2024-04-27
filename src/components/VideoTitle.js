import { FaCirclePlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({title, overview}) => {

    return (
        <div className="w-screen aspect-video pt-28 px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-4  text-lg w-1/4">{overview}</p>
            <div className="flex gap-4">
                <button className="bg-[#e50914] flex items-center gap-2 text-white fotn-bold rounded-full p-4 px-12 text-2xl  hover:bg-opacity-80 "><FaCirclePlay className="w-7 h-7"/>Play</button>
                <button className="mx-2 bg-gray-500 text-white  p-4 px-9 flex items-center gap-2 text-2xl bg-opacity-50 rounded-full hover:bg-opacity-80 "><IoIosInformationCircle className="w-7 h-7" />More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;