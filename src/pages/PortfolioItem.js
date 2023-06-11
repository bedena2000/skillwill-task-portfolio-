import "./Portfolio.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Components
import Modal from "../components/Modal";

const PortfolioItem = ({
  itemInfo: { websitePath, websiteLiveUrl, websiteGithub, websiteName },
  currentClickedItem,
}) => {
  const onExpand = () => {
    currentClickedItem(websitePath, websiteLiveUrl, websiteGithub, websiteName);
  };

  return (
    <Link to="/websiteDetails" className="portfolio-item">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExpand}
      >
        <div className="portfolio-item-image">
          <img src={websitePath} alt="website-page" />
        </div>
      </motion.div>
    </Link>
  );
};

export default PortfolioItem;
