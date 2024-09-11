import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import img from "@/assets/images/section5-bg.webp";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "./SplitText";
import gsap from "gsap";

const Section5 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					scrollTrigger: {
						trigger: ".section5__container",
						start: "top 50%",
						
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.6,
					y: 50,
				})
				.from(".button", {
					opacity: 0,
					duration: 0.5,
					delay: 0.8,
				});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="section5">
			<div className="section5__container">
				<div className="section5__img">
					<img
						src={img}
						alt="girl reading"
					/>
				</div>
				<div className="section5__content">
					<h1 className="section5__title">
						<SplitText
							as="span"
							data-anim="reveal">
							The Ways
						</SplitText>
						<SplitText
							as="span"
							data-anim="reveal">
							We Work
						</SplitText>
					</h1>
					<SplitText
						as="p"
						data-anim="reveal">
						How has our relationship with work changed?
					</SplitText>
					<Button icon={<BsArrowRight />}>View the report</Button>
				</div>
			</div>
		</section>
	);
};

export default Section5;
