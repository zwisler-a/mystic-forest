import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./BackButton.css"

const BackButton = () => {
  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div onClick={handleBackButtonClick} className="back-button">
      <ArrowBackIcon />
    </div>
  );
};

export default BackButton;