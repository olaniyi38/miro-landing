import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Testimonials from "./Testimonials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section9 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back,out",
					scrollTrigger: {
						trigger: ".section9__container",
						start: "top 50%",    
						 
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 200,
					stagger: 0.008,
				})
				.from(
					".section9__testimonials .testimonial",
					{
						duration: 0.8,
						y: 100,
						stagger: 0.1,
						opacity: 0,
					},
					"-=0.7"
				)
				.from(".section9 .button", {
					opacity: 0,
					duration: 0.4,
				});
		},
		{ scope: containerRef }
	);
	return (
		<section
			ref={containerRef}
			className="section9">
			<div className="section9__container">
				<div className="section9__header">
					<SplitText
						as="h1"
						data-anim="reveal"
						className="section9__title">
						Loved by the world's best teams
					</SplitText>
					<Button
						inverted
						icon={<BsArrowRight />}>
						See all customers stories
					</Button>
				</div>
				<div className="section9__testimonials">
					<Testimonials />
				</div>
			</div>
		</section>
	);
};

export default Section9;
