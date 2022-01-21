import { useContext } from 'react';
import { myContextAPI } from '../ContextAPI/AuthProvider';

const useAuthProvider = () => {
    return useContext(myContextAPI);
};

export default useAuthProvider;