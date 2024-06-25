import styles from "./loader.module.css";
import PropTypes from "prop-types";

const Loader = ({ size, className }) => {
    const clases =
        size === "small"
            ? styles.loaderSmall
            : size === "large"
            ? styles.loaderLarge
            : styles.loaderMedium;

    return (
        <div className={`${styles.loader}  ${clases} ${className}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

Loader.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
};

export default Loader;
