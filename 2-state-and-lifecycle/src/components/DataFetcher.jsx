import { useEffect, useState } from "react";

const DataFetcher = () => {
    let products = [
        {
            id: 0, title: "Keyboard", price: 30.5, onSale: false
        },
        {
            id: 1, title: "Mouse", price: 15, onSale: true
        },
        {
            id: 2, title: "Headphone", price: 25, onSale: false
        }
    ];
    const [data, setData] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading data...");

    useEffect(() => {
        setTimeout(() => {
            setData(products);
            setLoadingMessage("Data successfully loaded!");
        }, 3000);
    });


    return (
        <>
            <p>{loadingMessage}</p>
            <ul>
                {data && data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    );
}

export default DataFetcher;