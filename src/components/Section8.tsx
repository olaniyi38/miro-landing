import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const stats = [
	{
		title: "iso",
		about: "ISO-27001 enterprise-grade security compliant",
	},
	{
		title: "#1",
		about: "Visual Collaboration Platform on G2",
	},
	{
		title: "99%",
		about: "of the Fortune 100 are customers",
	},
	{
		title: "1000+",
		about: "community- and expert-built templates",
	},
	{
		title: "45m+",
		about: "users around the world",
	},
	{
		title: "100+",
		about: "integrations with technology partners",
	},
];

const Section8 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back,out",
					scrollTrigger: {
						trigger: ".section8__container",
						start: "top 50%",
						
					},
				})
				.from("[data-anim='reveal'] .char", {
				
					duration: 0.8,
					y: 200,
					stagger: 0.008,
				})
				.from(
					"[data-anim='reveal2'] .word",
					{
						duration: 0.8,
						y: 100,
						stagger: 0.005,
					},
					"-=0.7"
				);
		},
		{ scope: containerRef }
	);
	return (
		<section
			ref={containerRef}
			className="section8 max-w-none">
			<div className="section8__container">
				<header className="section8__header">
					<SplitText
						data-anim="reveal"
						as="h1"
						className="section8__title">
						Why companies large and small trust Miro
					</SplitText>
					<a href="#">
						<SplitText
							as="span"
							data-anim="reveal">
							Contact Sales to request a demo
						</SplitText>
					</a>
				</header>
				<div className="section8__stats">
					{stats.map((s) => (
						<div
							key={s.title}
							className="section8__stat">
							<SplitText
								data-anim="reveal2"
								as="h1">
								{s.title}
							</SplitText>
							<SplitText
								data-anim="reveal2"
								as="p">
								{s.about}
							</SplitText>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Section8;
