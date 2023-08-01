import { useEffect, useState } from "react";
import "./App.css";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import Thirdpage from "./components/Thirdpage";
import Footer from "./components/Footer";
import PizzaIcon from "./assets/pizza-icon.png";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  let [loaderTracker, setLoaderTracker] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4100);

    setInterval(() => {
      setLoaderTracker(loaderTracker++);
    }, 40);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <img src={PizzaIcon} alt="icon pizza" />
          <div className="loading-bar">
            <div className="loading-bar-track" style={{ width: `${loaderTracker}%` }}></div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Firstpage />
          <Secondpage />
          <Thirdpage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
