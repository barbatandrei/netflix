import React from "react";

const Subscribe = () => {
	return (
		<>
			<p className="text-white flex justify-center mt-12 text-xl">
				Ready to watch? Enter your email to create or restart your membership.
			</p>
			<form>
				<div className="flex justify-center my-8">
					<input
						type="email"
						placeholder="Email address"
						className="w-[500px] pl-4 py-4 focus:outline-none"
					/>
					<button className="bg-[#f40612] text-white py-4 px-5 ">
						<span className="text-3xl">Get Started ></span>
					</button>
				</div>
			</form>
			<div className="border-b-8 border-[#222] mb-20 mt-20" />
		</>
	);
};

export default Subscribe;
