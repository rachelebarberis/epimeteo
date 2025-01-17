import { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import CityInfoDay from "../Components/CityInfoDay";
import ImgHeader from "./ImgHeader";
import { Link } from "react-router-dom";

const HeaderMeteo = () => {
  const [searchCity, setSearchCity] = useState("");
  const [cityInfo, setCityInfo] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "75dfcefb0ec7e12eb409c4b83502161d";

  const getSearch = async () => {
    if (!searchCity) return;
    try {
      const response = await fetch(
        `${API_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("città non trovata");
      }
      const data = await response.json();
      setCityInfo(data);
    } catch (error) {
      setCityInfo(null);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        bg="primary"
        variant="primary"
        expand="lg"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid={true} className="mt-0">
          <Navbar.Brand href="#">
            <img
              src="./public/images/sun.jpeg"
              alt="Logo"
              style={{ width: "70px", height: "70px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" className="text-white" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link fw-bold text-white">
                Oggi
              </Link>
              <Link to="/16gg" className="nav-link fw-bold text-white">
                Prossimamente
              </Link>
            </Nav>

            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="Cerca una città"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
              />

              <Button onClick={getSearch} className="ms-2 bg-secondary">
                Cerca
              </Button>
            </Form.Group>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ImgHeader />
      <CityInfoDay cityInfo={cityInfo} />
    </>
  );
};

export default HeaderMeteo;
