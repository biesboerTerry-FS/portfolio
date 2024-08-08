import React, { useState } from "react";
import Overlay from "./Overlay";

import logo from "../images/logo_initials-no-background.png";

export default function Navigation() {
	// These hooks are for toggle menu, overlay, social icons and menu.
	const [isToggled, setIsToggled] = useState(false);
	const handleClick = () => setIsToggled(!isToggled);

	return (
		<>
			<div className="navWrapper">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div
					className={isToggled ? "menu active" : "menu"}
					onClick={handleClick}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="headerWrapper">
					<div className="scrollDown">Scroll down</div>
				</div>
			</div>
			<Overlay toggleData={isToggled} />
		</>
	);
}
