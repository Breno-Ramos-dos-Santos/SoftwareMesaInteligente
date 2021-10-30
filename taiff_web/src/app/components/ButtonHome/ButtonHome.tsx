import { useState } from 'react';
import { Row, Container, Button, Modal, Form, Col} from 'react-bootstrap';
import './ButtonHome.css';
import imgDelete from '../../../assets/img/X.png';
import { Link } from 'react-router-dom';

export function ButtonHome(){
    const [show, setShow] = useState(false);
    const [ show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return(
        <>
        <Container className="container">
            <Row className="justify-content-md-center">
                <Col className="btn-container-home"><Button className="btn-primary" variant="info" onClick={handleShow}>Carregar teste</Button></Col>
                <Col className="btn-container-home"><Button className="btn-primary" variant="info" onClick={() => document.location.reload()}>Novo teste</Button></Col>
                <Col className="btn-container-home"><Link to="/grafico"><Button className="btn-primary" variant="info" >Iniciar teste</Button> </Link></Col>
            </Row>
        </Container>
        













        <Modal className="carrega-teste" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Buscar teste por Modelo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control type="text" placeholder="Digite o nome do modelo..." readOnly />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Fechar
        </Button>
        <Button variant="primary" onClick={handleShow2} >
            Carregar teste
        </Button>
        </Modal.Footer>
        </Modal> 

        <Modal className="carrega-teste" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
        <Modal.Title>Selecione o teste desejavel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
            <li>Secador Unique Duo - T1 <img src={imgDelete}/> </li>
            <li>Secador Unique Duo - T2 <img src={imgDelete}/></li>
            <li>Secador Unique Duo - T3 <img src={imgDelete}/></li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
            Fechar
        </Button>
        </Modal.Footer>
        </Modal> 
        </>
    );
}
