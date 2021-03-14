import axios from "axios";
import React from "react";

class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { userId: "", title: "", body: "", tech: "java" };
	}

	onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({ [name]: value });
	};

	//* instead of the onSubmit handler we could have even used onClickHandler as well
	onSubmitHandler = (e) => {
		e.preventDefault();

		if (this.state.userId === null || this.state.userId === "")
			alert("please enter the userId");
		else if (this.state.title === null || this.state.title === "")
			alert("please enter the title");
		else if (this.state.body === null || this.state.body === "")
			alert("please enter the body");
		else {
			console.log(this.state.userId + this.state.title + this.state.body);

			axios
				.post("http://jsonplaceholder.typicode.com/posts", {
					userId: this.state.userId,
					title: this.state.title,
					body: this.state.body,
				})
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandler} style={{ margin: "1rem" }}>
					<div style={{ margin: "1rem" }}>
						<label htmlFor="userId">userId : </label>
						<br />
						<input
							value={this.state.userId}
							onChange={(e) => this.onChangeHandler(e)}
							type="text"
							name="userId"
						/>
					</div>

					<div style={{ margin: "1rem" }}>
						<label htmlFor="title">title : </label>
						<br />
						<input
							value={this.state.title}
							onChange={(e) => this.onChangeHandler(e)}
							type="text"
							name="title"
						/>
					</div>

					<div style={{ margin: "1rem" }}>
						<label htmlFor="body">body : </label>
						<br />
						<input
							value={this.state.body}
							onChange={(e) => this.onChangeHandler(e)}
							type="text"
							name="body"
						/>
					</div>

					<div style={{ margin: "1rem" }}>
						<label htmlFor="tech">technology : </label>
						<br />
						<select
							onChange={(e) => this.onChangeHandler(e)}
							value={this.state.tech}
							name="tech"
						>
							<option value="java">java</option>
							<option value="python">python</option>
							<option value="c++">c++</option>
						</select>
					</div>

					<button style={{ margin: "1rem" }}>Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
