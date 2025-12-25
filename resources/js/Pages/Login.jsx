import React from 'react';
import {Link} from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Knowledge from '../components/Knowledge';
import Hero from '../components/Hero';

export default function Login() {
    return (
        <>
            <div>
                {/* Navigation components */}
                <Navbar className="sticky"/>

                {/* Knowledge components*/}
                <Knowledge/>

                {/* Hero components*/}
                <Hero/>
            </div>
        </>
    );
}   

