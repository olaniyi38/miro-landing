import { FC, useRef } from "react";
import Button from "./Button";
import img from "@/assets/images/hero-img.webp";
import img2 from "@/assets/images/hero-img2.webp";
import { BsArrowRight } from "react-icons/bs";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "./SplitText";

gsap.registerPlugin(useGSAP);

const Hero: FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			window.onload = () => {
				console.log("loaded");
				tlRef.current = gsap
					.timeline( )
					.from( "[data-anim='reveal'] .word", {
						delay:.5,
						duration: 1,
						y: 200,
						autoAlpha: 0,
					})
					.from(
						".hero__img",
						{
							duration: 1,
							opacity: 0,
							scale: 1.2,
							autoAlpha: 0,
						},
						"-=.6"
					)
					.from(
						".hero__cta",
						{
							duration: 0.8,
							opacity: 0,
							autoAlpha: 0,
						},
						"-=.3"
					)
					.from(
						".hero__reviews",
						{
							duration: 0.4,
							opacity: 0,
							autoAlpha: 0,
						},
						"+=.2"
					);
			};
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<SplitText
						as="h1"
						data-anim="reveal"
						className="hero__title">
						Take ideas from better to best
					</SplitText>
					<SplitText
						as="p"
						data-anim="reveal"
						className="hero__text">
						Miro is your team's visual platform to connect, collaborate, and
						create — together.
					</SplitText>
					<div
						className="hero__cta"
						data-anim="true">
						<input
							type="text"
							placeholder="Enter your work email"
						/>
						<Button icon={<BsArrowRight />}>Sign up free</Button>
						<p>Collaborate with your team within minutes</p>
					</div>
					<div
						data-anim="true"
						className="hero__reviews">
						<img
							src={img2}
							alt=""
						/>
					</div>
				</div>
				<div
					data-anim="true"
					className="hero__img">
					<img
						src={img}
						alt="workflow diagram"
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
