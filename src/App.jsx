import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./pages/Products/Products";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
function App() {
    const router = createBrowserRouter([
        {
            path: "/favorites-products",
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            ),
        },
        {
            path: "/favorites-products/about",
            element: (
                <MainLayout>
                    <About />
                </MainLayout>
            ),
        },
        {
            path: "/favorites-products/contact",
            element: (
                <MainLayout>
                    <Contact />
                </MainLayout>
            ),
        },
        {
            path: "/favorites-products/products",
            element: (
                <MainLayout>
                    <Products />
                </MainLayout>
            ),
        },
        {
            path: "/favorites-products/products/:id",
            element: (
                <MainLayout>
                    <SingleProduct />
                </MainLayout>
            ),
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
