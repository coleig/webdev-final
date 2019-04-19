import React, { Component } from "react";
import "../api/methods.js";

export default class App extends Component {
	constructor(props) {
	super(props);

	this.state = {
		title: "",
		content: "",
		links: [],
		history: [],
		err: ""
		};
	}

	makeaTheCall(query) {
		Meteor.call("getPage", query, (err, res) => {
			if (err) {
				this.setState = {
					err: err
				};
				console.log(err);
				return;
			}
			console.log("res: ", res.text);
			this.setState({
				title: res.title,
				content: res.text,
				links: res.links
			});
		});
	}

	searchWiki(query) {
		query.preventDefault();
		let search = document.getElementById("search").value;
		if (search.length > 0){
			this.makeaTheCall(search);
			this.setState({ history: [...this.state.history, search]});
		}
	}

	renderHistory() {
		return this.state.history.map((p, i) => (
			<button className="btn-dark" key={i} alt={p}>
				{p}
			</button>
		));
	}

	renderLinks(){
		return this.state.links.map((p, i) => (
			<button className="btn-dark" key={i} alt={p["*"]} onClick={p["*"]}>
				{p["*"]}
			</button>
		));
	}

	renderContent(){
		return (
			<span dangerouslySetInnerHTML={{__html: this.state.content["*"]}}></span>
			);
	}

	onClick() {
		// unfinished
	}

	render() {
		return (
			<div className="container">
			<h1>Wikipedia Search</h1>
			<form onSubmit={this.searchWiki.bind(this)}>
				<input
					id="search"
					className=""
					type="text"
					placeholder="Enter your search terms"
				/>
			</form>
			<h2>History</h2>
			<div className="container">{this.renderHistory()}</div>
			<h2>Links</h2>
			<div className="container">{this.renderLinks()}</div>
			<h2>Content</h2>
			<div className="container">{this.renderContent()}</div>
			</div>
		);
	}
}