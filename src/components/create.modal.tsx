'use client'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';

interface IProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
}

function CreateModal(props: IProps) {

    const {showModal, setShowModal} = props;

    const [description, setDescriptin] = useState('');

    const handleSubmit = () => {
        if(!description) {
            toast.error('Description must not empty!')
            return;
        }
        fetch("http://localhost:9000/todo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json text/plain, */*'
            },
            body: JSON.stringify({description})
        }).then(res => res.json()).then(res => {
                if (res) {
                    toast.success("Them moi thanh cong");
                    handleCloseModal();
                }
            }
        );

        // toast.success('Add new  task successfully!');
        // console.log(desription);
    }
    const handleCloseModal = () => {
        setDescriptin("");
        setShowModal(false);
    }
    return (
        <>
            <Modal
                show={showModal}
                onHide={() => handleCloseModal()}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="description..."
                                          value={description}
                                          onChange={e => setDescriptin(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Check type="checkbox" label="Is It Done">
                        </Form.Check>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleCloseModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;