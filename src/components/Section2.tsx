import { FC, useRef } from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import SplitText from "./SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { features } from "@/data";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section2: FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "power4.inout",
					scrollTrigger: {
						trigger: ".section2__container",
						start: "top 50%",
					},
				})
				.from("h1[data-anim='reveal'] .char, h2[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 100,
				})
				.from(
					"p[data-anim='reveal'] .char",
					{
						duration: 0.8,
						y: 50,
					},
					"-=.4"
				);
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="section2">
			<div className="section2__container">
				<div className="section2__banner">Your idea starts here</div>
				<SplitText
					data-anim="reveal"
					as="h1"
					className="section2__title">
					Collaborate without constraints
				</SplitText>
				<div className="section2__features">
					{features.map((feature, index) => (
						<div
							key={index}
							className="section2__feature">
							<SplitText
								data-anim="reveal"
								as="h2"
								className="title">
								{feature.title}
							</SplitText>
							<SplitText
								data-anim="reveal"
								as="p"
								className="text">
								{feature.content}
							</SplitText>
						</div>
					))}
				</div>
				<Button icon={<BsArrowRight />}>Sign up free</Button>
			</div>
		</section>
	);
};

export default Section2;
