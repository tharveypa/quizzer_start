import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export function AddQuizModal ({
    show,
    handleCloseModal,
    addQuiz
}: {
    show: boolean,
    handleCloseModal: () => void,
    addQuiz: (title: string, body: string) => void,
}) {
    const [title, setTitle] = useState<string>("Example Quiz");
    const [body, setBody] = useState<string>("Example Description");

    const saveChanges = () => {
        // setTitle("Example Quiz");
        // setBody("Example Description");
        addQuiz(title, body);
        handleCloseModal();
    };

    return (
            <Modal show={show} onHide={handleCloseModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTitle("Example Quiz");
                            setBody("Example Description");
                            handleCloseModal();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};
