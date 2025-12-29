import React from "react";
import { Link } from "@inertiajs/react";
import Location from '@images/Location.svg';
import Phone from '@images/Phone.svg';
import Email from '@images/Email.svg';
import Facebook from '@images/Facebook.svg';
import Instagram from '@images/Instagram.svg';
import Twitter from '@images/Twitter.svg';
import Youtube from '@images/Youtube.svg';
export default function Footer() {
    return (
        <div className="p-6 bg-[#F6F6F6] flex flex-row justify-center items-center">
            <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                    <h1 className="text-[20px]">Menu</h1>
                    <div className="mt-1 flex flex-col text-[#727272] gap-1">
                        <Link href="#">Home</Link>
                        <Link href="#">Shop</Link>
                        <Link href="#">About us</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[20px]">Categories</h1>
                    <div className="mt-1 flex flex-col text-[#727272] gap-1">
                        <Link href="#">Wardrobe</Link>
                        <Link href="#">Accessories</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[20px]">Contact Us</h1>
                    <div className="mt-1 flex flex-row text-[#727272] gap-1">
                        <img src={Location} alt="Location-Icon"/>
                        <div>
                            <p>Bolton St, Poblacion District, </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}