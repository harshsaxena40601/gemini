import { useState, useEffect, useRef } from 'react';

const useAuthModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const switchToLogin = () => setActiveTab('login');
    const switchToRegister = () => setActiveTab('register');

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return { isModalOpen, activeTab, openModal, closeModal, switchToLogin, switchToRegister, modalRef };
};

export default useAuthModal;
