import { useEffect, useRef } from 'react';

const useNavbarScroll = () => {
    const navbarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                if (window.scrollY > 50) {
                    navbarRef.current.classList.add('bg-gray-900', 'bg-opacity-95');
                } else {
                    navbarRef.current.classList.remove('bg-gray-900', 'bg-opacity-95');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return navbarRef;
};

export default useNavbarScroll;
