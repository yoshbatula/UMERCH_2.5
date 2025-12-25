import React from 'react';
import {Link} from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Knowledge from '../components/Knowledge';
import Hero from '../components/Advertisement';
import DiscountedProduct from '../components/DiscountedProduct';
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
                <Navbar onSignInClick={handleSignInClick} />

                {/* Knowledge components*/}
                <Knowledge showLogin={showLogin} onCloseLogin={() => setShowLogin(false)} />

                {/* Hero components*/}
                <Hero/>

                {/* Discounted Product components*/}
                <DiscountedProduct/>
            </div>
        </>
    );
}   

