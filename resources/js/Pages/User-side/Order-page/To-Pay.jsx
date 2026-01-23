import React from 'react';
import BackgroundModel from '@images/BackgroundModel.png';
import OrdersNav from '../../../components/layouts/OrdersNav';
import All from '../../User-side/Order-page/All';
export default function ToPay() {
    return (
        <>
            <div className="bg-[#F6F6F6] flex flex-col">
                <div className='bg-[#F6F6F6]'>
                    <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                        <img 
                        src={BackgroundModel}
                        alt="Background Model"
                        className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div>
                    <OrdersNav/>
                </div>
                <div>
                    <All/>
                </div>
            </div>
        </>
    );
}