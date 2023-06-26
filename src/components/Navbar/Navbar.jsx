import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Products', path: '/products' }
    ];
    return (
        <nav className='bg-purple-400'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {open === true ?
                        <XMarkIcon className="h-6 w-6 text-purple-500" /> 
                        : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>
            </div>
            <ul className={`bg-purple-400 pl-7 pr-7 pt-3 pb-4 md:flex absolute md:static duration-3 ${open ? 'top-6' : '-top-96'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    />)
                }
            </ul>
        </nav>
    );
};

export default Navbar;