import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const postStyle = {
        border : '2px solid red',
        padding : '5px',
        margin : '5px',
        borderRadius : '10px'
    }
    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to see Details</button>
        </div>
    );
};

export default Post;