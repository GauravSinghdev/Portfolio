"use client";
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Close the sheet when the pathname changes
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' onClick={() => setIsOpen(true)} />
            </SheetTrigger>
            
            <SheetContent className="flex flex-col">
                <div className='mt-2 text-center text-2xl'>
                    <Link href="/"> 
                        <h1 className='text-4xl font-semibold'>
                            Kara<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-10 my-20'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
