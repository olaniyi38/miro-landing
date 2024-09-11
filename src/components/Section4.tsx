import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import img from "@/assets/images/integration.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section4: React.FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "power4.inout",
					scrollTrigger: {
						trigger: ".section4__container",
						start: "top 50%",
						
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 1,
					y: 200,
				})
				.from(
					".section4__link span, svg",
					{
						duration: 0.3,
						y: 20,
					},
					"-=.2"
				)
				.from(
					".section4__img",
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
			className="section4">
			<div className="section4__container">
				<div className="section4__img">
					<img
						src={img}
						alt="hybrid work"
					/>
				</div>
				<div className="section4__content">
					<h1 className="section4__title">
						<SplitText
							data-anim="reveal"
							as="span">
							Connect
						</SplitText>
						<SplitText
							data-anim="reveal"
							as="span">
							your tools,
						</SplitText>
						<SplitText
							data-anim="reveal"
							as="span">
							close your tabs
						</SplitText>
					</h1>
					<SplitText
						data-anim="reveal"
						as="p"
						className="section4__text">
						Whether you want to edit your Google Docs, resolve Jira issues, or
						collaborate over Zoom, Miro has 100+ integrations with tools you
						already use and love.
					</SplitText>
					<a
						href="#"
						className="section4__link">
						<span>Learn more</span>
						<BsArrowRight />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Section4;
