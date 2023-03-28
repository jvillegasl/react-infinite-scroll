import "./InfiniteScroll.scss";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useNearScreen } from "@/hooks";

type InfiniteScrollProps<T> = {
    children: (props?: T) => ReactElement;
    batchSize?: number;
    fetchBatch: (batchSize: number) => Promise<T[]>;
};

export function InfiniteScroll<T>({
    children,
    batchSize = 1,
    fetchBatch,
}: InfiniteScrollProps<T>) {
    const [items, setItems] = useState<T[]>([]);

    const containerRef = useRef<HTMLUListElement>(null);

    const [thresholdItemRef, inView] = useNearScreen<HTMLLIElement>({
        root: containerRef.current,
        threshold: 1.0
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isLoading) return;
        if (!inView && items.length !== 0) return;

        setIsLoading(true);

        fetchBatch(batchSize).then((newItems) => {
            setItems((prevItems) => [...prevItems, ...newItems]);
            setIsLoading(false);
        });
    }, [inView]);

    function renderItems() {
        const itemsElements = items.map((item, i) => {
            if (i === items.length - 1) {
                return (
                    <li
                        ref={thresholdItemRef}
                        key={i}
                        className="c-infinite-scroll__item test"
                    >
                        {children(item)}
                    </li>
                );
            }

            return (
                <li key={i} className="c-infinite-scroll__item">
                    {children(item)}
                </li>
            );
        });

        return itemsElements;
    }

    function renderLoading() {
        return isLoading && <div className="">Loading...</div>;
    }

    return (
        <div className="c-infinite-scroll">
            <ul ref={containerRef} className="c-infinite-scroll__items">
                {renderItems()}
                {renderLoading()}
            </ul>
        </div>
    );
}
