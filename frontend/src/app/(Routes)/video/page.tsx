"use client";

import { useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import them from '../../../../assets/pictures/them.png';
import Image from "next/image";

const VideoPage = () => {
    const [url, setUrl] = useState("");
    const [resulation, setResulation] = useState("");

    return (
        <div className="VideoDownload">
            <div className="VideoDownload mt-28">
                <div className="DownloadSection flex justify-center">
                    <input
                        name="input"
                        onChange={(e) => {setUrl(e.target.value)}}
                        type="text"
                        placeholder="Enter youtube url here ...."
                        className="outline-none border-[1px] rounded-md px-2 mr-2 w-2/4"/>
                    <button
                        className="bg-[#6e41e2] text-white py-4 px-10 flex items-center
                        rounded-md">
                        <MdCloudDownload color="white"/> <p className="ml-4">Download</p></button>
                </div>
                <div className="PreviewSection mt-20 flex justify-center">
                    <div className="VideoDTL flex justify-center w-3/4">
                        <div className="thumnel w-2/12">
                            <Image src={them} alt=""/>
                        </div>
                        <div className="title-description  w-8/12 px-6 py-4">
                            <p className="Title text-xl font-bold">Video Title</p>
                            <p className="Description text-sm text-ellipsis overflow-hidden text-[#9F9C9C]">Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                            Loremipsum Loremipsum Loremipsum LoremipsumLoremipsum Loremipsum</p>
                        </div>
                        <div className="options w-2/12 flex items-start">
                            <select name="resulation"
                                className="px-4 py-2 h-10 rounded-md border-[1px] border-[#6e41e2]
                                bg-transparent text-[#6e41e2] outline-none"
                                onChange={(e) => {setResulation(e.target.value)}}>
                                <option value={"1080"}>1080p</option>
                                <option value={"720"}>720p</option>
                                <option value={"480"}>480p</option>
                                <option value={"360"}>360p</option>
                            </select>
                            <button className="flex h-10 items-center px-4 py-2 border-[1px] border-[#6e41e2]
                                bg-transparent text-[#6e41e2] rounded-md ml-4">
                                <MdCloudDownload color="#6e41e2"/> <p className="ml-4">Download</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }


export default VideoPage;