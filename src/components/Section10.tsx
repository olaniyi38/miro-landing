import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section10 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back,out",
					scrollTrigger: {
						trigger: ".section10__container",
						start: "top 50%",
						
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 100,
					stagger: 0.005,
				})
				.from(
					".section10 .button",
					{
						duration: 0.8,
						opacity: 0,
					},
					"-=0.4"
				);
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="section10">
			<div className="section10__container">
				<SplitText
					as="h1"
					data-anim="reveal"
					className="section10__title">
					Join 45M+ users today
				</SplitText>
				<SplitText
					as="p"
					data-anim="reveal"
					className="section10__description">
					Start for free — upgrade anytime.
				</SplitText>
				<a
					href=""
					className="section10__link ">
					<SplitText
						data-anim="reveal"
						as="span">
						Joining as an organization? Contact Sales
					</SplitText>
				</a>
				<Button icon={<BsArrowRight />}>Sign up free</Button>
			</div>
		</section>
	);
};

export default Section10;
