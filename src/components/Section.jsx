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
			<div className="bg-transparent  relative block ">
				<div className="flex justify-center items-center border-b-8 border-[#222] ">
					<div
						className={`flex items-center justify-between m-0 max-w-[1100px] my-12 ${
							reverse === true && "flex-row-reverse"
						}`}
					>
						<div className="flex-initial h-full pr-3 w-[52%] z-[3]">
							<h1 className="text-white text-5xl font-black mb-3 block">
								{title}
							</h1>
							<h2 className="text-white text-2xl medium my-5 block">{text}</h2>
						</div>
						<div className="box-border flex flex-initial h-full w-[48%]">
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
