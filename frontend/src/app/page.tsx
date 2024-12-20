"use client"

import Image from "next/image";
import bg from '../../assets/pictures/bg.png'
import appStore from '../../assets/pictures/appStore.png'
import playstore from '../../assets/pictures/googleplay.png'
import Qr from '../../assets/pictures/qrCode.png'
import facebook from '../../assets/pictures/facebook.png'
import google from '../../assets/pictures/google.png'
import vk from '../../assets/pictures/vk.png'
import AppPreview from '../../assets/pictures/AppPreview.png'
import { TbPlaylistAdd } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";


export default function Home() {
    const [hoverSingle, setHoverSingle] = useState("#979494");
    const [hoverPlaylist, setHoverPlaylist] = useState("#979494");
    return (
        <div className="Home">
            <div className="Body flex justify-around items-center">
                <div className="LeftPart mr-6 w-1/2">
                    <Image src={bg} alt=""/>
                </div>
                <div className="RightPart ml-6 w-1/2 text-center">
                    <div className="Icons flex justify-center items-center">
                        <div className="PlayList hover:bg-[#f3f3f3] group w-[400px] h-[200]
                            items-center flex flex-col justify-center
                            border-2 border-dashed  cursor-pointer border-[#6e41e2] mx-4"
                            onMouseOver={() => setHoverPlaylist("#6e41e2")}
                            onMouseLeave={() => setHoverPlaylist("979494")}>
                            <div className="IconHolder pt-4">
                                <TbPlaylistAdd style={{fontSize: 70, color: hoverPlaylist,}}/>
                            </div>
                            <div className="title pt-8 pb-8 group-hover:text-[#6e41e2]">
                                Download Playlist
                            </div>
                        </div>
                        <div className="Singl hover:bg-[#f3f3f3] group cursor-pointer w-[400px] h-[200]
                            border-[#6e41e2] items-center flex flex-col justify-center
                            border-2 border-dashed mx-4"
                            onMouseOver={() => setHoverSingle("#6e41e2")}
                            onMouseLeave={() => setHoverSingle("979494")}>
                            <div className="IconHolder pt-4">
                                <FaYoutube  style={{fontSize: 70, color: hoverSingle}}/>
                            </div>
                            <div className="title pt-8 pb-8 group-hover:text-[#6e41e2]">
                                Single Download
                            </div>
                        </div>
                    </div>
                    <p className="mt-4">Select Download Method</p>
                </div>
            </div>
            <div className="Footer">
                <div className="footerHolder flex justify-between items-end">
                    <div className="Social flex justify-between w-4/12 bg-[#FAFAFA] px-8 py-4 rounded-md">
                        <div className="text">Follow us on social</div>
                        <ul className="Icons flex ">
                            <li><Image width={"30"} src={vk} alt="vk"/></li>
                            <li><Image width={"30"} src={facebook} alt="facebook"/></li>
                            <li><Image width={"30"} src={google} alt="google"/></li>
                        </ul>
                    </div>
                    <div className="Preview flex justify-center items-end">
                        <div className="Download mb-2">
                            <p className="text-2xl mb-2">Download This App</p>
                            <div className="DownloadHolder flex items-end">
                                <div className="Store flex justify-between flex-col">
                                    <div className="Appstore pt-4 pr-4">
                                        <Image width={"120"} src={appStore} alt="Appstore"/>
                                    </div>
                                    <div className="Playstore pt-4 pr-4">
                                        <Image width={"120"} src={playstore} alt="playstore"/>
                                    </div>
                                </div>
                                <div className="Qr pl-4">
                                    <Image width={"90"} src={Qr} alt="Qr"/>
                                </div>
                            </div>
                        </div>
                        <div className="previewApp ml-10">
                            <Image width={"160"} src={AppPreview} alt="AppPreview"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
