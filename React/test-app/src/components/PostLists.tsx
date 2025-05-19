import {useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold">Posts</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul className="list-group my-4 py-4">
        {posts.map((post) => (
          <li className="list-group-item my-3" key={post.id}>
            <h4 className="text-primary">{post.title}</h4>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsList;