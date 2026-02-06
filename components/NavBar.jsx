' use client ' // ce serveur est exécuté dans le navigateur pas le serveur

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BurgerMenu from './BurgerMenu';

const navigation = [
    { name: 'Home', href: '/', },
    { name: 'About', href: '/about' },
    { name: 'Cats', href: '/cats' },
    { name: 'Contact', href: '/contact' },
];

/**
 * La barre de navigation du site (responsive grâce au composant BurgerMenu)
 * @returns 
 */
export default function NavBar()
{
    // Permet de savoir sur quelle page on se trouve pour appliquer une classe CSS spécifique au lien actif
    const pathname = usePathname();

    return(
        <>
            <nav className=" fixed w-screen flex !p-5 justify-between bg-fuchsia-800 text-white">
                <img src='/images/logo_cat.png' alt='Logo Cat API' width="50" height="50"></img>
                <div className='flex justify-between items-center w-100 text-xl !mr-30'>
                    <BurgerMenu />
                    {navigation.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href}
                            className= {`hover:text-violet-500 transition-colors duration-500 h-8 hidden md:flex ${pathname === item.href ? 'border-b-2 border-violet-500' : ''}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}