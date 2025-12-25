import React from 'react';
import {Link} from '@inertiajs/react';
import Logo from '@images/UMERCH-LOGO.svg';

export default function Navbar({ onSignInClick }) {
    return (
        <div className="bg-[#9C0306] flex flex-row items-center p-6 h-20 sticky top-0 z-50">
            <img src={Logo} alt="UMERCH LOGO" />
            <div className='flex flex-row gap-6 p-8 text-white font-montserrat'>
                <Link href="#" className='font-bold text-[16px] leading-tight'>HOME</Link>
                <Link href="#" className='font-bold text-[16px] leading-tight'>PRODUCTS</Link>
                <Link href="#" className='font-bold text-[16px] leading-tight'>ABOUT US</Link>
                <Link href="#" className='font-bold text-[16px] leading-tight'>CONTACT US</Link>
            </div>
            <div className='flex flex-row gap-4 font-bold ml-auto text-white font-montserrat'>
                <button
                  className='font-bold text-[16px] leading-tight bg-transparent border-none cursor-pointer'
                  onClick={onSignInClick}
                >SIGN IN</button>
            </div>
        </div>
    );
}