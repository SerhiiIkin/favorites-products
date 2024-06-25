import { useEffect, useMemo, useState } from "react";
import FetchDataHandler from "../../components/FetchDataHandler/FetchDataHandler";
import ProductsLayout from "../../components/Layouts/ProductsLayout/ProductsLayout";
import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";
import ProductCard from "../../components/ProductCard/ProductCard";
import Title from "../../components/Title/Title";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/Button/Button";
import styles from "./products.module.css";

const Products = () => {
    const { products, error, isLoading } = useFetch();
    const [sortedProducts, setSortedProducts] = useState(products);

    const categories = useMemo(() => {
        return [
            ...new Set(products.map((product) => product.category)).add("alle"),
        ].reverse();
    }, [products]);

    const sortingButtonCLick = (e) => {
        const category = e.target.textContent;
        if (category === "alle") {
            setSortedProducts(products);
        } else {
            setSortedProducts(
                products.filter((product) => product.category === category)
            );
        }
    };

    useEffect(() => {
        if (products) {
            setSortedProducts(products);
        }
    }, [products]);

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
                        className={styles.button}
                        key={index}
                    >
                        {category}
                    </Button>
                ))}
            </div>
            </FetchDataHandler>
            <FetchDataHandler
                data={{
                    data: sortedProducts,
                    error,
                    isLoading,
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
