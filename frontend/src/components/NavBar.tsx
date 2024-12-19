import React from 'react'
import { useTranslation } from 'react-i18next';


export const NavBar = () => {
    const {t} = useTranslation();

    return (
        <div>{t('welcom')}</div>
    )
}
