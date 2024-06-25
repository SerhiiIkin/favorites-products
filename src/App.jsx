import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Products from "./pages/Products/Products";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            ),
        },
        {
            path: "about",
            element: (
                <MainLayout>
                    <About />
                </MainLayout>
            ),
        },
        {
            path: "contact",
            element: (
                <MainLayout>
                    <Contact />
                </MainLayout>
            ),
        },
        {
            path: "products",
            element: (
                <MainLayout>
                    <Products />
                </MainLayout>
            ),
        },
        {
            path: "products/:id",
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
