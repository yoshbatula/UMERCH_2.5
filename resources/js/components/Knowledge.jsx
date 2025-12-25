import React from 'react';
import {Link} from '@inertiajs/react';
import BackgroundImage from '@images/um5.jpg';
export default function Knowledge() {
    return (
        <div className='flex flex-col'>
            <div className='relative z-0'>
                <img src={BackgroundImage} alt="UM-LOGO" className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
            <div className='absolute flex items-center pl-16 z-10'>
                <div className='flex flex-col mt-45'>
                    <h1 className='font-monserrat text-[16px] text-white'>CASUAL & EVERYDAY</h1>
                    <div className='mt-5 font-medium gap-2 text-white font-CormorantGaramond text-[48px] leading-tight' style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        <h1>Effortlessly combine</h1>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}