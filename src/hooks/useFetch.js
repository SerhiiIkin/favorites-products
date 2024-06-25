import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const useFetch = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    const [favoritesLocalStorage, setFavoritesLocalStorage] = useLocalStorage("myFavorites", []);
    const [basketLocalStorage, setBasketLocalStorage] = useLocalStorage("basket", []);
    
    
    const myFavorites = useMemo(() => {
        return products.filter((product) => favoritesLocalStorage.includes(product.id));
    }, [products, favoritesLocalStorage]);
    
   
    const myBasket = useMemo(() => {
        return products.filter((product) => basketLocalStorage.includes(product.id)).map((product) => ({
            title: product.title,
            count: 1,
            id: product.id,
            price: product.price,
            fullPrice: product.price,
        }));
    }, [basketLocalStorage, products]);

    const [basketProducts, setBasketProducts] = useState(myBasket);

    const favorites = useMemo(() => {
        return products.filter((product) => product.rating > 4.5);
    }, [products]);

    const fetchData = async () => {
        try {
            const url = import.meta.env.VITE_APP_URL;
            if (!url) {
                throw new Error("URL is not defined");
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const { products } = await response.json();
            setProducts(products);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setIsLoading(false);
            throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        setBasketProducts(myBasket);
    }, [products,setBasketLocalStorage]);


    return { products, error, isLoading, favorites, myFavorites, setFavoritesLocalStorage, favoritesLocalStorage, setBasketLocalStorage, myBasket, basketLocalStorage, basketProducts, setBasketProducts };
};

export default useFetch;
