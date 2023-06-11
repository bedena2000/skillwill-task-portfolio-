import "./WebsiteDetail.css";
import { Link } from "react-router-dom";

export function WebsiteDetail({ websiteDetails }) {
  const websiteImage = websiteDetails[0];
  const websiteUrl = websiteDetails[1];
  const websiteGithub = websiteDetails[2];
  const websiteName = websiteDetails[3];
  return (
    <div className="website-details-wrapper">
      <div className="website-details-left">
        <div>
          <p>Website:</p>
          <p>{websiteName}</p>
        </div>
        <div>
          <p>Live URL:</p>
          <a target="_blank" href={websiteUrl} rel="noreferrer">
            Click
          </a>
        </div>
        <div>
          <p>Github Link: </p>
          <a target="_blank" href={websiteGithub} rel="noreferrer">
            Click
          </a>
        </div>
      </div>

      <div className="website-details-right">
        <img src={websiteImage} alt="website-screenshot" />
      </div>

      <div className="go-back">
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </div>
  );
}
