import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import "../api/methods";

export default class App extends Component {
	constructor(props) {
	super(props);

	this.state = {
		title: "",
		content: "",
		links: "",
		err: ""
		}
	}

	callApi(query) {
		Meteor.call("getPage", {query: query }, (err, data) => {
			if (err) {
				this.setState = {
					title: "",
					content: "",
					links: "",
					err: err
				};
				console.log(err);
				return;
			}
			this.setState({
				title: res.title,
				content: res.text,
				links: res.links
			});
		});
	}

	searchWiki(query) {
		let search = document.getElementById("search").value;
		if (search.length > 0){
			this.callApi(search);
		}
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
			<h2>Links</h2>
			</div>
		);
	}
}