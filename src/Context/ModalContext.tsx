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
            document.body.style.overflow = 'hidden';
            const onKey = (e: KeyboardEvent) => {
                if (e.key === 'Escape') closeModal();
            };
            window.addEventListener('keydown', onKey);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', onKey);
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [modalOpen, closeModal]);

    return <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
}

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within ModalProvider');
    return ctx;
}
