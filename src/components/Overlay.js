import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Overlay(props) {
	console.log(props);

	return (
		<div
			className={
				props.toggleData ? "navigationOverlay active" : "navigationOverlay"
			}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<div className="navigationItems">
				<div
					className={
						props.toggleData
							? "navigationContainer active"
							: "navigationContainer"
					}
				>
					<div className="navigationLink">
						<Link to="/" className="active" datanumber="1">
							home
						</Link>
					</div>
					<div className="navigationLink">
						<Link to="/about" datanumber="2">
							about
						</Link>
					</div>
					<div className="navigationLink">
						<Link to="/work" datanumber="3">
							work
						</Link>
					</div>
					<div className="navigationLink">
						<Link to="/portfolio" datanumber="4">
							portfolio
						</Link>
					</div>
					<div className="navigationLink">
						<Link to="/contact" datanumber="5">
							contact
						</Link>
					</div>
				</div>
			</div>
			<div
				className={
					props.toggleData ? "navigationSocial active" : "navigationSocial"
				}
			>
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
			</div>
			<div
				className={
					props.toggleData ? "copyrightWrapper active" : "copyrightWrapper"
				}
			>
				<p className="copyright">2024 | thatDevTerry</p>
			</div>
		</div>
	);
}

export default Overlay;
