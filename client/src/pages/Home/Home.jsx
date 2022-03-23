import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";

const Home = () => {

  const handlePersonelButton = () => {
  }
  const handleAdminButton = (e) => {
    e.preventDefault();
    console.log("Admin Button Clicked");
  }

  return (
    <>
      <div className="home">
        <div>
          <div className="msc-title">
            MSC Teknoloji
          </div>

          <div className="login-button">
            <div className="personal-button">

              <CustomButton color={"primary"} components={Link} to="personelLogin"  onClick={handlePersonelButton} title={"Personel Girişi"} />
            </div>
            <div className="admin-button">
              <CustomButton color={"success"} components={Link} to="adminLogin" onClick={handleAdminButton} title={<Link to="/adminLogin">Yönetici Girişi</Link>} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
