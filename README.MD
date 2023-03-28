# React: Infinite Scroll

## Infinite Scroll Component:

-   Dynamically loads data when the last of the currents items is visible.
-   Renders a list of elements and populates them with fetched data.
-   Implements the custom hook useNearScreen using Intersection Observer.
-   Renders a loading indicator while new data is being fetched
-   Props format:

```
{
    children: (props?: T) => ReactElement,
    batchSize: number,
    fetchBatch: (batchSize: number) => Promise<T[]>
}
```

## APIs

### Random Cats Fact

-   API URL: [https://catfact.ninja/](https://catfact.ninja/)

-   Endpoint: `GET https://catfact.ninja/fact`

-   Query Params:

    -   No query param.

-   Features:
    -   Response format: JSON.
    -   No API key required.
    -   Response body format:
    ```
    {
        "fact": string,
        "length": number
    }
    ```

### Random Cat Image

-   API URL: [https://cataas.com/](https://cataas.com/)

-   Endpoint: `https://cataas.com/cat/says/:text?size=50&json=true`

-   Query Params:

    -   text (required): the customized message that will be displayed on the cat image.

-   Features:
    -   Response format: JSON.
    -   No API key required.
    -   Response body format:
    ```
    {
        "tags": string[];
        "createdAt": string;
        "updatedAt": string;
        "validated": boolean;
        "file": string;
        "mimetype": string;
        "size": number;
        "_id": string;
        "url": string;
    }
    ```

## Installing

Clone this repository and run the next command:

```
npm install
```

## Locally run

After installing run the next command:

```
npm run dev
```
