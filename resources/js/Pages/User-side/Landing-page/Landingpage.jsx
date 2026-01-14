import React from 'react';
import Navbar from '../../../components/layouts/LandingNav'
import Knowledge from './Knowledge';
import Advertisement from '../../../components/ui/Advertisement';
import DiscountedProdcuts from "../../../components/ui/DiscountedProduct";
import FeaturedProducts from './FeaturedProducts';
export default function Landingpage() {
    return (
        <>
            {/* Navigation component */}
            <Navbar/>

            {/* Knowledge component */}
            <Knowledge />

            {/* Advertisement component */}
            <Advertisement/>

            {/* DiscountedProducts component */}
            <DiscountedProdcuts />

            {/* FeaturedProducts component */}
            <FeaturedProducts />
        </>
    );
}