import React from 'react';
import {Link} from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Knowledge from '../components/Knowledge';

export default function Login() {
    return (
        <>
            <div>
                {/* Navigation components */}
                <Navbar/>

                {/* Knowledge component with background image */}
                <Knowledge/>
            </div>
        </>
    );
}   

