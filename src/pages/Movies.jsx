import React from "react";
import Main from "../components/Main";
import requests from "../Requests";
import Row from "../components/Row";
import Footer from "../components/Footer";

const Movies = () => {
	return (
		<>
			<Main />
			<Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
			<Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
			<Row rowID="3" title="Popular" fetchURL={requests.requestPopular} />
			<Row
				rowID="4"
				title="Now Playing"
				fetchURL={requests.requestNowPlaying}
			/>
			<div className="my-20 border-t-8 border-[#222]" />
			<Footer />
		</>
	);
};

export default Movies;
