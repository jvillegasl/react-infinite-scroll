import "./App.scss";

import { CatCard, CatData, InfiniteScroll } from "./components";
import { getCatImage, getCatsFact } from "./services";

function App() {
    function fetchBatch(batchSize: number) {
        return new Promise<CatData[]>(async (resolve, reject) => {
            const newData = [];

            for (let i = 0; i < batchSize; i++) {
                const fact = await getCatsFact();
                const threeFirstWords = fact.split(" ", 3).join(" ");
                const imgUrl = await getCatImage(threeFirstWords);
                newData.push({ imgUrl, fact });
            }

            resolve(newData);
        });
    }

    return (
        <div className="c-app">
            <InfiniteScroll batchSize={5} fetchBatch={fetchBatch}>
                {(item) => {
                    return <CatCard {...item} />;
                }}
            </InfiniteScroll>
        </div>
    );
}

export default App;
