import {  useRef, useState } from "react";
import styles from "./newsletter.module.css";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");
    const dialog = useRef();
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        dialog.current.showModal();
    };


    return (
        <>
            <form onSubmit={submitHandler} className={styles.form}>
                <input
                    className={styles.input}
                    autoFocus
                    required
                    ref={inputRef}
                    type="email"
                    placeholder="Enter your email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit" className={styles.buttonRegister}>
                    Tilmeld
                </Button>
            </form>
            <Modal ref={dialog} email={inputValue} />
        </>
    );
};

export default Newsletter;
