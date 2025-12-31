import React from 'react';

export default function ProductCardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div onClick={isOpen} className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-white/5'>
            <div className="bg-white p-6 rounded shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Modal content goes here */}
                <h2>Product Details</h2>
            </div>
        </div>
    );
}