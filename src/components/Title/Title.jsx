import PropTypes from "prop-types";
import styles from "./title.module.css";

const Title = ({ typeTitle, titleText, className }) => {
    const classes = className ? className : "";
    switch (typeTitle) {
        case "h1":
            return (
                <h1 className={`${styles.title1} ${classes}`}>{titleText}</h1>
            );
        case "h2":
            return (
                <h2 className={`${styles.title2} ${classes}`}>{titleText}</h2>
            );
        case "h3":
            return (
                <h3 className={`${styles.title3} ${classes}`}>{titleText}</h3>
            );
        case "h4":
            return (
                <h4 className={`${styles.title4} ${classes}`}>{titleText}</h4>
            );
        case "h5":
            return (
                <h5 className={`${styles.title5} ${classes}`}>{titleText}</h5>
            );
        case "h6":
            return (
                <h6 className={`${styles.title6} ${classes}`}>{titleText}</h6>
            );

        default:
            return (
                <h1 className={`${styles.title1} ${classes}`}>{titleText}</h1>
            );
    }
};

Title.propTypes = {
    typeTitle: PropTypes.string,
    titleText: PropTypes.string,
    className: PropTypes.string,
};

export default Title;
