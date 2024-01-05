import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import ContactUs from "./component/ContactUs/ContactUs.jsx";
import Blog from "./component/Blog/Blog.jsx";
import Error from "./component/Error/Error.jsx";
import PostDetails from "./component/Posts/PostDetails.jsx";
import Phones from "./component/Phones/Phones.jsx";
import PhoneDetails from "./component/Phones/PhoneDetails.jsx";
import Posts from "./component/Posts/Posts.jsx";
import Users from "./component/Users/Users.jsx";
import UserDetails from "./component/Users/UserDetails.jsx";
import Meals from "./component/Mealdb/Meals.jsx";
import MealDetails from "./component/Mealdb/MealDetails.jsx";
import StyleHeader from "./component/StyleHeader/StyleHeader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <StyleHeader></StyleHeader>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/users",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: "/users/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path: "/posts/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: "/phones",
        element: <Phones></Phones>
      },
      {
        path: "/phones/:phoneSlug",
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/phone/${params.phoneSlug}`),
        element: <PhoneDetails></PhoneDetails>
      },
      {
        path: "/meals",
        loader: ()=> fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
        element: <Meals></Meals>
      },
      {
        path: "/meals/:mealId",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <MealDetails></MealDetails>
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App></App>
  </React.StrictMode>
);
