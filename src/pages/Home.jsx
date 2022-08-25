import React from "react";
import Main from "../components/Main";
import Section from "../components/Section";
import firstVideo from "../assets/video.m4v";
import secondVideo from "../assets/video2.m4v";
import Questions from "../components/Questions";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Main />
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
			<Footer />
		</>
	);
};

export default Home;
