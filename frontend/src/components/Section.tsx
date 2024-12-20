"use client";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react'

const Languages = [
    {key : "en", slug : "English"},
    {key : "es", slug: "Spanish"},
    {key : "gr", slug: "Germany"},
    {key : "fr", slug: "Frensh"}
]

export const Section = () => {
    const {i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
    const [ChangeLanguage, setChangeLanguage] = useState<string>("");
    
    useEffect(() => {
        if (ChangeLanguage) {
            i18n.changeLanguage(ChangeLanguage);
            if (typeof window !== "undefined") {
                localStorage.setItem("language", ChangeLanguage);
            }
        }
    }, [ChangeLanguage])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLanguage = localStorage.getItem("language") || "en";
            setSelectedLanguage(savedLanguage);
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <select className='p-4 bg-white outline-none'
                name="Language"
                id="LanguageSelector"
                onChange={(e) => {setChangeLanguage(e.target.value)}}
                value={ChangeLanguage}>
            {
                Languages.map((item) => {
                    return <option
                        className=''
                        key={item.key}
                        value={item.key}
                    >{item.slug}</option>
                })
            }
        </select>
    )
}
