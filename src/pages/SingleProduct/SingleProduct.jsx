import { useParams } from "react-router-dom";
import useFetchSingleProduct from "../../hooks/useFetchSingleProduct";
import PageHeader from "../../components/PageHeader/PageHeader";

const SingleProduct = () => {
    const { id } = useParams();
    const { product } = useFetchSingleProduct(id);

    return (
        <>
            <PageHeader product={product} title={product.title} />
        </>
    );
};

export default SingleProduct;
