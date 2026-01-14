import React from 'react';
import Navbar from '../../../components/layouts/LandingNav';
import BackgroundModel from '@images/BackgroundModel.png'; 
import { Link } from '@inertiajs/react';
export default function Carts() {
    return (
        <>
            <Navbar/>
            <div className='bg-[#F6F6F6]'>
                <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                    <img 
                    src={BackgroundModel}
                    alt="Background Model"
                    className='w-full h-full object-cover'
                    />
                </div>
                <div className='flex flex-col items-center justify-center py-15 gap-3'>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <div className='bg-white flex items-center justify-center border border-[#9C0306] w-130 h-20'>
                            <Link href="" className='text-[#9C0306] text-[24px] font-bold'>01 Cart</Link>
                        </div>
                        <div className='bg-white flex items-center justify-center border border-[#9C0306] w-130 h-20'>
                            <Link href="" className='text-[#9C0306] text-[24px] font-bold'>02 Checkout</Link>
                        </div>
                    </div>
                    <div className='p-6 flex flex-row'>
                        <div className='flex flex-row bg-white w-263 h-17 rounded-[10px] items-center p-6'>
                            <div className='gap-2 flex flex-row items-center'>
                                <input type="checkbox" className='w-3 h-3 accent-[#9C0306]'/>
                                <span className='text-[13px] text-[#575757]'>Product</span>
                            </div>
                            <div className='ml-auto flex flex-row gap-20 text-[13px] text-[#575757]'>
                                <span>Unit price</span>
                                <span>Quantity</span>
                                <span>Total Price</span>
                                <span>Actions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}