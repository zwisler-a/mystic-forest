import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./BackButton.css";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/home");
  };

  return (
    <div onClick={handleBackButtonClick} className="back-button">
      <ArrowBackIcon />
    </div>
  );
};

export default BackButton;
