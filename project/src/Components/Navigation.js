import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navigation.css';
import {Switch,Route} from 'react-router-dom';
import logo from './images/logo.png';

class Navigation extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <a className="navbar-brand" href="#">Navbar</a>

				  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
				    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">Link</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Disabled</a>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
				      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				    </form>
				  </div>
				</nav>
			</div>
		);
	}
}

export default Navigation;