import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HeaderMeteo from "./Components/HeaderMeteo";
import CityInfo16Day from "./Components/CityInfo16Day";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterMeteo from "./Components/FooterMeteo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMeteo />}></Route>
          <Route path="/16gg" element={<CityInfo16Day />}></Route>
        </Routes>
        <FooterMeteo />
      </BrowserRouter>
    </>
  );
};

export default App;
