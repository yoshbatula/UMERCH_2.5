import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function OrdersNav() {
    const { url } = usePage();
    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    return (
        <>
            <div className='flex flex-row py-10 items-center justify-center'>
                <div className={`flex justify-center items-center bg-white w-60 h-19 text-[24px] font-bold ${isActive('/Orders') ? 'text-[#9C0306] border border-[#9C0306]' : ''}`}>
                    <Link href="">All</Link>
                </div>
                <div className={`flex justify-center items-center bg-white w-60 h-19 text-[24px] font-bold ${isActive('/ToPay') ? 'text-[#9C0306] border border-[#9C0306]' : ''}`}>
                    <Link href="">To Pay</Link>
                </div>
                <div className={`flex justify-center items-center bg-white w-60 h-19 text-[24px] font-bold ${isActive('/ToPay') ? 'text-[#9C0306] border border-[#9C0306]' : ''}`}>
                    <Link href="">To Receive</Link>
                </div>
                <div className={`flex justify-center items-center bg-white w-60 h-19 text-[24px] font-bold ${isActive('/ToPay') ? 'text-[#9C0306] border border-[#9C0306]' : ''}`}>
                    <Link href="">Completed</Link>
                </div>
                <div className={`flex justify-center items-center bg-white w-60 h-19 text-[24px] font-bold ${isActive('/ToPay') ? 'text-[#9C0306] border border-[#9C0306]' : ''}`}>
                    <Link href="">Cancelled</Link>
                </div>
            </div>
        </>
    );
}