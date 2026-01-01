import React from 'react';
import { Link } from '@inertiajs/react';
import Tumbler from '@images/tshirt.jpg';
export default function ProductCardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 z-50 flex justify-center items-center  backdrop-blur-xs bg-white/5'
            onClick={onClose}
        >
            <div
                className="bg-white p-2 rounded-[20px] shadow-lg relative w-200 h-140"
                onClick={e => e.stopPropagation()}
            >
                <div className='flex flex-row p-8 gap-10'>
                    <div className='flex items-start justify-center'>
                        <img src={Tumbler} alt="Tumbler" className='max-w-full h-auto rounded-[20px]' />
                    </div>
                    <div className='flex flex-col justify-start'>
                        <div>
                            <h2 className='font-semibold text-[24px] leading-tight text-based/6 whitespace-nowrap'>UM CCE ESPORTS JERSEY</h2>
                        </div>
                        <div className='mt-2 text-[12px]'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                        <div className='mt-3 flex flex-row gap-2'>
                            <h1 className='text-[#9C0306] font-semibold text-[24px]'>$120.00</h1>
                            <h1 className='text-[#727272] font-semibold text-[24px]'>$150.00</h1>
                        </div>
                        <div className='mt-5 flex flex-row'>
                            <span className='text-[12px] py-3'>Size</span>
                            <div className='flex flex-row flex-wrap gap-y-1 px-6 items-center'>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                                <button className='bg-white border border-[#DDDDDD] w-18 h-10'>XS</button>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Link href="#" className='text-[#0058B2]'>Size Chart &gt;</Link>
                        </div>
                        <div className='mt-3'>
                            <h1>Yosh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}