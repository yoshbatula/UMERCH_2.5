import React from 'react';
import HeroBg from '@images/model.jpg'
export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='relative w-full'>
                <img src={HeroBg} alt="Hero Background" className='object-cover w-full h-[30rem]'/>
                <div className='absolute inset-0 bg-black opacity-58'></div>
                <div className='absolute inset-0 bg-amber-300 opacity-20'></div>
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <div className='flex flex-col text-start text-white transform translate-x-[120px]'>
                        <p className='text-[16px] font-semibold mb-3'>EXPLORE</p>
                        <div className='text-[48px] font-semibold font-coromont'>
                            <h1>Elevate your fashion, embrace</h1>
                            <h1>UM Timeless Style!</h1>
                        </div>
                        <p>Explore our collections today and experience the joy of fashion.</p>
                        <p>Shop now for the ultimate casual style!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}