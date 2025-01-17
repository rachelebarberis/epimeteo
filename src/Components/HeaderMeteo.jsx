import { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import CityInfoDay from "../Components/CityInfoDay";

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
              <Nav.Link href="#" className="fw-bold text-white">
                Meteo
              </Nav.Link>

              <Nav.Link href="#" className="fw-bold text-white">
                Giornaliero
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold text-white">
                16GG
              </Nav.Link>
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

      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <img
          src="./public/images/headerimg.jpg"
          alt="mondo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
      <CityInfoDay cityInfo={cityInfo} />
    </>
  );
};

export default HeaderMeteo;
