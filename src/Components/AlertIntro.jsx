import { Alert, Container, Row, Col } from "react-bootstrap";
const AlertIntro = () => {
  return (
    <Container fluid={true} className="mt-3">
      <Row>
        <Col xs={1} md={3}></Col>
        <Col xs={10} md={6}>
          <Alert variant="primary">
            <Alert.Heading>Benvenuto/a nella tua app del meteo</Alert.Heading>
            <p>
              In questa app è possibile cercare il meteo del giorno oppure
              cercare il meteo da qui ai prossimi 16 giorni in base alle tue
              necessità.
            </p>
            <p>Clicca su OGGI se desideri fare una ricerca per la giornata.</p>
            <p>
              Clicca su PROSSIMAMENTE se desideri fare una ricerca per i
              prossimi 15 giorni.
            </p>
            <p>
              In entrambe le sezioni trovari una barra di ricerca dove sarà
              possibile inserire la città che desideri.
            </p>
            <hr />
            <p className="mb-0">
              Non prendere più pioggia, rimani sempre aggiornato!
            </p>
          </Alert>
        </Col>
        <Col xs={1} md={3}></Col>
      </Row>
    </Container>
  );
};
export default AlertIntro;
