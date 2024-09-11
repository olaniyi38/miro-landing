import TabSwitcher, { Tab, TabList, TabPanel, TabPanels } from "./TabSwitcher";
import { tabs2 } from "@/data";
import { IoIosCheckmark } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import { useRef } from "react";
import FigmaSvg from "@/assets/svgs/figma.svg?react";
import SketchSvg from "@/assets/svgs/sketch.svg?react";
import { SiAdobexd, SiNotion } from "react-icons/si";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back,out",
					scrollTrigger: {
						trigger: ".section7__container",
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
			className="section7">
			<div className="section7__container">
				<SplitText
					as="h1"
					data-anim="reveal"
					className="section7__title">
					Built for all kinds of teams
				</SplitText>
				<TabSwitcher>
					<TabList>
						{tabs2.map((t, i) => (
							<Tab
								key={t.title}
								index={i}>
								{t.title}
							</Tab>
						))}
					</TabList>
					<TabPanels>
						{tabs2.map((t, i) => (
							<TabPanel
								index={i}
								key={t.title}>
								<div className="tab">
									<ul className="tab-content__list">
										{t.listItems.map((item) => (
											<li
												className="tab-content__list-item"
												key={item}>
												<IoIosCheckmark />
												<span>{item}</span>
											</li>
										))}
									</ul>
									<a
										href={t.href}
										className="tab-content__link">
										<span>Learn more</span>
										<BsArrowRight />
									</a>
									<div className="tab-content__tools">
										<h4>Work with your favourite tools</h4>
										<div>
											<SketchSvg />
											<SiAdobexd className="xd-svg" />
											<FigmaSvg />
											<SiNotion />
										</div>
									</div>
								</div>
								<div className="tab-content__img">
									<img
										src={t.image}
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

export default Section7;
