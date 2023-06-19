import './App.css';
import Question from './Question';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (

    <Container>
      <Row>
        <Col style={{textAlign:'center'}}><Question/></Col>
        <Col style={{textAlign:'center'}}><Question/></Col>
      </Row>
    </Container>
  
  );
}

export default App;
