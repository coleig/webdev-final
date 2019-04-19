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

	render() {
		return (
			<div className="container">
			<h1>Wikipedia Search</h1>
			</div>
			)
	}
}