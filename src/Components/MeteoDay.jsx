import { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import CityInfoDay from "./CityInfoDay";

const MeteoDay = () => {
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
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <Card className="shadow-lg" style={{ borderRadius: "10px" }}>
              <Card.Body>
                {/* Barra di ricerca */}
                <Form.Group className="d-flex mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Cerca una città"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  />
                  <Button
                    onClick={getSearch}
                    className="ms-2"
                    variant="primary"
                  >
                    Cerca
                  </Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <CityInfoDay cityInfo={cityInfo} />
    </>
  );
};

export default MeteoDay;
