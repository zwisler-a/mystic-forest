import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import "./BackButton.css";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/home/8f4a1c6b-4cd3-9d2b-91o4-77a8e7bda93f");
  };

  return (
    <div onClick={handleBackButtonClick} className="back-button">
      <ArrowBackRoundedIcon />
    </div>
  );
};

export default BackButton;
