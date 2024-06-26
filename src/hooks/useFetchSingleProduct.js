import { useEffect, useState } from "react";

const useFetchSingleProduct = (id) => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = import.meta.env.VITE_APP_URL;
                if (!url) {
                    throw new Error("URL is not defined");
                }
                const response = await fetch(`${url}/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const product = await response.json();
                setProduct(product);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setError(error.message);
                setIsLoading(false);
                throw error;
            }
        };
        fetchData();
    }, [id]);

    return { product, error, isLoading };
};

export default useFetchSingleProduct;
