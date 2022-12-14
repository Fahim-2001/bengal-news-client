import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:categoryId",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.categoryId}`),
      },
      {
        path: "/news/:newsId",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.newsId}`),
      },
    ],
  },
]);
