import React, { useEffect, useRef } from 'react';

const useTiltAnimation = () => {
    const cardsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / 10) * -1;
            const rotateY = (x - centerX) / 10;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale3d(1.02, 1.02, 1.02)
            `;

            const icons = card.querySelectorAll<HTMLElement>('.feature-icon, .icon-container');
            icons.forEach(icon => {
                icon.style.transform = `translateZ(50px)`;
            });
        };

        const handleMouseLeave = (card: HTMLElement) => {
            card.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                scale3d(1, 1, 1)
            `;

            const icons = card.querySelectorAll<HTMLElement>('.feature-icon, .icon-container');
            icons.forEach(icon => {
                icon.style.transform = `translateZ(20px)`;
            });
        };

        cardsRef.current.forEach(card => {
            if (card) {
                const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, card);
                const mouseLeaveHandler = () => handleMouseLeave(card);

                card.addEventListener('mousemove', mouseMoveHandler);
                card.addEventListener('mouseleave', mouseLeaveHandler);

                return () => {
                    card.removeEventListener('mousemove', mouseMoveHandler);
                    card.removeEventListener('mouseleave', mouseLeaveHandler);
                };
            }
        });
    }, []);

    return cardsRef;
};

export default useTiltAnimation;
