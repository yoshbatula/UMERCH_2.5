import React from 'react';

export default function ProductCardModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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