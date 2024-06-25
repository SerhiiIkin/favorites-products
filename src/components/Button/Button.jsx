import PropTypes from "prop-types";

const Button = ({ className, children, type, dataValue, onClick, dataId }) => {
    return (
        <button
            data-id={dataId}
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
    dataId: PropTypes.number,
};

export default Button;
