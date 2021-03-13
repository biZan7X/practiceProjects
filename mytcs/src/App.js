import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { username: null, age: null, tech: "java" };
	}

	onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({ [name]: value });
	};

	//* instead of the onSubmit handler we could have used onClickHandler as well
	onSubmitHandler = (e) => {
		e.preventDefault();

		if (this.state.username === null || this.state.username === "")
			alert("please enter the username");
		else if (this.state.age === null || this.state.age === "")
			alert("please enter the age");
		else if (isNaN(this.state.age)) alert("please enter a valid age");
		else alert(this.state.username + this.state.age + this.state.tech);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandler} style={{ margin: "1rem" }}>
					<div style={{ margin: "1rem" }}>
						<label htmlFor="username">username : </label>
						<br />
						<input
							value={this.state.username}
							onChange={(e) => this.onChangeHandler(e)}
							type="text"
							name="username"
						/>
					</div>

					<div style={{ margin: "1rem" }}>
						<label htmlFor="age">age : </label>
						<br />
						<input
							value={this.state.age}
							onChange={(e) => this.onChangeHandler(e)}
							type="text"
							name="age"
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

export default App;
