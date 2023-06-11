import { Header } from "../components/Header";
import { Link } from "react-router-dom";

// Style
import "./Home.css";

// Image
import mainBackgroundImage from "../assets/images/Saly-13.png";

export function Home() {
  return (
    <div>
      <Header />

      <div className="home-wrapper container">
        <div className="home-wrapper-left">
          <p className="home-wrapper-left__title">
            Hi i'm nika, and i'm learning
            <span className="change-1">front-end</span>
            <span className="change-2">Development</span>
          </p>
          <Link className="btn" to="portfolio">
            Portfolio
          </Link>
        </div>
        <div className="home-wrapper-right">
          <img src={mainBackgroundImage} alt="main-background" />
        </div>
      </div>
    </div>
  );
}
