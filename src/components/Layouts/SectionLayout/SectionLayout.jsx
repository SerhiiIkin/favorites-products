import PropTypes from "prop-types";
import styles from "./sectionLayout.module.css";

const SectionLayout = ({ children, className }) => {
    return (
        <section className={`${styles.section} ${className}`}>
            <div className="container">{children}</div>
        </section>
    );
};

SectionLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default SectionLayout;
