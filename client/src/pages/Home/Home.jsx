import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "store/SplashSlice/SplashSlice";
import SplashScreen from "components/SplashScreen/SplashScreen";
import { useTranslation } from 'react-i18next';
import { Button } from "@mui/material";
import { setLanguage } from "store/Language/LanguageSlice";


const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Türkçe' }
};
const Home = () => {
  const { t, i18n } = useTranslation();

  const splashLoading = useSelector((state) => state.splash.isLoading);

  const selectLang = useSelector((state) => state.language.lang);
 

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
          <div className="localization">
              {Object.keys(lngs).map((lng) => (
                <Button variant="outlined" key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => 
                {
                  i18n.changeLanguage(lng)
                  dispatch(setLanguage(lng))
                }
                }
                
                >
                  {lngs[lng].nativeName}
                </Button>
                
              ))}
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
            

          </div>
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

export default Home;
