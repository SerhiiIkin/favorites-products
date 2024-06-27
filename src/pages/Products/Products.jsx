import { useMemo, useState } from "react";
import FetchDataHandler from "../../components/FetchDataHandler/FetchDataHandler";
import ProductsLayout from "../../components/Layouts/ProductsLayout/ProductsLayout";
import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import Title from "../../components/Title/Title";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/Button/Button";
import styles from "./products.module.css";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";

const Products = () => {
    const { products, error, isLoading } = useFetch();

    const sortedProductsPrice = useMemo(
        () => products.sort((a, b) => +a.price - +b.price),
        [products]
    );

    const [sortedProducts, setSortedProducts] = useState(sortedProductsPrice);
    const [currentMin, setCurrentMin] = useState("");
    const [currentMax, setcurrentMax] = useState("");
    const [activeButton, setActiveButton] = useState("alle");

    const minPrice = useMemo(() => {
        return Math.min(...products.map((product) => product.price));
    }, [products]);

    const maxPrice = useMemo(() => {
        return Math.max(...products.map((product) => product.price));
    }, [products]);

    const categories = useMemo(() => {
        return [
            ...new Set(products.map((product) => product.category)).add("alle"),
        ].reverse();
    }, [products]);

    const sortingButtonCLick = (e) => {
        const category = e.target.textContent;
        setActiveButton(category);

        setSortedProducts(
            products.filter(
                (product) =>
                    product.price >= currentMin &&
                    product.price <= currentMax &&
                    (category === "alle" || product.category === category)
            )
        );
    };

    const onMultiRangeSliderChange = ({ min, max }) => {
       
        setCurrentMin(min);
        setcurrentMax(max);

        const filterProducts = (product) =>
            product.price >= min &&
            product.price <= max &&
            (activeButton === "alle" || product.category === activeButton);

        setSortedProducts(products.filter(filterProducts));
    };

    return (
        <SectionLayout>
            <Title typeTitle="h1" titleText="Produkter" />
            <FetchDataHandler
                data={{
                    data: categories,
                    error,
                    isLoading,
                }}
            >
                <div className={styles.buttonContainer}>
                    {categories.map((category, index) => (
                        <Button
                            onClick={sortingButtonCLick}
                            className={`${styles.button} ${
                                activeButton == category
                                    ? styles.activeButton
                                    : ""
                            }`}
                            key={index}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </FetchDataHandler>
            {minPrice > 0 && maxPrice > 0 && (
                <MultiRangeSlider
                    min={minPrice}
                    max={maxPrice}
                    onChange={onMultiRangeSliderChange}
                />
            )}
            <FetchDataHandler
                data={{
                    data: sortedProducts,
                    error,
                    isLoading: sortedProducts.length === 0,
                }}
            >
                <ProductsLayout>
                    {sortedProducts?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isLoading={false}
                        />
                    ))}
                </ProductsLayout>
            </FetchDataHandler>
        </SectionLayout>
    );
};

export default Products;
