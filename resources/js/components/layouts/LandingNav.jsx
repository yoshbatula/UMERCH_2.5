import React from 'react';
import {Link} from '@inertiajs/react';
import Logo from '@images/UMERCH-LOGO.svg';
import CartIcon from '@images/CartIcon.svg';
import NotificationIcon from '@images/NotificationIcon.svg';
import UserAvatar from '@images/AccountIcon.svg'
export default function LandingNav() {
    return (
        <>
            <div className="bg-[#9C0306] flex flex-row items-center p-6 h-20 sticky top-0 z-50">
                <img src={Logo} alt="UMERCH LOGO" />
                    <div className='flex flex-row gap-6 p-8 text-white font-montserrat'>
                        <Link href="/" className='font-bold text-[16px] leading-tight'>HOME</Link>
                        <Link href="/Shop" className='font-bold text-[16px] leading-tight'>PRODUCTS</Link>
                        <Link href="#" className='font-bold text-[16px] leading-tight'>ABOUT US</Link>
                        <Link href="#" className='font-bold text-[16px] leading-tight'>CONTACT US</Link>
                    </div>
                    <div className='flex flex-row gap-6 items-center font-bold ml-auto text-white font-montserrat'>
                        <Link href="#"><img src={CartIcon} alt="Cart Icon"/></Link>
                        <Link href="#"><img src={NotificationIcon} alt="Notification Icon"/></Link>
                        <div className='flex flex-row gap-2 items-center'>
                            <Link href="#"><img src={} alt="" /></Link>
                        </div>
                    </div>
            </div>
        </>
    );
}