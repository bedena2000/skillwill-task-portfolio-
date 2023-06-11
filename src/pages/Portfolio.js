import { Header } from "../components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";

import websitePortfolioItem1 from "../assets/images/website-portfolio-1.png";
import websitePortfolioItem2 from "../assets/images/website-portfolio-2.png";
import websitePortfolioItem3 from "../assets/images/website-portfolio-3.png";

export function Portfolio({currentClickedItem}) {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      websitePath: websitePortfolioItem3,
      websiteLiveUrl: "https://windbnb-challenge-bedena2000.netlify.app/",
      websiteGithub: "https://github.com/bedena2000/windbnb-challenge",
      websiteName: "Wind BNB Clone (Fake)",
    },
    {
      websitePath: websitePortfolioItem2,
      websiteLiveUrl: "https://quiz-app-challenge.netlify.app/",
      websiteGithub: "https://github.com/bedena2000/quiz-app-challenge",
      websiteName: "Quiz App",
    },
    {
      websitePath: websitePortfolioItem1,
      websiteLiveUrl: "https://todo-app-challenge-b.netlify.app/",
      websiteGithub: "https://github.com/bedena2000/todo-app-challenge",
      websiteName: "Todo App",
    },
  ]);

  return (
    <div>
      <Header />

      <div className="portfolio-wrapper container">
        {portfolioItems.map((item) => {
          return (
            <PortfolioItem
              currentClickedItem={currentClickedItem}
              itemInfo={item}
              key={item.websiteLiveUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
