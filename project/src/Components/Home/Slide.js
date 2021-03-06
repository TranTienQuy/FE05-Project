import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from "jquery";
import '../../styles/Slide.css';
import dslr_tuto from '../../images/dslr-tutorials.png';
import home_banner from '../../images/home_banner_camera.jpg';
import header_banner from '../../images/header-banner.jpg';

class Slide extends Component {
	render() {
		return(
			<div id="container-fluid">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ul>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={home_banner}/>
						</div>
						<div className="carousel-item">
							<img src={dslr_tuto}/>
						</div>
						<div className="carousel-item">
							<img src={header_banner}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slide;