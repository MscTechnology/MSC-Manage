import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "store/SplashSlice/SplashSlice";
import SplashScreen from "components/SplashScreen/SplashScreen";
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Türkçe' }
};
const Home = () => {
  const { t, i18n } = useTranslation();

  const splashLoading = useSelector((state) => state.splash.isLoading);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setLoading(true));
  }, 2000);

 

  return (
    <>
      {splashLoading ? (
        <div className="home">
          <div>
            <img src={require("./logo.jpg")} alt="" />
          </div>

          <div className="buttons">
            <Link className="button1" role="button" to="personelLogin">
            {t('homepage.personelbutton')}
            </Link>
            <Link className="button1" role="button" to="adminLogin">
            {t('homepage.adminbutton')}
            </Link>
          </div>
          <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default Home;
