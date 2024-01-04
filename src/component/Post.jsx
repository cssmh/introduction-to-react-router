import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ getPost }) => {
  const { id, body, title } = getPost;
  const postStyle = {
    border: "1px solid yellow",
    borderRadius: "10px",
    padding: "0 10px 20px 10px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={postStyle}>
      <h2>ID: {id}</h2>
      <h3>Title: {title}</h3>
      <p style={{ flexGrow: "1" }}>{body.slice(0, 200)}</p>
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
