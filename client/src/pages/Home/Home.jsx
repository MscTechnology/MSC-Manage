import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";

const Home = () => {

  const handlePersonelButton = (e) => {
    e.preventDefault();
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

              <CustomButton color={"primary"} onClick={handlePersonelButton} title={<Link to="/personelLogin">Personel Girişi</Link>} href="/personelLogin" />
            </div>
            <div className="admin-button">
              <CustomButton color={"success"} onClick={handleAdminButton} title={<Link to="/adminLogin">Yönetici Girişi</Link>} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
