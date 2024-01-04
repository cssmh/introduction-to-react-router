import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const detailsDataAll = useLoaderData();
  const { id, title } = detailsDataAll;

  return (
    <div>
      <h2>ID: {id}</h2>
      <h3>Title: {title}</h3>
    </div>
  );
};

export default PostDetails;
