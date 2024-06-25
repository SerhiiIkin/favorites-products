import FetchDataHandler from "../../components/FetchDataHandler/FetchDataHandler";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionLayout from "../../components/Layouts/SectionLayout/SectionLayout";
import Title from "../../components/Title/Title";
import useFetch from "../../hooks/useFetch";
import ProductsLayout from "../../components/Layouts/ProductsLayout/ProductsLayout";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
    const { error, isLoading, favorites, myFavorites } = useFetch();

    return (
        <main>
            <SectionLayout>
                <Title typeTitle="h1" titleText="Brugernes favoritter" />
            </SectionLayout>
            <SectionLayout>
                <FetchDataHandler
                    data={{ data: favorites, error, isLoading }}
                >
                    <ProductsLayout>
                        {favorites?.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isLoading={isLoading}
                            />
                        ))}
                    </ProductsLayout>
                </FetchDataHandler>
            </SectionLayout>

            <SectionLayout>
                <Title typeTitle="h2" titleText="Mine favoritter" />
                <FetchDataHandler
                    data={{ data: myFavorites, error, isLoading }}
                >
                    <ProductsLayout>
                        {myFavorites?.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isLoading={isLoading}
                            />
                        ))}
                    </ProductsLayout>
                </FetchDataHandler>
            </SectionLayout>
            <SectionLayout>
                <Title typeTitle="h2" titleText="Nyhedsbrev" />
                <Newsletter />
            </SectionLayout>
        </main>
    );
};

export default Home;
