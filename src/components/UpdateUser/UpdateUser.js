import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const detailsAPI = `http://localhost:5000/users/${id}`
        fetch(detailsAPI)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, [id])


    return (
        <Container className='mt-4'>
            <h2>This is Update User name: {user.name}</h2>
        </Container>
    );
};

export default UpdateUser;