"use client"

import Link from 'next/link';
import {useState} from 'react';

export default function BurgerMenu()
{
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

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
                <button onClick={toggleMenu} className='flex flex-col h-8 justify-between z-100 fixed right-10 top-7.5'>
                    <span className={barTop}></span>
                    <span className={barMiddle}></span>
                    <span className={barBottom}></span>
                </button>
                {open&& (
                    <div className="fixed transition-all duration-500 left-0 top-0 w-screen h-screen bg-fuchsia-800 flex justify-center items-center z-50">
                        <div className="flex flex-col gap-10 text-3xl  items-center">
                            {/* Le setOpen(false) permet de fermer le menu burger quand on clique sur un lien */}
                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link href="/cats" onClick={() => setOpen(false)}>Cats</Link>
                            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}