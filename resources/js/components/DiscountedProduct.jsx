import React from 'react';
import DiscountedProducts from '@images/um2.jpg';
import DiscountedProducts1 from '@images/um3.jpg';
import { Link } from '@inertiajs/react';
export default function DiscountedProduct() {
    const Images = [
        DiscountedProducts,
        DiscountedProducts1,
    ]
    return (
        <div className='mt-5 flex flex-row justify-center items-center gap-10'>
            <div>
                <img src={DiscountedProducts} alt="Discounted Product" className='w-100 h-100 rounded-2xl'/>
            </div>
            <div className='flex flex-col text-black gap-2 text-start'>
                <h1 className='font-bold text-[36px]'>Discounted Products</h1>
                <p className='text-[16px]'>Get the best deals on our top-quality products!</p>
                <p className='text-[16px]'>Enjoy exclusive discounts and save big on your favorite items.</p>
                <p className='text-[16px]'> Don't miss out on these limited-time offers – shop now and upgrade your collection without breaking the bank!</p>
                <Link href="#" className='bg-[#9C0306] text-black text-white text-[16px] px-6 py-3 hover:cursor-pointer hover:bg-[#FFB600] transition-colors duration-300 w-40 text-center mt-4'>SHOP NOW</Link>
            </div>
        </div>
    );
}