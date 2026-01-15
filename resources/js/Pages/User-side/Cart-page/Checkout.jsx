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
                    <div className="p-2 flex flex-col gap-6">
                        <div className='flex flex-row'>
                            <div className='flex flex-row bg-white w-263 h-17 rounded-[10px] items-center p-3'>

                            </div>
                        </div>
                        <div className='mt-4 flex flex-row gap-2'>
                            <div className='flex flex-col bg-white w-263 h-45 p-4 gap-4'>

                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}