import React from 'react';
import '../../UI/main.css';
import useTranslation from "../../../Translation/translation";

export default function Home() {

    const {t} = useTranslation();

    return (
        <div className={'body'}>
            <h1 className={'pageName'}>Home</h1>
            <span>{t('Dies ist ein Beispiel Text')}</span>
        </div>
    );
}