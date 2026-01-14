import React from 'react';
import Navbar from '../../../components/layouts/LandingNav'
import Knowledge from './Knowledge';
import Advertisement from '../../../components/ui/Advertisement';
import DiscountedProdcuts from "../../../components/ui/DiscountedProduct";
import FeaturedProducts from './FeaturedProducts';
import LimitedOffer from '../../../components/ui/LimitedOffer';
import Accessories from './Accessories';
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

            {/* Limited Offer component */}
            <LimitedOffer />

            {/* Accessories component */}
            <Accessories />
        </>
    );
}