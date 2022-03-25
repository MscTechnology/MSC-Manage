import { Link } from "react-router-dom";
import CustomButton from "../../components/Button/CustomButton.jsx";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser {
    usertypes {
      id
      typename
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    <div>loading..</div>;
  }

  if (error) {
    <div>error</div>;
  }

  return (
    <>
      <div className="home">
        <div>
          <div className="msc-title">MSC Teknoloji</div>

          <div className="login-button">
            <div className="personal-button">
              <CustomButton
                mt={1}
                className="btn-btn"
                color={"primary"}
                components={Link}
                to="personelLogin"
                onClick={()=>{}}
                title={"Personel Girişi"}
              />
            </div>
            <div className="admin-button">
              <CustomButton
                color={"success"}
                components={Link}
                to="adminLogin"
                onClick={()=>{}}
                title={"Yönetici Girişi"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
