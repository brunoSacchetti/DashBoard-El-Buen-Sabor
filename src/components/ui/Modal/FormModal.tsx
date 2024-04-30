import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormFormik from '../FormFormik/FormFormik';
function FormModal ({title,handleCloseModal }: {title:string,handleCloseModal:any }) {
  return (
    <Modal show={true} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormFormik/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;