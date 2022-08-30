import React from "react";
import Section from "../components/Section";
import firstVideo from "../assets/video.m4v";
import secondVideo from "../assets/video2.m4v";
import Questions from "../components/Questions";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			<div className="relative border-b-8 border-[#222]">
				<div className="w-full h-1/2 absolute bottom-0 left-0 top-0 right-0 m-auto z-20 ">
					<h1 className="text-white text-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black ">
						Unlimited movies, TV <br></br> shows, and more.
					</h1>
					<h3 className="text-white text-center mt-5 text-md sm:text-2xl lg:text-3xl">
						Watch anywhere. Cancel anytime.
					</h3>
					<Subscribe />
				</div>
				<div className="absolute w-full h-[800px] bg-gradient-to-b from-black bg-black bg-opacity-[35%]"></div>
				<img
					className="w-full object-cover bg-cover h-[800px]"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/02b6f19c-08c7-4dea-af0a-2206b4b1650a/RO-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt=""
				/>
			</div>
			<Section
				title={"Enjoy on your TV."}
				text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
				imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
				videoURL={firstVideo}
				videoCss="h-full left-[50%] max-h-[54%] max-w-[73%] absolute top-[46%] translate-y-[-50%] translate-x-[-50%] w-full z-[-1] mt-[1%] mr-[-5%] mb-[-5%] ml-0"
			/>
			<Section
				reverse={true}
				title={"Download your shows to watch offline."}
				text={"Save your favorites easily and always have something to watch."}
				imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
				videoCss="h-full left-[50%] max-h-[54%] max-w-[73%] absolute top-[46%] translate-y-[-50%] translate-x-[-50%] w-full z-[-1] mt-[1%] mr-[-5%] mb-[-5%] ml-0"
			/>
			<Section
				title={"Watch everywhere."}
				text={
					"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
				}
				imgURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
				videoURL={secondVideo}
				videoCss="h-full left-[50%] max-h-[47%] max-w-[63%] absolute top-[34%] translate-y-[-50%] translate-x-[-50%] w-full z-[-1] mt-[1%] mr-[-5%] mb-[-35%] ml-0"
			/>
			<Section
				title="Create profiles for kids."
				text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
				imgURL="https://occ-0-3027-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
				videoCss="h-full left-[50%] max-h-[47%] max-w-[63%] absolute top-[34%] translate-y-[-50%] translate-x-[-50%] w-full z-[-1] mt-[1%] mr-[-5%] mb-[-35%] ml-0"
			/>
			<Questions />
			<Subscribe />
			<div className="border-b-8 border-[#222] mb-20 mt-20" />
			<Footer />
		</>
	);
};

export default Home;
