import React from 'react';
import Navbar from '../../../components/layouts/LandingNav'
import Knowledge from './Knowledge';
import Advertisement from '../../../components/ui/Advertisement';
export default function Landingpage() {
    return (
        <>
            {/* Navigation component */}
            <Navbar/>

            {/* Knowledge component */}
            <Knowledge />

            {/*  */}
            <Advertisement/>
        </>
    );
}