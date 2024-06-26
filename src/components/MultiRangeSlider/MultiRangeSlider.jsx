import { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./multiRangeSlider.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    const onMinValueChange = (event) => {
        setMinVal(event.target.value);
        minValRef.current = event.target.value;
        setTimeout(() => {
            if (event.target.value >= maxVal) {
                const value = Math.min(Number(event.target.value), maxVal - 1);
                setMinVal(value);
                minValRef.current = value;
            }
        }, 1000);
    };

    const onMaxValueChange = (event) => {
        setMaxVal(event.target.value);
        maxValRef.current = event.target.value;
        setTimeout(() => {
            if (event.target.value <= minVal) {
                const value = Math.max(Number(event.target.value), minVal + 1);
                setMaxVal(value);
                maxValRef.current = value;
            }
        }, 1000);
    };

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            onChange({ min: minVal, max: maxVal });
        }, 2000);

        return () => clearTimeout(timer);
    }, [minVal, maxVal]);

    return (
        <div className={styles.container}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={onMinValueChange}
                className={`${styles.thumb} ${styles.thumbLeft}`}
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={onMaxValueChange}
                className={`${styles.thumb} ${styles.thumbRight}`}
            />

            <div className={styles.slider}>
                <div className={styles.slider__track} />
                <div ref={range} className={styles.slider__range} />
                <input
                    onChange={onMinValueChange}
                    type="number"
                    value={minVal}
                    className={styles.slider__leftValue}
                />
                <input
                    onChange={onMaxValueChange}
                    type="number"
                    value={maxVal}
                    className={styles.slider__rightValue}
                />
            </div>
        </div>
    );
};

MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

export default MultiRangeSlider;
