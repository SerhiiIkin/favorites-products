import PropTypes from "prop-types";
import styles from "./backgroundImageSlider.module.css";
import { useEffect, useState } from "react";

const BackgroundImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images?.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <article className={styles.slider}>
            {images?.length > 0 && (
                <>
                    {images.map((image, index) => (
                        <img
                            className={`${styles.sliderImg} ${
                                index === currentImageIndex ? styles.active : ""
                            }`}
                            key={image}
                            src={image}
                            alt="product"
                        />
                    ))}
                </>
            )}
        </article>
    );
};

BackgroundImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};

export default BackgroundImageSlider;
