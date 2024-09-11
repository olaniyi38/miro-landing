import TabSwitcher, { Tab, TabList, TabPanel, TabPanels } from "./TabSwitcher";
import { BsArrowRight } from "react-icons/bs";
import { tabs1 } from "@/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back.out",
					scrollTrigger: {
						trigger: ".section6__container",
						start: "top 50%",
					},
				})
				.from("[data-anim='reveal'] .char", {
					duration: 0.8,
					y: 200,
					stagger: 0.005,
				})
				.from(".tab-switch", {
					duration: 0.5,
					opacity: 0,
					y: 10,
				});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			className="section6">
			<div className="section6__container">
				<SplitText
					as="h1"
					data-anim="reveal"
					className="section6__title">
					Built for the way you work
				</SplitText>
				<TabSwitcher>
					<TabList>
						{tabs1.map((t, i) => (
							<Tab
								key={t.title}
								index={i}>
								{t.title}
							</Tab>
						))}
					</TabList>
					<TabPanels>
						{tabs1.map((t, i) => (
							<TabPanel
								index={i}
								key={t.title}>
								<div className="section6__tab-content">
									<h4>{t.title}</h4>
									<p>{t.about}</p>
									<a href={t.url}>
										<span>Learn More</span>
										<BsArrowRight />
									</a>
								</div>
								<div className="section6__tab-img">
									<img
										src={t.img}
										alt={`${t.title} image`}
									/>
								</div>
							</TabPanel>
						))}
					</TabPanels>
				</TabSwitcher>
			</div>
		</section>
	);
};

export default Section6;
