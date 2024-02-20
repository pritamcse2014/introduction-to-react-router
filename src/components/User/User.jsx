import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email} = user;
    const userStyle = {
        border : '2px solid red',
        padding : '5px',
        margin : '5px',
        borderRadius : '10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;