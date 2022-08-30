import React from "react";

const Section = (props) => {
	const reverse = props.reverse;
	const title = props.title;
	const text = props.text;
	const imgURL = props.imgURL;
	const videoURL = props.videoURL;
	const videoCss = props.videoCss;

	return (
		<>
			<div className="bg-transparent  relative">
				<div className="flex justify-center items-center border-b-8 border-[#222] ">
					<div
						className={`flex flex-col lg:flex-row items-center lg:justify-between m-0 max-w-[1100px] my-12 ${
							reverse === true && "flex-row-reverse"
						}`}
					>
						<div className="lg:flex-initial h-full pr-3 w-[90%] text-center lg:w-[52%] z-[3]">
							<h1 className="text-white text-5xl font-black mb-3">{title}</h1>
							<h2 className="text-white text-2xl my-5">{text}</h2>
						</div>
						<div className="box-border flex lg:flex-initial justify-center h-full w-[80%] lg:w-[48%]">
							<div className="overflow-hidden relative">
								<div className={videoCss}>
									<video
										className="inline-block align-baseline w-full h-full object-contain"
										src={videoURL}
										autoPlay
										loop
										muted
									></video>
								</div>
								<img className="w-full h-auto z-100" src={imgURL} alt="movie" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
