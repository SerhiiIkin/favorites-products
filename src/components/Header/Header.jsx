import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "/logo.jpeg";
import { useRef } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Button from "./../Button/Button";
import useFetch from "../../hooks/useFetch";
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

    const inputRef = useRef();

    const { basketProducts, setBasketProducts, setBasketLocalStorage } =
        useFetch();

    const onCountBtnCLick = (event) => {
        const value = event.target.closest("button").dataset.value;
        const idProduct = event.target.closest("button").dataset.id;

        setBasketProducts((prev) => [
            ...prev
                .map((product) => {
                    if (product.id !== +idProduct) return product;

                    if (product.count == 1 && value === "-") {
                        setBasketLocalStorage((prev) =>
                            prev.filter((id) => id !== product.id)
                        );
                        return null;
                    }
                    return {
                        ...product,
                        count: product.count + (value === "+" ? 1 : -1),
                        fullPrice:
                            product.price *
                            (product.count + (value === "+" ? 1 : -1)),
                    };
                })
                .filter((product) => product !== null),
        ]);
    };

    return (
        <header className={styles.header}>
            <nav className={`container ${styles.container}`}>
                <Link to="/">
                    <img className={styles.logo} src={Logo} alt="logo" />
                </Link>
                <ul className={styles.menu}>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                onClick={() =>
                                    (inputRef.current.checked = false)
                                }
                                className={styles.link}
                                to={link.path}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className={styles.basketContainer}>
                        <Button className={styles.basketBtn}>
                            <LiaShoppingBasketSolid />
                        </Button>
                        <div className={styles.basketWrapper}>
                            {basketProducts.length === 0 ? (
                                <div className={styles.basketContent}>Kurv er tom!</div>
                            ) : (
                                <table
                                    id="basket"
                                    className={styles.basketContent}
                                >
                                    <thead>
                                        <tr className={styles.basketProduct}>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Count</th>
                                            <th>Full price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {basketProducts.map((product) => (
                                            <tr
                                                className={styles.basketProduct}
                                                key={product.id}
                                            >
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <Button
                                                        dataValue={"+"}
                                                        dataId={product.id}
                                                        onClick={
                                                            onCountBtnCLick
                                                        }
                                                    >
                                                        <IoMdAdd />
                                                    </Button>
                                                    {product.count}
                                                    <Button
                                                        dataId={product.id}
                                                        dataValue={"-"}
                                                        onClick={
                                                            onCountBtnCLick
                                                        }
                                                    >
                                                        <FaMinus />
                                                    </Button>
                                                </td>
                                                <td>{product.fullPrice}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </li>
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
