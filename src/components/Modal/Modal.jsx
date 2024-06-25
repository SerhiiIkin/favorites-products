import { forwardRef } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./modal.module.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Modal = forwardRef(function Modal({ email }, ref) {
    const onDialogClick = (e) => {
        if (e.target.localName === "dialog") ref.current.close();
    };

    return (
        <dialog onClick={onDialogClick} className={styles.dialog} ref={ref}>
            <div className={styles.container}>
                <p> Du er nu tilmeldt nyhedsbrevet med emailen: {email}</p>

                <form method="dialog">
                    <Button onClick={onDialogClick} className={styles.button}>
                        <IoIosClose />
                    </Button>
                </form>
            </div>
        </dialog>
    );
});

Modal.propTypes = {
    email: PropTypes.string,
};

export default Modal;
