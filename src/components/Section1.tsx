import { FC, useRef } from "react";
import { SiCisco, SiNzxt, SiOtto, SiVolvo, SiWalmart } from "react-icons/si";
import SplitText from "./SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Section1: FC = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "power4.inout",
					scrollTrigger: {
						trigger: ".section1__container",
						start: "top 50%",
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 100,
					autoAlpha: 0,
				})
				.from(
					".section1__logos",
					{
						duration: 0.8,
						opacity: 0,
						autoAlpha: 0,
					},
					"-=.4"
				);
		},
		{ scope: containerRef }
	);
	return (
		<section
			ref={containerRef}
			className="section1">
			<div className="section1__container">
				<SplitText
					as="h3"
					data-anim="reveal"
					className="section1__title">
					Trusted by 45M+ users
				</SplitText>
				<div className="section1__logos">
					<SiWalmart />
					<SiCisco />
					<SiVolvo />
					<SiNzxt />
					<SiOtto />
				</div>
			</div>
		</section>
	);
};

export default Section1;
