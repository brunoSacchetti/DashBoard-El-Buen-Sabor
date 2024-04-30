import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormModal ({ handleCloseModal }: { handleCloseModal:any }) {
  return (
    <Modal show={true} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Sucursal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Aquí va el formulario para agregar una sucursal.</p>
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