"use client"
import React from 'react'
import { NavBar } from './NavBar';
import { I18nextProvider } from 'react-i18next';
import i18n from '../Languages/LanguageProvider';

function ChildrenComponent ({children}: {children: React.ReactNode}) {
  return (
    <I18nextProvider i18n={i18n}>
        <div className='container w-[1200px]'>
            <NavBar/>
            {children}
        </div>
    </I18nextProvider>
  )
}

export default ChildrenComponent;