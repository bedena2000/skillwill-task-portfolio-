import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

// Components

// Pages
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { WebsiteDetail } from "./pages/WebsiteDetail";



function App() {

  const [websiteDetails, setWebsiteDetails] = useState([]);

  const currentClickedItem = (...restArguments) => {
    setWebsiteDetails(restArguments);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio currentClickedItem={currentClickedItem} />,
    },
    {
      path: '/websiteDetails',
      element: <WebsiteDetail websiteDetails={websiteDetails} />
    }
  ]);

  return (
    <div className="app" style={{ background: "white" }}>
      <div className="app-left-side"></div>
      <div className="app-right-side"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
