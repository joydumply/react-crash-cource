import Post from './Post';
import { useLoaderData } from 'react-router-dom';
import classes from './PostList.module.css';

export default function PostsList() {
	const posts = useLoaderData();

	function addPostHandler(postData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setPosts((existingPosts) => {
			return [postData, ...existingPosts];
		});
	}
	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post, idx) => (
						<Post
							key={idx}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length == 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There is no post yet</h2>
					<p>Come back soon.</p>
				</div>
			)}
		</>
	);
}
