"use client"

import Link from 'next/link';
import {useState} from 'react';

/**
 * Foncionnalité du menu burger pour la navigation mobile
 * @returns 
 */
export default function BurgerMenu()
{
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    // Animation du menu Burger en utilisant Tailwind CSS

    const bar = "block h-1 w-10 bg-white rounded transition-all duration-300";

    const barTop = open
        ? `${bar} rotate-45 translate-y-4`
        : bar;

    const barMiddle = open
        ? `${bar} opacity-0`
        : `${bar} opacity-100`;

    const barBottom = open
        ? `${bar} -rotate-45 -translate-y-3 `
        : bar;

    return(
        <>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='flex flex-col h-8 justify-between z-50 fixed right-10 top-7.5'>
                    <span className={barTop}></span>
                    <span className={barMiddle}></span>
                    <span className={barBottom}></span>
                </button>
                    {/* Animation de la page Menu  */}
                    <div className={`fixed top-0 left-0 w-screen h-screen bg-fuchsia-800 flex justify-center items-center z-40 transform transition-all duration-500
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                        <div className="flex flex-col gap-10 text-3xl  items-center">
                            {/* Le setOpen(false) permet de fermer le menu burger quand on clique sur un lien */}
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link href="/cats" onClick={() => setOpen(false)}>Cats</Link>
                            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                        </div>
                    </div>
            </div>
        </>
    )
}