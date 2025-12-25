import React from 'react';

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
    return (
      <div className="bg-white flex items-center h-35 overflow-hidden w-full">
        <div className="flex whitespace-nowrap gap-x-6 infiniteSlider">
          {[...Images, ...Images, ...Images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Logo ${idx}`}
              draggable={false}
              className="inline-block"
            />
          ))}
        </div>
      </div>
    );
}