import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ getPost }) => {
  const { id, body, title } = getPost;
  const postStyle = {
    border: "1px solid green",
    borderRadius: "10px",
    paddingBottom: "10px",
  };
  return (
    <div style={postStyle}>
      <h2>ID: {id}</h2>
      <h3>Title: {title}</h3>
      <p>{body.slice(0, 200)}</p>
      <nav>
        <Link to={`/posts/${id}`}>Post Details</Link>
      </nav>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.object,
};

export default Post;
