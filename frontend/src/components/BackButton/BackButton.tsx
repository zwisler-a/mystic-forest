import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import "./BackButton.css";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/home");
  };

  return (
    <div onClick={handleBackButtonClick} className="back-button">
      <ArrowBackRoundedIcon />
    </div>
  );
};

export default BackButton;
