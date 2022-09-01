import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex whitespace-nowrap justify-between sm:justify-around p-4 z-[100] w-full absolute top-0 left-0">
			<Link to="/">
				<h1 className="text-red-600 font-bold text-4xl sm:text-5xl cursor-pointer">
					NETFLIX
				</h1>
			</Link>
			<div>
				<Link to="/contact">
					<button className="text-white pr-4">Contact Us</button>
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
