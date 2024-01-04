import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const detailsDataAll = useLoaderData();
  const { id, title } = detailsDataAll;

  return (
    <div>
      <h2>ID: {id}</h2>
      <h3>Title: {title}</h3>
      <nav>
        <Link to={"/posts"}>Back to all Posts</Link>
      </nav>
    </div>
  );
};

export default PostDetails;
