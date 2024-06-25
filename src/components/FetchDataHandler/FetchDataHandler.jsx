import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import styles from "./fetchDataHandler.module.css";
const FetchDataHandler = ({ data, children }) => {
    if (data.error) {
        return <p className={styles.dataContainer}>{data.error}</p>;
    }
    if (data.data.length === 0 && !data.isLoading && !data.error) {
        return <p className={styles.dataContainer}>Tom liste</p>;
    }

    if (data.isLoading) {
        return <div className={styles.dataContainer}><Loader /></div>;
    }

    return <>{children}</>;
};

FetchDataHandler.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.array,
        error: PropTypes.string,
        isLoading: PropTypes.bool,
    }),
    children: PropTypes.node,
};

export default FetchDataHandler;
