import React, { useState } from "react";

const Questions = () => {
	const [expandItem, setExpandItem] = useState(-1);
	const handleExpand = (selectedItem) => {
		if (selectedItem === expandItem) {
			setExpandItem(-1);
		} else {
			setExpandItem(selectedItem);
		}
	};

	return (
		<div className="flex flex-col w-full">
			<h1 className="text-white text-5xl font-black flex justify-center mt-10">
				Frequently Asked Questions
			</h1>
			<div className=" flex justify-center">
				<ul className=" mt-12 w-[800px]  text-2xl text-white">
					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(0)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">What is Netflix?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 0 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>

						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 0 ? "h-[260px]" : "h-0"
							}`}
							style={{
								transition: "height 400ms linear",
							}}
						>
							<div className="p-8">
								Netflix is a streaming service that offers a wide variety of
								award-winning TV shows, movies, anime, documentaries, and more
								on thousands of internet-connected devices. You can watch as
								much as you want, whenever you want without a single commercial
								– all for one low monthly price. There's always something new to
								discover and new TV shows and movies are added every week!
							</div>
						</div>
					</li>

					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(1)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">How much does Netflix cost?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 1 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>
						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 1 ? "h-[160px]" : "h-0"
							}`}
							style={{
								transition: "height 300ms linear",
							}}
						>
							<div className="p-8">
								Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
								streaming device, all for one fixed monthly fee. Plans range
								from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
							</div>
						</div>
					</li>

					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(2)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">Where can I watch?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 2 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>
						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 2 ? "h-[320px]" : "h-0"
							}`}
							style={{
								transition: "height 400ms linear",
							}}
						>
							<div className="p-8">
								Watch anywhere, anytime. Sign in with your Netflix account to
								watch instantly on the web at netflix.com from your personal
								computer or on any internet-connected device that offers the
								Netflix app, including smart TVs, smartphones, tablets,
								streaming media players and game consoles. You can also download
								your favorite shows with the iOS, Android, or Windows 10 app.
								Use downloads to watch while you're on the go and without an
								internet connection. Take Netflix with you anywhere.
							</div>
						</div>
					</li>

					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(3)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">How do I cancel?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 3 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>
						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 3 ? "h-[160px]" : "h-0"
							}`}
							style={{
								transition: "height 300ms linear",
							}}
						>
							<div className="p-8">
								Netflix is flexible. There are no pesky contracts and no
								commitments. You can easily cancel your account online in two
								clicks. There are no cancellation fees – start or stop your
								account anytime.
							</div>
						</div>
					</li>

					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(4)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">What can I watch on Netflix?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 4 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>
						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 4 ? "h-[160px]" : "h-0"
							}`}
							style={{
								transition: "height 300ms linear",
							}}
						>
							<div className="p-8">
								Netflix has an extensive library of feature films,
								documentaries, TV shows, anime, award-winning Netflix originals,
								and more. Watch as much as you want, anytime you want.
							</div>
						</div>
					</li>

					<li className=" mt-2 ">
						<button
							onClick={() => handleExpand(5)}
							className="flex flex-row justify-between w-full bg-[#303030]"
						>
							<div className="pl-6  py-5">Is Netflix good for kids?</div>
							<div
								className={`pr-4 text-6xl rotate-${
									expandItem === 5 ? "45" : "0"
								} transition-all duration-300 ease-linear`}
							>
								+
							</div>
						</button>
						<div
							className={`bg-[#303030] border-t-2 border-black overflow-hidden ${
								expandItem === 5 ? "h-[230px]" : "h-0"
							}`}
							style={{
								transition: "height 380ms linear",
							}}
						>
							<div className="p-8">
								The Netflix Kids experience is included in your membership to
								give parents control while kids enjoy family-friendly TV shows
								and movies in their own space. Kids profiles come with
								PIN-protected parental controls that let you restrict the
								maturity rating of content kids can watch and block specific
								titles you don’t want kids to see.
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Questions;
