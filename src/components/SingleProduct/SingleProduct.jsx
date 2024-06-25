import { useParams } from "react-router-dom";
import useFetchSingleProduct from "../../hooks/useFetchSingleProduct";
import styles from "./singleProduct.module.css";
import Title from "../Title/Title";

const SingleProduct = () => {
    const { id } = useParams();
    const { product } = useFetchSingleProduct(id);

    return (
        <>
            <img className={styles.imgBacground} src={product.thumbnail} alt={product.title} />
            <Title type="h1" titleText={product.title} />
        </>
    );
};

export default SingleProduct;
