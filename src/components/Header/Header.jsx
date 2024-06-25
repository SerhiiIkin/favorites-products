import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "/logo.jpeg";
import { useRef } from "react";
const Header = () => {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Products",
            path: "/products",
        },
    ];

    const inputRef = useRef()

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.container}`}>
                <Link to="/">
                    <img className={styles.logo} src={Logo} alt="logo" />
                </Link>
                <ul className={styles.menu}>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link onClick={() => inputRef.current.checked = false} className={styles.link} to={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <label htmlFor="burgerMenuBtn" className={styles.burgerMenuBtn}>
                    <span></span>
                    <input ref={inputRef} id="burgerMenuBtn" type="checkbox" />
                </label>
            </nav>
        </header>
    );
};

export default Header;
