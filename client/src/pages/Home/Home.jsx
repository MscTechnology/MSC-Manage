import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";


const Home = () => {

  const handlePersonelButton = () => {
  }
  const handleAdminButton = () => {
    
  }

  return (
    <>
      <div className="home">
        <div>
          <div className="msc-title">
            MSC Teknoloji
          </div>

          <div className="login-button">
            <Box className="personal-button">
              <CustomButton mt={1} className="btn-btn" color={"primary"} components={Link} to="personelLogin"  onClick={handlePersonelButton} title={"Personel Girişi"} />
            </Box>
            <div className="admin-button">
              <CustomButton  color={"success"} components={Link} to="adminLogin" onClick={handleAdminButton} title={"Yönetici Girişi"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
