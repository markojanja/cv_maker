import './DownloadButton.css';

const DownloadButton = ({ onClick }) => {
  return (
    <button className="download" onClick={onClick}>
      <span>Download</span>
      <i className="fa-solid fa-file-pdf"></i>
    </button>
  );
};

export default DownloadButton;
