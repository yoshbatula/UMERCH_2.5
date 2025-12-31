import React from 'react';
import Tumbler from '@images/tumbler.png';
export default function ProductCardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 z-50 flex justify-center items-center  backdrop-blur-xs bg-white/5'
            onClick={onClose}
        >
            <div
                className="bg-white p-2 rounded shadow-lg relative w-180 h-100"
                onClick={e => e.stopPropagation()}
            >
                <div className='flex flex-row p-8 gap-10'>
                    <img src={Tumbler} alt="Tumbler" className='w-80'/>
                    <div className='flex flex-col'>
                        <div>
                            <h2>Wooden</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}