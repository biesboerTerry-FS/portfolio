import React from "react";
import Terry from "../images/terry.jpeg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Homepage() {
	return (
		<section className="contentArea">
			<div className="bioContainer">
				<div className="avatar">
					<img className="image" src={Terry} alt=""></img>
				</div>
				<div className="bio">
					<h1>thatDevTerry</h1>
					<p>
						Hi, I'm Terry Biesboer, an aspiring Full-Stack Developer based in
						St. Louis, Missouri.
					</p>
					<nav className="social">
						<Link to="https://www.facebook.com/">
							<FaFacebook className="socialLink" />
						</Link>
						<Link to="https://www.instagram.com/">
							<FaInstagram className="socialLink" />
						</Link>
						<Link to="https://dribbble.com/">
							<FaDribbble className="socialLink" />
						</Link>
						<Link to="https://x.com/">
							<FaTwitter className="socialLink" />
						</Link>
						<Link to="https://github.com/">
							<FaGithub className="socialLink" />
						</Link>
					</nav>
				</div>
			</div>
		</section>
	);
}
