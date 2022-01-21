import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddUser = () => {
    const imageRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();


    const handlerSubmit = (event) => {
        const image = imageRef?.current?.value;
        const name = nameRef?.current?.value;
        const email = emailRef?.current?.value;
        const text = textRef?.current?.value;

        const newUser = {
            image: image,
            name: name,
            email: email,
            text: text,
        }


        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert('Succefully data addeed to database');
                    event.target.reset();
                }
            })
            .catch((err) => {
                alert('somthing went worng, try agin', err)
            })

        event.preventDefault();
    }

    return (
        <Container className='w-25 mt-5'>
            <h2>This is Add User</h2> <br />
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="mb-3" controlId="websitUrl">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="url" ref={imageRef} placeholder="Enter Iamge URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write somthing about your self</Form.Label>
                    <Form.Control ref={textRef} as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default AddUser;