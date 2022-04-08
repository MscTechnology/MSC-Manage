import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Loading from "components/Loading/Loading.js";
import Error from "components/Error/Error.js";
import { useGetUserQuery } from "generated/graphql.tsx";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "store/SplashSlice/SplashSlice";
import SplashScreen from "components/SplashScreen/SplashScreen";
const Home = () => {
  const { data, loading, error } = useGetUserQuery({});
  const splashLoading = useSelector((state) => state.splash.isLoading);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setLoading(true));
  }, 2000);
  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  return (
    <>
      {splashLoading ? (
        <div className="home">
          <div>
            <img src={require("./logo.jpg")} alt="" />
          </div>

          <div className="buttons">
            <Link className="button1" role="button" to="personelLogin">
              Personel
            </Link>
            <Link className="button1" role="button" to="adminLogin">
              Admin
            </Link>
          </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default Home;
