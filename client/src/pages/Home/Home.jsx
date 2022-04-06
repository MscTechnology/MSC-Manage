import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Loading from "components/Loading/Loading.js";
import Error from "components/Error/Error.js";
import { useGetUserQuery } from "generated/graphql.tsx";

const Home = () => {
  const { data, loading, error } = useGetUserQuery({});

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  return (
    <>
      <div className="home">
        <div >
          <img src={require("./logo.jpg")} alt="" />
        </div>

        <div className="buttons">
          <Link
            className="button1"
            role="button"
            to="personelLogin"
            
          >
            Personel
          </Link>
          <Link
            className="button1"
            role="button"
            to="adminLogin"
            
          >
            Admin
          </Link>

        </div>

        {/* <div className="login-button">
          <div className="personal-button">
            <CustomButton
              mt={1}
              color={"primary"}
              components={Link}
              to="personelLogin"
              onClick={() => {}}
              title={"Personel"}
            />
          </div>
          <div className="admin-button">
            <CustomButton
              color={"success"}
              components={Link}
              to="adminLogin"
              onClick={() => {}}
              title={"Admin"}
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
