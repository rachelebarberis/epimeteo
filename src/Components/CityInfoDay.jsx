/* eslint-disable react/prop-types */
import { Container, Row, Col, Card } from "react-bootstrap";
const CityInfoDay = ({ cityInfo }) => {
  if (!cityInfo) {
    return null;
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={10} className="mb-2">
          <Card className="shadow-lg" style={{ borderRadius: "10px" }}>
            <Row>
              <Col md={6}>
                <Card.Title className="text-center pt-2">
                  <h3>{cityInfo.name}</h3>
                </Card.Title>
              </Col>
              <Col md={6}></Col>
            </Row>
            <Row>
              <Col md={6} className="text-center">
                <img
                  src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}.png`}
                  alt={cityInfo.weather[0].description}
                  style={{ width: "50px", height: "50px" }}
                />
                <p>{cityInfo.weather[0].description}</p>
              </Col>

              <Col md={6}>
                <Card.Text className="text-start">
                  <h4>Temperatura: {cityInfo.main.temp}°C</h4>
                  <h4>Temperatura minima: {cityInfo.main.temp_min}°C</h4>
                  <h4>Temperatura massima: {cityInfo.main.temp_max}°C</h4>
                  <p>Umidità: {cityInfo.main.humidity}%</p>
                  <p>Vento: {cityInfo.wind.speed} km/h</p>
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CityInfoDay;
