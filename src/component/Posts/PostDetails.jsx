import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const detailsDataAll = useLoaderData();
  const { id, title } = detailsDataAll;

  const handleNav = useNavigate()

  const postHandleButton = () => {
    handleNav(-1)
  }

  return (
    <div>
      <h2>ID: {id}</h2>
      <h3>Title: {title}</h3>
      <button onClick={postHandleButton}>Back to post</button>
    </div>
  );
};

export default PostDetails;
