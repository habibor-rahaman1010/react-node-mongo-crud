import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({ image: '', name: '', email: '', text: '' });
    const { id } = useParams()

    useEffect(() => {
        const detailsAPI = `http://localhost:5000/users/${id}`
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [id]);

    //updated image url feild vale
    const handleUpdateURL = (event) => {
        const updateURL = event.target.value;
        const updateUser = { image: updateURL, name: user.name, email: user.email, text: user.text };
        setUser(updateUser);
    }

    //updated name feild vale
    const handleUpdateName = (event) => {
        const updateName = event.target.value;
        const updateUser = { ...user };
        updateUser.name = updateName;
        setUser(updateUser)
    }

    //updated email feild vale
    const handleUpdateEmail = (event) => {
        const updateEmail = event.target.value;
        const updateUser = { ...user };
        updateUser.email = updateEmail;
        setUser(updateUser);
    }

    //updated text feild vale
    const handleUpdateText = (event) => {
        const updateText = event.target.value;
        const updateUser = { ...user };
        updateUser.text = updateText;
        setUser(updateUser);
    }

    //handleUpdateUser
    const handleUpdateUser = (event) => {
        const detailsAPI = `http://localhost:5000/users/${id}`
        fetch(detailsAPI, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert('Update Succesfully!')
                }
            })

        event.preventDefault();
    }

    return (

        <Container className='d-flex justify-content-evenly '>
            <Container className='mt-4'>
                <h2>Hello, {user.name}</h2>
                <Row xs={1} md={2} className="g-4 mt-4" >
                    <Col key={user._id}>
                        <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <Card.Img variant="top" src={user.image} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    {user.text} <br /> <br />
                                    {user.email}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            <Container className='w-75 mt-5'>
                <h2>Here is Edite User</h2> <br />
                <Form onSubmit={handleUpdateUser}>
                    <Form.Group className="mb-3" controlId="websitUrl">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={handleUpdateURL} type="url" value={user.image} placeholder="Enter Iamge URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control maxLength={30} onChange={handleUpdateName} type="text" value={user.name} placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control maxLength={45} onChange={handleUpdateEmail} value={user.email} type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write somthing about your self</Form.Label>
                        <Form.Control maxLength={150} onChange={handleUpdateText} value={user.text} as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Container>
    );
};

export default UpdateUser;