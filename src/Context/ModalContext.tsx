import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

interface ModalContextValue {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = useCallback(() => setModalOpen(true), []);
    const closeModal = useCallback(() => setModalOpen(false), []);

    useEffect(() => {
        if (modalOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            document.documentElement.style.setProperty('--scrollbar-w', `${scrollbarWidth}px`);
            const onKey = (e: KeyboardEvent) => {
                if (e.key === 'Escape') closeModal();
            };
            window.addEventListener('keydown', onKey);
            return () => {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                document.documentElement.style.setProperty('--scrollbar-w', '0px');
                window.removeEventListener('keydown', onKey);
            };
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.documentElement.style.setProperty('--scrollbar-w', '0px');
        }
    }, [modalOpen, closeModal]);

    return <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within ModalProvider');
    return ctx;
}
