import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "../pages/Root";
import Home from "../pages/home/home";
import Products from "../pages/products/Products";
import ProductsAdmin, { productsAddAction } from "../pages/admin/products/Products";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Category from "../pages/category/Category";
import Login, { loginAction } from "../pages/auth/Login";
import Register, { registerAction } from "../pages/auth/Register";
import Admin, { adminLoader } from "../pages/admin/Admin";
import Users, { deleteUserAction } from "../pages/admin/users/Users";
import CategoriesAdmin, { categoryAddAction } from "../pages/admin/categories/Categories";
import Categories from "../pages/categories/Categories";
import Cart, { cartAction } from "../pages/cart/Cart";
import Gender from "../pages/gender/Gender";
import Profile, { profileLoading } from "../pages/Profile/Profile";
import Landing from "../pages/Profile/pages/Landing";
import Achievements from "../pages/Profile/pages/Achievements";
import AdminAchievements, { achievementsAddAction } from "../pages/admin/achievements/Achievements";
import Loyalty from "../pages/Profile/pages/Loyalty";
import Orders from "../pages/Profile/pages/Orders";
import ProductsLanding, { productsLoader } from "../pages/productsLanding.jsx/ProductsLanding";
import PageNotFound from "../pages/error/PageNotFound";
import Stats from "../pages/admin/stats/Stats";
import Settings, { settingsAction } from "../pages/Profile/pages/Settings";
import AdminRanks, { rankAddAction } from "../pages/admin/ranks/AdminRanks";


const AllRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: rootLoader,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction
            },
            {
                path: "register",
                element: <Register />,
                action: registerAction
            },
            // Gender
            {
                path: "gender/:id",
                element: <Gender/>
            },
            // Categories
            {
                path: "categories",
                children: [
                    {
                        index: true,
                        element: <Categories />,
                    },
                    {
                        path: ":id",
                        element: <Category />
                    }
                ]
            },
            // Products
            {
                path: "products",
                element: <ProductsLanding />,
                loader: productsLoader,
                children: [
                    {
                        index: true,
                        element: <Products />,
                    },
                    {
                        path: ":id",
                        element: <ProductDetail />
                    }
                ]
            },
            // Cart
            {
                path: "cart",
                element: <Cart />,
                action: cartAction   
            },
            // Admin
            {
                path: "admin",
                element: <Admin />,
                loader: adminLoader,
                children: [
                    {
                        index: true,
                        element: <Stats />
                    },
                    {
                        path: "users",
                        element: <Users />,
                        action: deleteUserAction
                    },
                    {
                        path: "categories",
                        element: <CategoriesAdmin />,
                        action: categoryAddAction
                    },
                    {
                        path: "products",
                        element: <ProductsAdmin />,
                        action: productsAddAction
                    },
                    {
                        path: "achievements",
                        element: <AdminAchievements />,
                        action: achievementsAddAction
                    },
                    {
                        path: "ranks",
                        element: <AdminRanks/>,
                        action: rankAddAction
                    }
                ]
            },
            // Profile 
            {
                path: "profile/:id",
                element: <Profile />,
                loader: profileLoading,
                children: [
                    {
                        index: true,
                        element: <Landing />
                    },
                    {
                        path: "achievements",
                        element: <Achievements />
                    },
                    {
                        path: "loyalty",
                        element: <Loyalty />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    },
                    {
                        path: "settings",
                        element: <Settings />,
                        action: settingsAction
                    }
                ]
            },
            // error 
            {
                path: "*",
                element: <PageNotFound /> 
            }
        ]
    }
]);


export default AllRoutes