import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/products'}>Products</Link></li>
                    <li><Link href={'/contacts'}>Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;