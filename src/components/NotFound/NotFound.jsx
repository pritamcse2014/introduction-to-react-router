import { Link, useRouteError } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from</p>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default NotFound;