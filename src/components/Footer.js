import React from "react";

const Footer = () => {
	return (
		<>
			<div className=" text-[#737373] flex justify-center mb-20 ">
				<div className=" w-[35%]">
					<p className="mb-4 cursor-pointer">Questions? Call 0800-672-120</p>
					<div className="flex flex-row justify-between">
						<ul className="">
							<li className="mb-2 cursor-pointer hover:underline">FAQ</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Investor Relations
							</li>
							<li className="mb-2 cursor-pointer hover:underline">Privacy</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Speed Test
							</li>
						</ul>
						<ul className="">
							<li className="mb-2 cursor-pointer hover:underline">
								Help Center
							</li>
							<li className="mb-2 cursor-pointer hover:underline">Jobs</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Cookie Preferences
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Legal Guarantee
							</li>
						</ul>
						<ul className="">
							<li className="mb-2 cursor-pointer hover:underline">Account</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Ways to Watch
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Corporate Information
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Legal Notices
							</li>
						</ul>
						<ul className="">
							<li className="mb-2 cursor-pointer hover:underline">
								Media Center
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Terms of Use
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Contact Us
							</li>
							<li className="mb-2 cursor-pointer hover:underline">
								Only on Netflix
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
