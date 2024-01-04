import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import './Posts.css'

const Posts = () => {

    const allPosts = useLoaderData()

    return (
        <div>
            <h2>Total post: {allPosts.length}</h2>
            <div className="posts">
            {
                allPosts.slice(9, 17).map(soloPost => <Post key={soloPost.id} getPost={soloPost}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;