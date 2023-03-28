import { CATS_DATA } from "@/data";

interface ICatImage {
    tags: string[];
    createdAt: string;
    updatedAt: string;
    validated: boolean;
    file: string;
    mimetype: string;
    size: number;
    _id: string;
    url: string;
}

function getEndpoint(text: string) {
    return `https://cataas.com/cat/says/${text}?size=50&json=true`;
}

export function getCatImage(text: string): Promise<string> {
    // const CAT_IMAGE_ENDPOINT = getEndpoint(encodeURIComponent(text));

    // return fetch(CAT_IMAGE_ENDPOINT)
    //     .then((res) => res.json())
    //     .then((data: ICatImage) => `https://cataas.com${data.url}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * CATS_DATA.length);
            const catImgUrl = CATS_DATA[randomIndex].imgUrl;
            resolve(catImgUrl);
        }, 100);
    });
}
