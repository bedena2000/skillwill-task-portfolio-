import "./Modal.css";

const Modal = ({
  websiteName,
  websiteLivePath,
  websiteGithubPath,
  imagePath,
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper-info">
        <p>{websiteName}</p>
        <p>{websiteLivePath}</p>
        <p>{websiteGithubPath}</p>
      </div>
      <div className="modal-wrapper-image">
        <img src={imagePath} alt="modal-website" />
      </div>
    </div>
  );
};

export default Modal;
