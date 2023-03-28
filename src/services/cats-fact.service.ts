import { CATS_DATA } from "@/data";

interface ICatsFact {
    fact: string;
    length: number;
}

const CATS_FACT_ENDPOINT = "https://catfact.ninja/fact";

export function getCatsFact(): Promise<string> {
    // return fetch(CATS_FACT_ENDPOINT)
    //     .then((res) => res.json())
    //     .then((data: ICatsFact) => data.fact);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * CATS_DATA.length);
            const catsFact = CATS_DATA[randomIndex].fact;
            resolve(catsFact);
        }, 100);
    });
}
