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

                {error && <Alert variant="danger">{error}</Alert>}

                {forecastInfo && (
                  <>
                    <h4 className="text-center">
                      {forecastInfo.city.name}, {forecastInfo.city.country}
                    </h4>
                    <h5 className="text-center">
                      Previsioni per i prossimi giorni:
                    </h5>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {forecastInfo && (
          <Container fluid className="mt-4">
            <Row className="g-4">
              {forecastInfo.list.map((forecast, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="text-center">
                        {new Date(forecast.dt * 1000).toLocaleString("it-IT", {
                          weekday: "long",
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Card.Title>
                      <Card.Text className="text-center">
                        <strong>Temperatura:</strong> {forecast.main.temp}°C
                        <br />
                        <strong>Condizioni:</strong>{" "}
                        {forecast.weather[0].description} <br />
                        <strong>Vento:</strong> {forecast.wind.speed} km/h
                      </Card.Text>
                      <div className="text-center">
                        <img
                          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                          alt={forecast.weather[0].description}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
};

export default CityInfo16Day;
