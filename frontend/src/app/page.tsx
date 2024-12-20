"use client"

import Image from "next/image";
import bg from '../../assets/pictures/bg.png'
import appStore from '../../assets/pictures/appStore.png'
import playstore from '../../assets/pictures/googleplay.png'
import Qr from '../../assets/pictures/qrCode.png'
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
                    <div className="Social"></div>
                    <div className="Preview flex justify-center items-end">
                        <div className="Download">
                            <p className="text-2xl mb-2">Download This App</p>
                            <div className="DownloadHolder flex justify-center items-end">
                                <div className="Store">
                                    <div className="Appstore">
                                        <Image src={appStore} alt="Appstore"/>
                                    </div>
                                    <div className="Playstore">
                                        <Image src={playstore} alt="playstore"/>
                                    </div>
                                </div>
                                <div className="Qr">
                                    <Image src={Qr} alt="Qr"/>
                                </div>
                            </div>
                        </div>
                        <div className="previewApp">
                            <Image src={AppPreview} alt="AppPreview"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
