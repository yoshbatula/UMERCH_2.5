import React from 'react';
import {Link} from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Knowledge from '../components/Knowledge';
import Advertisement from '../components/Advertisement';
import DiscountedProduct from '../components/DiscountedProduct';
import FeatureProducts from '../components/FeatureProducts';
import LimitedOffer from '../components/LimitedOffer';
import Accessories from '../components/Accessories';
import FeatureSection from '../components/FeatureSection'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
export default function Login() {
    const [showLogin, setShowLogin] = React.useState(false);
    const handleSignInClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowLogin(true);
    };
    return (
        <>
            <div>
                {/* Navigation components */}
                <Navbar onSignInClick={handleSignInClick}/>

                {/* Knowledge components*/}
                <Knowledge showLogin={showLogin} onCloseLogin={() => setShowLogin(false)} />

                {/* Hero components*/}
                <Advertisement/>

                {/* Discounted Product components*/}
                <DiscountedProduct/>

                {/* Featured Products components */}
                <FeatureProducts/>

                {/* Limited Offer components */}
                <LimitedOffer/>

                {/* UM Accessories components */}
                <Accessories/>

                {/* Feature Section components */}
                <FeatureSection/>

                {/* Hero components */}
                <Hero/>

                {/* Footer components */}
                <Footer/>
            </div>
        </>
    );
}   

