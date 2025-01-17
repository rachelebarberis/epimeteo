import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";

const CityInfo16Day = () => {
  const [searchCity, setSearchCity] = useState("");
  const [forecastInfo, setForecastInfo] = useState(null);
  const [error, setError] = useState(null);

  const URL = "https://api.openweathermap.org/data/2.5/forecast";
  const KEY = "75dfcefb0ec7e12eb409c4b83502161d";

  const getForecast = async () => {
    if (!searchCity) return;

    try {
      const response = await fetch(
        `${URL}?q=${searchCity}&appid=${KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Città non trovata");
      }
      const data = await response.json();
      setForecastInfo(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setForecastInfo(null);
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
                    onClick={getForecast}
                    className="ms-2"
                    variant="primary"
                  >
                    Cerca
                  </Button>
                </Form.Group>

                {/* Mostra messaggio di errore se la città non viene trovata */}
                {error && <Alert variant="danger">{error}</Alert>}

                {/* Mostra le previsioni meteo se ci sono */}
                {forecastInfo && (
                  <>
                    <h4>
                      {forecastInfo.city.name}, {forecastInfo.city.country}
                    </h4>
                    <h5>Previsioni per i prossimi 15 giorni:</h5>
                    <Container fluid={true}>
                      {forecastInfo.list.map((forecast, index) => (
                        <Col key={index}>
                          <Card className="mt-2">
                            <Card.Body>
                              <Card.Title>
                                {new Date(forecast.dt * 1000).toLocaleString()}
                              </Card.Title>
                              <Card.Text>
                                <strong>Temperatura:</strong>{" "}
                                {forecast.main.temp}
                                °C <br />
                                <strong>Condizioni:</strong>{" "}
                                {forecast.weather[0].description} <br />
                                <strong>Vento:</strong> {forecast.wind.speed}{" "}
                                km/h
                                <img
                                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                                  alt={forecast.weather[0].description}
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Container>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CityInfo16Day;
