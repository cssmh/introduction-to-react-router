import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Blog from "./component/Blog.jsx";
import Error from "./component/Error.jsx";
import Users from "./component/Users.jsx";
import UserDetails from "./component/UserDetails.jsx";
import Posts from "./component/Posts.jsx";
import PostDetails from "./component/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
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
