import React from 'react';
import Navbar from '../../components/Navbar';
import Background from '@images/BackgroundModel.png'
export default function Shop() {
    return (
        <>
            <Navbar/>
            <div className='bg-[#F6F6F6] flex flex-col justify-center'>
                <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                    <img src={Background} alt="Background" className='w-full h-full object-cover'/>
                </div>
            </div>
        </>
    );
}