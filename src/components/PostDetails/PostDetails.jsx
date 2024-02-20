import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;