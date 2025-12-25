import React, { useRef, useEffect } from 'react';

import Logoipsum from '@images/logoipsum.svg';
import Logoipsumbrand from '@images/logoipsum-brand.svg';
import LogoIpsum from '@images/ipsum.svg';
import Logoipsum1 from '@images/Logo-ipsum.svg';
import Logoipsum2 from '@images/startipsum.svg';

const Images = [
    Logoipsum,
    Logoipsumbrand,
    LogoIpsum,
    Logoipsum1,
    Logoipsum2,
];

export default function Hero() {
    const sliderRef = useRef(null);
    const posRef = useRef(0);
    const widthRef = useRef(0);

    useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const getFirstSetWidth = () => {
        let width = 0;
        const children = slider.children;
        const half = children.length / 2;
        for (let i = 0; i < half; i++) {
            width += children[i].getBoundingClientRect().width;
        }
        return width;
    };

    const updateWidth = () => {
        widthRef.current = getFirstSetWidth();
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    let frame;
    const speed = 1;

    const animate = () => {
        posRef.current -= speed;
        if (Math.abs(posRef.current) >= widthRef.current) {
            posRef.current = 0;
        }
        slider.style.transform = `translateX(${posRef.current}px)`;
        frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', updateWidth);
    };
}, []);

    return (
        <div className="bg-white flex items-center h-35 overflow-hidden w-full">
            <div
                ref={sliderRef}
                className="flex whitespace-nowrap"
                style={{ willChange: 'transform' }}
            >
                {Images.concat(Images).map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Logo ${idx}`}
                        draggable={false}
                        className="inline-block mx-6"
                    />
                ))}
            </div>
        </div>
    );
}
