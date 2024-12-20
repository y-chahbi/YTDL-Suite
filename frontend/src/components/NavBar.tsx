import Image from 'next/image';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Logo from "../../assets/pictures/logo.png"
import { Section } from './Section';
import Link from 'next/link';

export const NavBar = () => {
    const {t} = useTranslation();

    return (
        <div className='NavBar flex justify-between items-center mt-2'>
            <div className='leftSide flex flex-row items-end'>
                <div className='LogoImage mx-1'>
                    <Link href={"/"}>
                        <Image src={Logo} alt="YTDL"/>
                    </Link>
                </div>
                <div className='LogoText mx-1'>
                    <Link href={"/"}>
                        YTDL
                    </Link>
                </div>
            </div>
            <div className='rightSide'>
                <ul className='flex flex-row'>
                    <li className='p-4'>{t("Youtube Downloader")}</li>
                    <li className='p-4'>Youtube Converter</li>
                    <li className='p-4'>Youtube to Mp3</li>
                    <Section/>
                </ul>
            </div>
        </div>
    )
}
