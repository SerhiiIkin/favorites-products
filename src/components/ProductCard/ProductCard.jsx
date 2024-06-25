import PropTypes from "prop-types";
import Title from "../Title/Title";
import styles from "./productCard.module.css";
import Button from "../Button/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineAddShoppingCart, MdFileDownloadDone } from "react-icons/md";
import {  useState } from "react";
import { FcLike } from "react-icons/fc";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    const {
        setFavoritesLocalStorage,
        favoritesLocalStorage,
        setBasketLocalStorage,
        basketLocalStorage,
        
    } = useFetch();
    const [imagesFiltered, setImagesFiltered] = useState(product.images);
   

    const onClickBtn = (event) => {
        event.preventDefault();
        const value = event.target.closest("button").dataset.value;

        const newImages = [...imagesFiltered];
        if (newImages.length > 0) {
            if (value === "left") {
                newImages.unshift(newImages.pop());
            } else {
                newImages.push(newImages.shift());
            }
            setImagesFiltered(newImages);
        }
    };

    const basketProduct = (event) => {
        event.preventDefault();
        if (basketLocalStorage.includes(product.id)) {
            setBasketLocalStorage((prev) =>
                prev.filter((id) => id !== product.id)
            );
        } else {
            setBasketLocalStorage((prev) => [...prev, product.id]);
        }
    };

    const likeProduct = (event) => {
        event.preventDefault();
        if (favoritesLocalStorage.includes(product.id)) {
            setFavoritesLocalStorage((prev) =>
                prev.filter((id) => id !== product.id)
            );
        } else {
            setFavoritesLocalStorage((prev) => [...prev, product.id]);
        }
    };

    return (
        <Link to={`/products/${product.id}`} className={styles.card}>
            <Title
                typeTitle="h3"
                titleText={product.title}
                className={styles.title}
            />
            <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.thumbnail}
            />
            <p className={styles.description}>{product.description}</p>
            <i>
                Price: <strong>{product.price}</strong> kr.
            </i>
            <i className={styles.rating}>
                Rating: <strong>{product.rating}</strong>
            </i>
            <p className={styles.category}>
                Category: <i>{product.category}</i>
            </p>
            {product?.brand && (
                <p className={styles.brand}>
                    Brand:<i> {product.brand}</i>
                </p>
            )}
            <Button
                className={`${styles.buttonLike} ${
                    favoritesLocalStorage.includes(product.id)
                        ? styles.active
                        : ""
                }`}
                type="button"
                onClick={likeProduct}
            >
                <FcLike />
            </Button>
            <Button
                className={styles.buttonBasket}
                type="button"
                onClick={basketProduct}
            >
                {basketLocalStorage.includes(product.id) ? (
                    <MdFileDownloadDone />
                ) : (
                    <MdOutlineAddShoppingCart />
                )}
            </Button>
            <div className={styles.images}>
                {imagesFiltered?.length > 1 && (
                    <>
                        <Button
                            type="button"
                            dataValue="left"
                            onClick={onClickBtn}
                            className={styles.buttonLeftImages}
                        >
                            <FaArrowLeft />
                        </Button>
                        <Button
                            dataValue="right"
                            type="button"
                            onClick={onClickBtn}
                            className={styles.buttonRightImages}
                        >
                            <FaArrowLeft />
                        </Button>
                    </>
                )}
                {imagesFiltered?.map((image) => (
                    <img key={image} src={image} alt={product.title} />
                ))}
            </div>
        </Link>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        rating: PropTypes.number,
        category: PropTypes.string,
        brand: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default ProductCard;
