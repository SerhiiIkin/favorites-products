import PropTypes from "prop-types";

const Button = ({ className, children, type, dataValue, onClick }) => {
    return (
        <button
            data-value={dataValue}
            type={type}
            onClick={onClick}
            className={`${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
    dataValue: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
