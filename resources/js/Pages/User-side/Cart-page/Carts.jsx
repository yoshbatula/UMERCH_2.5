import React, { useState } from 'react';
import Navbar from '../../../components/layouts/LandingNav';
import BackgroundModel from '@images/BackgroundModel.png'; 
import { Link, usePage } from '@inertiajs/react';
import Tshirt from '@images/tshirt.jpg';
import Tumbler from '@images/tumbler.png';
export default function Carts() {
    const { url } = usePage();
    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    }
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div className='bg-[#F6F6F6] h-screen'>
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
                            <div className={`bg-white flex items-center justify-center w-130 h-20 ${isActive('/Cart')} ? 'border border-[#9C0306] text-[#9C0306]' : ''}`}>
                                <Link href="" className={`text-[24px] font-bold ${isActive('/Cart') ? 'text-[#9C0306]' : ''}`}>01 Cart</Link>
                            </div>
                            <div className={`bg-white flex items-center justify-center w-130 h-20 ${isActive('/Checkout')} ? 'border border-[#9C0306] text-[#9C0306]' : ''}`}>
                                <Link href="" className={`text-[24px] font-bold ${isActive('/Checkout') ? 'text-[#9C0306]' : ''}`}>02 Checkout</Link>
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
                                    <span className='transform translate-x-[-17px]'>Actions</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-center items-center p-6'>
                            <div className='bg-white w-263 h-45 rounded-[10px] flex items-center p-6 gap-6'>
                                <input type="checkbox" className='w-3 h-3 accent-[#9C0306]' />
                                <img src={Tshirt} alt="Tshirt" className='w-35 rounded-[10px]'/>
                                <div className='flex flex-col text-start justify-center items-start gap-y-3'>
                                    <h1 className='text-[15px] font-semibold text-start'>UM CCE Esports Jersey</h1>
                                    <p className='text-[10px] leading-tight'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</p>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row'>
                                        <label htmlFor="Variations" className='text-[13px] text-[#575757]'>Variations: </label>
                                        <select name="Variations" id="Variations" className='text-[#575757]'>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <label htmlFor="Sizes" className='text-[13px] text-[#575757]'>Medium</label>
                                </div>
                                 <div className='ml-auto flex flex-row gap-x-18 text-[13px]'>
                                    <span className='text-[13px]'>₱500</span>
                                    <div className='flex flex-row'>
                                    <button
                                    type="button"
                                    className="w-6 h-6 flex items-center justify-center border border-[#DDDDDD] text-lg font-bold bg-white"
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    >
                                    -
                                    </button>
                                    <span className="w-13 h-6 text-center text-[#9C0306] border border-[#DDDDDD]">{quantity}</span>
                                    <button
                                    type="button"
                                    className="w-6 h-6 flex items-center justify-center border border-[#DDDDDD] text-lg font-bold bg-white"
                                    onClick={() => setQuantity(q => q + 1)}
                                    >
                                    +
                                    </button>
                                    </div>
                                    <span className='text-[#9C0306] text-[13px]'>₱500</span>
                                    <div className='border border-[#9C0306] flex items-center justify-center w-20 h-8 rounded-[10px] hover:cursor-pointer'>
                                        <button className='text-[#9C0306] text-[13px] font-medium hover:cursor-pointer'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    );
}