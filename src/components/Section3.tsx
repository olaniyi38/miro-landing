import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import img from "@/assets/images/hybridwork.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section3: React.FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "power4.inout",
					scrollTrigger: {
						trigger: ".section3__container",
						start: "top 50%",
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 400,
				})
				.from(
					".section3__link span, svg ",
					{
						duration: 0.3,
						y: 20,
					},
					"-=.5"
				)
				.from(
					".section3__img",
					{
						duration: 0.8,
						opacity: 0,
						scale: 1.1,
					},
					"-=.3"
				);
		},
		{ scope: containerRef }
	);
	return (
		<section
			ref={containerRef}
			className="section3">
			<div className="section3__container">
				<div className="section3__content">
					<SplitText
						as="h1"
						data-anim="reveal"
						className="section3__title">
						Work together, wherever you work
					</SplitText>
					<SplitText
						as="p"
						data-anim="reveal"
						
						className="section3__text">
						In the office, remote, or a mix of the two, with Miro, your team can
						connect, collaborate, and co-create in one space no matter where you
						are.
					</SplitText>
					<a
						href="#"
						className="section3__link"
						style={{ overflow: "hidden" }}>
						<span>Learn more</span>
						<BsArrowRight />
					</a>
				</div>
				<div className="section3__img">
					<img
						src={img}
						alt="hybrid work"
					/>
				</div>
			</div>
		</section>
	);
};

export default Section3;
