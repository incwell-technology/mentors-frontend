import React from "react";
import tabHandler from "../../static/template";

const AuthButtons = () => {
	return (
		<div className="tab">
			<button
				className="tablinks"
				onClick={e => tabHandler(e, "Login")}
				id="defaultOpen"
			>
				<b>Login</b>
			</button>
			<button className="tablinks" onClick={e => tabHandler(e, "Signup")}>
				<b>Signup</b>
			</button>
		</div>
	);
};

export default AuthButtons;
