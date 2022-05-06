
import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "store/SplashSlice/SplashSlice";
import SplashScreen from "components/SplashScreen/SplashScreen";
import { useTranslation } from "react-i18next";
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from "uniforms-material";
import { bridge as schema } from "./Uniform/LoginSchema";
import { useGetUserQuery } from "generated/graphql";
import { setUser, setAdmin } from "store/User/UserSlice";

import { toast, ToastContainer } from "react-toastify";
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";

const Home = () => {

  const navigate = useNavigate();

  const { t } = useTranslation();
  const { data, loading, error } = useGetUserQuery();

  const splashLoading = useSelector((state) => state.splash.isLoading);

  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(setLoading(true));
  }, 1000);

  const handleLogin = (model) => {
    const personel = data?.users?.filter(
      (user) =>
        user.username === model.username &&
        user.password === model.password &&
        user.usertypesid === 2 &&
        user.status === 1
    );

    const admin = data?.users?.filter(
      (user) =>
        user.username === model.username &&
        user.password === model.password &&
        user.usertypesid === 1 &&
        user.status === 1
    );

    if (personel.length > 0) {
      dispatch(setUser(personel[0]));
      toast.success("Giriş Başarılı");
      setTimeout(() => {
        navigate("/managementpanel/");
      }, 1000);
    } else if (admin.length > 0) {
      toast.success("Giriş Başarılı");
      dispatch(setAdmin(admin[0]));
      setTimeout(() => {
        navigate("/managementpanel/");
      }, 1000);
    } else if (personel.length === 0 || admin.length === 0) {
      toast.error("Giriş Başarısız");
    }
  };


  return (
    <>
      <ToastContainer />
      {splashLoading ? (
        <div className="grid  h-screen w-full  bg-gray-800">
          <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
            <LanguageSwitcher />
          </div>
          <div className="p-12">
            <div className="max-w-[400px] w-full mx-auto bg-slate-300 p-12 px-12 justify-center rounded-lg">
              <div className="m-5">
                <img
                  className="mb-5 bg-cover bg-center"
                  src={require("./logo.jpg")}
                  alt="MSClogo"
                />
              </div>

              <div className="flex flex-col">
                <AutoForm schema={schema} onSubmit={handleLogin}>
                  <ErrorsField />
                  <AutoField
                    name={"username"}
                    label={t("login.personellogin.username")}
                  />
                  <AutoField
                    name={"password"}
                    type={"password"}
                    label={t("login.personellogin.password")}
                  />
                  <div>
                    <SubmitField
                      className="w-full  "
                      label={t("login.personellogin.login")}
                    />
                  </div>
                </AutoForm>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default Home;
