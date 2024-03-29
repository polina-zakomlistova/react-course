import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function StaticExample(props) {
    const { title, body, onClose, show, onClick, onExited } = props;

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={onClose} onExited={onExited}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{body}</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClick}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={onClose}>
                        Not
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
