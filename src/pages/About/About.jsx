import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";
import Title from "../../components/Title/Title";
import styles from "./about.module.css";

const About = () => {
    return (
        <SectionLayout className={styles.about}>
            <Title typeTitle="h1" titleText="Welcome to Pæne Produckter!" />
                <ul className={styles.list}>
                    <li>
                        Discover the charm of Scandinavian design at Pæne
                        Produckter. Our boutique store offers a curated
                        selection of high-quality, beautifully crafted home
                        goods that embody elegance and functionality. From
                        minimalist furniture to unique decor items, each piece
                        at Pæne Produckter is chosen for its aesthetic appeal
                        and superior craftsmanship.
                    </li>
                    <li className={styles.list}>
                        Our collection includes:
                        <li>
                            <strong>Furniture:</strong> Stylish chairs, tables,
                            and shelves that blend seamlessly into any modern
                            home.
                        </li>
                        <li>
                            <strong>Decor:</strong> Artistic vases, sculptures,
                            and wall art that add a touch of sophistication to
                            your space.
                        </li>
                        <li>
                            <strong>Textiles:</strong> Cozy throws, cushions,
                            and rugs made from natural fibers for a warm,
                            inviting atmosphere.
                        </li>
                        <li>
                            <strong>Lighting:</strong> Elegant lamps and
                            lighting solutions that brighten your home with
                            style.
                        </li>
                    </li>
                    <li>
                        At Pæne Produckter, we believe in sustainable living.
                        That&apos;s why many of our products are made from
                        eco-friendly materials and crafted by artisans who share
                        our commitment to the environment.
                    </li>
                    <li>
                        Visit us today and transform your home with the timeless
                        beauty of Scandinavian design. Whether you&apos;re
                        looking for a statement piece or subtle accents, Pæne
                        Produckter has something for every taste.
                    </li>
                </ul>
        </SectionLayout>
    );
};

export default About;
