import React from 'react';
import {Link} from '@inertiajs/react';
import BackgroundImage from '@images/um5.jpg';
import LoginLogo from '@images/UMERCH-LOGIN-LOGO.svg';
import EmailIcon from '@images/email-icon.svg';
import PasswordIcon from '@images/password-icon.svg';
export default function Knowledge({ showLogin, onCloseLogin }) {
    return (
        <div className='flex flex-col'>
            {/* Background image */}
            <div className='relative z-0'>
                <img src={BackgroundImage} alt="UM-LOGO" className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-black opacity-60'></div>
            </div>
            {/* Content */}
            <div className='absolute flex items-center pl-16 z-10'>
                <div className='flex flex-col mt-45'>
                    <h1 className='font-monserrat text-[16px] text-white'>CASUAL & EVERYDAY</h1>
                    <div className='mt-5 font-medium gap-2 text-white font-CormorantGaramond text-[48px] text-[70px] leading-tight' style={{fontFamily: "'Cormorant Garamond', serif"}}>
                        <h1>Effortlessly combine</h1>
                        <h1>comfort with campus style!</h1>
                    </div>
                    <div className='mt-5 flex flex-col text-white font-montserrat text-[16px] leading-tight'>
                        <span>Discover our Casual & Everyday Collection at UMerch, where relaxed designs meet a refined</span>
                        <span>university look.</span>
                    </div>
                    <div className='mt-10'>
                        <Link href="#" className='bg-[#9C0306] text-black text-white text-[16px] px-6 py-3 hover:cursor-pointer hover:bg-[#FFB600] transition-colors duration-300'>SHOP NOW</Link>
                    </div>
                </div>
                {/* Login Container */}
                {showLogin && (
                <div className='absolute inset-0 bg-black/60 rounded-[15px] mt-19 ml-240 w-110 h-130'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={LoginLogo} alt="UMERCH Login Logo" className='w-40'/>
                        <h1 className='text-white text-[36px] font-bold'>LOGIN</h1>
                        <div className='mt-3 gap-6 flex flex-col'>
                            <div className="relative">
                                <input
                                type="text"
                                placeholder="Umindanao Email"
                                className='bg-white/30 border rounded-[15px] h-10 w-75 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50' 
                                />
                                <img
                                    src={EmailIcon}
                                    alt="Email Icon"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                                />
                            </div>
                            <div className='relative'>
                                <input 
                                type="text"
                                placeholder='Password'
                                className='bg-white/30 border rounded-[15px] h-10 w-75 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50' 
                                />
                                <img 
                                src={PasswordIcon} 
                                alt="Password Icon" 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center w-75 mt-4">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="form-checkbox w-5 text-[#9C0306] bg-white border-gray-300 rounded focus:ring-[#9C0306]"
                            />
                            <label htmlFor="rememberMe" className="ml-1 text-white select-none cursor-pointer text-[14px]">
                                Remember Me
                            </label>
                            <Link href="#" className="ml-auto text-white text-[14px] hover:cursor-pointer">Forgot Password?</Link>
                        </div>
                        <div className='mt-5'>
                            <button
                                type="button"
                                className="bg-[#9C0306] w-72 h-10 text-white text-[16px] rounded-[15px] flex items-center justify-center hover:cursor-pointer"
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}