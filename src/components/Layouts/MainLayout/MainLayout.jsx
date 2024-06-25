import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import styles from "./mainLayout.module.css";
import PropTypes from "prop-types";
const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
