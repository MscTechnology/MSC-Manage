import Dashboard from "./pages/Dashboard/Dashboard";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import { setLoading } from "./store/SplashSlice/SplashSlice.js";
function App() {
  const splashLoading = useSelector((state) => state.splash.isLoading);
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(setLoading(true));
  }, 1000);

  return (
    <>
      {splashLoading ? (
        <div className="App">
          <Dashboard />
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default App;
