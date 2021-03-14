import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GetList from "./GetList";
import Home from "./Home";
import PostForm from "./PostForm";

const App = () => {
	return (
		<div>
			<h1>This is single page application.</h1>
			<BrowserRouter>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/getlist">Get List</Link>
					</li>
					<li>
						<Link to="/postform">Post Form</Link>
					</li>
				</ul>

				<Route path="/" exact component={Home} />
				<Route path="/getlist" component={GetList} />
				<Route path="/postform" component={PostForm} />
			</BrowserRouter>
		</div>
	);
};

export default App;
