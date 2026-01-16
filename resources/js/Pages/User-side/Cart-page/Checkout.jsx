import React from 'react';
import { Link } from '@inertiajs/react';
import LandingNav from '../../../components/layouts/LandingNav';
import CartsNav from '../../../components/layouts/CartsNav';
import BackgroundModel from '@images/BackgroundModel.png';
export default function Checkout() {
    return (
        <>
            <LandingNav/>
            <div className='bg-[#F6F6F6] h-screen flex flex-col'>
                <div className='bg-[#F6F6F6]'>
                    <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                    <img 
                    src={BackgroundModel}
                    alt="Background Model"
                    className='w-full h-full object-cover'
                    />
                </div>
                <div className='py-7'>
                    <CartsNav/>
                </div>
                {/* Product order box */}
                <div className="flex flex-col items-center justify-center py-3 gap-3">
                    <div className="p-2 flex flex-col gap-2">
                        <div className='flex flex-row'>
                            <div className='flex flex-row bg-white w-263 h-17 rounded-[10px] items-center p-6'>
                                <h1 className='text-[20px] font-semibold'>Products Ordered</h1>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row gap-2'>
                            <div className='flex flex-col bg-white w-263 h-45 p-4 gap-2'>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-start justify-center gap-3'>
                        <div className='flex flex-col gap-y-3'>
                            <div className='bg-white w-150 h-40 rounded-[10px] flex flex-col justify-center items-center p-4 gap-4'>

                            </div>
                            <div className='bg-white w-150 h-40 rounded-[10px] flex flex-col justify-center items-center p-4 gap-4'>

                            </div>
                        </div>
                        <div className='ml-auto flex flex-col'>
                            <div className='bg-white w-110 h-60 rounded-[10px]'>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}