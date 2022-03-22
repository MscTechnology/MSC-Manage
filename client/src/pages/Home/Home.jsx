import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";

const Home = () => {

  const handlePersonelButton = (e) => {
    e.preventDefault();
    console.log("Personel Button Clicked");
  }
  const handleAdminButton = (e) => {
    e.preventDefault();
    console.log("Admin Button Clicked");
  }



  return (
    <>
      <div className="home">
        <div>
          <h1 className="msc-title">MSC Teknoloji</h1>
  
            <div className="login-button">
                <div className="personal-button">
                    <CustomButton color={"primary"} onClick={handlePersonelButton} title={"Personel Girişi"}/>
                </div>
                <div className="admin-button">
                    <CustomButton color={"success"} onClick={handleAdminButton} title={"Yonetici Girisi"}/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
