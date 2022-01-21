import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuthProvider from '../../Hooks/useAuthProvider';

const Users = () => {

    const { API } = useAuthProvider();
    const { users, setUsers } = API();

    const allUsers = [];

    const handleDeleteUser = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const deleteAPI = `http://localhost:5000/users/${id}`
            fetch(deleteAPI, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingUsers = users.filter((user) => user._id !== id);
                        setUsers(remainingUsers);
                    }
                })
        }
    }

    return (
        <Container className='mt-4'>
            <h2>Number Of Users: {users.length}</h2>

            {/* forEach use here...  */}
            {
                users.forEach(user => {
                    return (
                        allUsers.push(
                            <Col key={user._id}>
                                <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <Card.Img variant="top" src={user.image} />
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            {user.text} <br /> <br />
                                            {user.email}
                                        </Card.Text>
                                        <section className='d-flex justify-content-between'>
                                            <Link to={`/users/update/${user._id}`}><Button variant="outline-success">Update</Button></Link>
                                            <Button onClick={() => { handleDeleteUser(user._id) }} variant="outline-danger">Delete</Button>
                                        </section>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    )
                })

            }
            <Row xs={1} md={4} className="g-4 mt-4" >
                {allUsers}
            </Row>


        </Container>
    );
};

export default Users;