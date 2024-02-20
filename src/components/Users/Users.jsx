import { useLoaderData } from 'react-router-dom';
import './Users.css'
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users : {users.length}</h2>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user ={user} />)
                }
            </div>
        </div>
    );
};

export default Users;