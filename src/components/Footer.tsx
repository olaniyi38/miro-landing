import { footerLinks } from "@/data";
import FooterLinkGroup from "./FooterLinkGroup";
import { FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import AppleSvg from "@/assets/svgs/apple.svg?react";
import PlaystoreSvg from "@/assets/svgs/playstore.svg?react";
import MiroSvg from "@/assets/svgs/miro.svg?react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type TFooterLink = {
	label: string;
	href: string; // Use null for links without a specific URL
};

export type TFooterLinkGroup = {
	title: string;
	links: TFooterLink[];
	footer?: TFooterLink;
};

const Footer = () => {
	const containerRef = useRef<HTMLElement | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			tlRef.current = gsap
				.timeline({
					ease: "back,out",
					scrollTrigger: {
						trigger: ".footer__container",
						start: "top 50%",
						
					},
				})
				.from("[data-anim='reveal'] .char", {
					
					duration: 0.8,
					y: 100,
				})
				.from(".footer-link-group__link--bottom", {
					opacity: 0,
					duration: 0.5,
				})
				.from(".footer__bottom > div", {
					duration: 0.4,
					opacity: 0,
				});
		},
		{ scope: containerRef }
	);
	return (
		<footer
			ref={containerRef}
			className="footer">
			<div className="footer__container">
				<div className="footer__links">
					{footerLinks.map((fl) => (
						<FooterLinkGroup
							key={fl.title}
							data={fl}
						/>
					))}
				</div>
				<div className="footer__bottom">
					<div>
						<a href="#">
							<FaTwitter />
						</a>
						<a href="#">
							<FaLinkedin />
						</a>
						<a href="">
							<FaInstagram />
						</a>
						<a href="">
							<FaFacebook />
						</a>
						<a href="">
							<FaYoutube />
						</a>
						<a href="">
							<span>
								<FaGlobe />
							</span>
							<span>EN</span>
						</a>
						<a href="">@ 2022 Miro</a>
						<a href="">Terms of Service</a>
						<a href="">Privacy Policy</a>
						<a href="">Manage Cookies</a>
					</div>
					<div>
						<button className="button-store">
							<AppleSvg />
							<div>
								<span>Download on the</span>
								<span>App Store</span>
							</div>
						</button>
						<button className="button-store">
							<PlaystoreSvg />
							<div>
								<span>Get it on</span>
								<span>Google Play</span>
							</div>
						</button>
						<MiroSvg className="miro-svg" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
