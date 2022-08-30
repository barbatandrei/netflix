import React, { useState, useEffect } from "react";

const Trailers = () => {
	const SlideShow = ({ imgs }) => {
		const [index, setIndex] = useState(0);

		useEffect(() => {
			setIndex(0);
		}, []);

		const next = () => {
			if (index === imgs.length - 1) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		};

		const prev = () => {
			if (index === 0) {
				setIndex(imgs.length - 1);
			} else {
				setIndex(index - 1);
			}
		};

		return (
			<div>
				<img src={imgs[index]} />
				<div className="flex justify-between">
					<button className="text-white" onClick={prev}>
						PREV
					</button>
					<button className="text-white" onClick={next}>
						NEXT
					</button>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="w-full h-full flex justify-center">
				<div className="my-20 w-[500px] h-[700px]">
					<SlideShow
						imgs={[
							`https://images.unsplash.com/photo-1661347334036-d484f970b1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
							`https://images.unsplash.com/photo-1661638563864-7ade2d3ec500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
						]}
					/>
				</div>
			</div>
		</>
	);
};

export default Trailers;
