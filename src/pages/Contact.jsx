import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<>
			<h1 className="text-white text-5xl text-center mt-40 mb-20">
				Contact Customer Service
			</h1>
			<div className=" flex justify-center  ">
				<div className="flex justify-center w-[800px]">
					<form className="w-1/2">
						<label className="text-white" for="firstName">
							First Name
						</label>
						<input
							className="block w-full rounded border-[1px] border-grey-600 p-3 box-border my-3 focus:outline-none"
							type="text"
							placeholder="Your name.."
						/>
						<label className="text-white" for="lastName">
							Last Name
						</label>
						<input
							className="block w-full rounded border-[1px] border-grey-600 p-3 box-border my-3 focus:outline-none"
							type="text"
							placeholder="Your last name.."
						/>
						<label className="text-white" for="country">
							Country
						</label>
						<select
							id="country"
							name="country"
							className="block w-full rounded border-[1px] border-grey-600 p-3 box-border my-3 focus:outline-none"
						>
							<option value="australia">Australia</option>
							<option value="canada">Canada</option>
							<option value="usa">USA</option>
							<option value="mexico">Mexico</option>
							<option value="Romania">Romania</option>
							<option value="Germany">Germany</option>
						</select>
						<label className="text-white block" for="subject">
							Subject
						</label>
						<textarea
							className="w-full rounded border-[1px] border-grey-600 p-3 box-border my-3 h-[100px] focus:outline-none"
							id="subject"
							name="subject"
							placeholder="Write something.."
						></textarea>
						<input
							className="text-white bg-red-600 cursor-pointer py-3 px-8 rounded hover:bg-red-700"
							type="submit"
							value="Submit"
						></input>
					</form>
				</div>
			</div>
			<div className="my-20 border-t-8 border-[#222]" />
			<Footer />
		</>
	);
};

export default Contact;
