import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
    threshold?: number;
    once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>({ threshold = 0.1, once = true }: UseInViewOptions = {}): [React.RefObject<T>, boolean] {
    const ref = useRef<T>(null!);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    return [ref, inView];
}
