import { FaCirclePlay } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

const VideoTitle = ({title, overview}) => {

    return (
        <div className="w-screen aspect-video md:pt-[7rem] pt-[3rem] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="md:text-5xl font-bold text-[2.7rem] mb-4 ml-3 ">{title}</h1>
            <p className="py-4 text-lg w-1/4 hidden md:block">{overview}</p>
            <div className="flex gap-4 ">
                <button className="bg-[#e50914] flex mb-2 items-center gap-2 text-white fotn-bold rounded-full py-2 md:px-12 px-6 text-xl md:text-2xl  hover:bg-opacity-80 "><FaCirclePlay className="w-7 h-7"/>Play</button>
                <button className="mx-2 hidden md:flex bg-gray-500 text-white  py-2 px-9 items-center gap-2 text-2xl bg-opacity-50 rounded-full hover:bg-opacity-80 "><IoIosInformationCircle className="w-7 h-7" />More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;