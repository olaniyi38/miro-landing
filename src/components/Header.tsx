import { FC, useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Logo from "../assets/images/logo.webp";
import NavigationMenu, {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from "./NavigationMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { dropdownMenuData } from "@/data";

const Header: FC = () => {
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const containerRef = useRef<HTMLElement | null>(null);

	const toggleMobileNav = () => {
		setMobileNavActive(!mobileNavActive);
	};

	return (
		<header
			ref={containerRef}
			className="header">
			<div className="header__container">
				<div className="header__logo">
					<img src={Logo} alt="" />
				</div>
				<nav
					className={`header__nav ${
						mobileNavActive ? "header__nav--mobile-active" : ""
					}`}>
					<div
						className={`header__nav-content  ${
							mobileNavActive ? "header__nav-content--mobile-active" : ""
						}`}>
						<NavigationMenu mobileNavActive={mobileNavActive}>
							{dropdownMenuData.map(({ category, items }, i) => (
								<NavigationMenuItem key={category}>
									<NavigationMenuTrigger index={i}>
										{category}
									</NavigationMenuTrigger>
									<NavigationMenuContent index={i}>
										{items.map(({ title, url }) => (
											<a
												key={title}
												href={url}>
												<span>{title}</span>
												<BsArrowRight />
											</a>
										))}
									</NavigationMenuContent>
								</NavigationMenuItem>
							))}
						</NavigationMenu>
						<a href="">Enterprise</a>
						<a href="">Pricing</a>
					</div>
					<div className="header__actions">
						<div className="lang">
							<CiGlobe />
							<span>EN</span>
						</div>
						<span>Contact</span>
						<span>Login</span>
						<Button icon={<BsArrowRight />}>Sign up free</Button>
					</div>
				</nav>
				<button
					onClick={() => toggleMobileNav()}
					className="toggle">
					<RxHamburgerMenu />
				</button>
			</div>
		</header>
	);
};
export default Header;
