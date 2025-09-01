import { useState, useEffect, useRef } from 'react';

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
                mobileMenuBtnRef.current && !mobileMenuBtnRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isOpen, toggleMenu, mobileMenuRef, mobileMenuBtnRef };
};

export default useMobileMenu;
