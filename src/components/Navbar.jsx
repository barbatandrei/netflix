import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between p-4 z-[100] w-full absolute">
			<Link to="/">
				<h1 className="text-red-600 font-bold text-4xl cursor-pointer">
					NETFLIX
				</h1>
			</Link>
			<div>
				<Link to="/series">
					<button className="text-white pr-4">Series</button>
				</Link>
				<Link to="/movies">
					<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
						Movies
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
