import { useCallback, useRef, useState } from "react";

export function useNearScreen<T extends HTMLElement>(
    options?: IntersectionObserverInit
) {
    const unobserveRef = useRef<(() => void) | null>(null);
    const thresholdRef = useCallback((node: T) => {
        if (!node) return;

        const callback: IntersectionObserverCallback = function (entries) {
            const [entry] = entries;
            setInView(entry.isIntersecting);
        };

        const observer = new IntersectionObserver(callback, options);

        if (unobserveRef.current) unobserveRef.current();

        unobserveRef.current = () => observer.unobserve(node);

        observer.observe(node);
    }, []);

    const [inView, setInView] = useState(false);

    return [thresholdRef, inView] as const;
}
