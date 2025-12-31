import React from 'react';
import Tumbler from '@images/tumbler.png';
export default function ProductCardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 z-50 flex  backdrop-blur-xs bg-white/5'
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded shadow-lg relative"
                onClick={e => e.stopPropagation()}
            >
                <div className='flex flex-row'>
                    <img src={Tumbler} alt="Tumbler" className='w-10'/>
                </div>
            </div>
        </div>
    );
}