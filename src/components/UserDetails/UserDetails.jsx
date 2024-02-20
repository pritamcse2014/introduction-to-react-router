import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const {name, email} = useLoaderData();
    return (
        <div>
            <h2>User Details</h2>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default UserDetails;