import axios from "axios";
import React from "react";

class GetList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { posts: [] };
	}

	componentDidMount() {
		axios
			.get("http://jsonplaceholder.typicode.com/posts")
			.then((res) => this.setState({ posts: res.data }))
			.catch((Error) => console.log(Error));
	}

	//* this function checks if the posts has been filled then only returns the renderlist
	lists = () => {
		if (this.state.posts !== null) {
			return this.state.posts.map((post) => {
				return <p key={post.id}>{post.title}</p>;
			});
		} else return null;
	};

	render() {
		return (
			<div>
				<h1>Lists of Posts</h1>
				{this.lists()}
			</div>
		);
	}
}

export default GetList;
