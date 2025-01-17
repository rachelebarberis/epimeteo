import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HeaderMeteo from "./Components/HeaderMeteo";
import CityInfo16Day from "./Components/CityInfo16Day";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterMeteo from "./Components/FooterMeteo";
import MeteoDay from "./Components/MeteoDay";
import ImgHeader from "./Components/ImgHeader";
import AlertIntro from "./Components/AlertIntro";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderMeteo />
        <ImgHeader />
        <Routes>
          <Route path="/" element={<AlertIntro />}></Route>
          <Route path="/today" element={<MeteoDay />}></Route>
          <Route path="/16gg" element={<CityInfo16Day />}></Route>
        </Routes>
        <FooterMeteo />
      </BrowserRouter>
    </>
  );
};

export default App;
