import { useEffect, useState } from 'react';

const API = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const API_URL = `http://localhost:5000/users`;
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return {
        users,
        setUsers,
    };
};

export default API;