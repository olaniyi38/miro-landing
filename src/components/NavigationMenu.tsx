import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { LuChevronDown } from "react-icons/lu";

type ContextProps = {
	itemIndexActive: null | number;
	setItemIndexActive: React.Dispatch<React.SetStateAction<number | null>>;
	toggleMenu: (index: number) => () => void;
	mobileNavActive: boolean;
};

export const NavigationMenuContext = createContext<ContextProps | null>(null);

type NavigationMenuProps = {
	children: ReactNode;
	mobileNavActive: boolean;
};

const NavigationMenu = ({ children, mobileNavActive }: NavigationMenuProps) => {
	const [itemIndexActive, setItemIndexActive] = useState<null | number>(null);

	const toggleMenu = (index: number) => {
		return () =>
			setItemIndexActive((prevIndex) => (prevIndex === index ? null : index));
	};

	useEffect(() => {
		if (mobileNavActive) {
			setItemIndexActive(null);
		}
	}, [mobileNavActive]);

	return (
		<NavigationMenuContext.Provider
			value={{
				itemIndexActive,
				setItemIndexActive,
				toggleMenu,
				mobileNavActive,
			}}>
			<div className="nav-dropdown">{children}</div>
		</NavigationMenuContext.Provider>
	);
};

type NavigationMenuItemProps = {
	children: ReactNode;
};

export const NavigationMenuItem = ({ children }: NavigationMenuItemProps) => {
	//all that concerns this one is just handling mosue events
	const context = useContext(NavigationMenuContext);
	if (context === null) {
		throw new Error(
			"NavigaitonMenuItem must be used withing a NavigationMenu component"
		);
	}

	return <div className={`nav-dropdown__item`}>{children}</div>;
};

type NavigationMenuTriggerProps = {
	children: ReactNode;
	index: number;
};

export const NavigationMenuTrigger = ({
	children,
	index,
}: NavigationMenuTriggerProps) => {
	const context = useContext(NavigationMenuContext);
	if (context === null) {
		throw new Error(
			"NavigaitonMenuItem must be used withing a NavigationMenu component"
		);
	}

	const { toggleMenu, itemIndexActive } = context;
	const isActive = index === itemIndexActive;

	if (context === null) {
		throw new Error(
			"NavigaitonMenuItem must be used withing a NavigationMenu component"
		);
	}

	return (
		<button
			onClick={toggleMenu(index)}
			className={`nav-dropdown__trigger ${
				isActive ? "nav-dropdown__trigger--active" : ""
			}`}>
			<span>{children}</span>
			<LuChevronDown />
		</button>
	);
};

type NavigationMenuCotentProps = {
	children: ReactNode;
	index: number;
};

export const NavigationMenuContent = ({
	children,
	index,
}: NavigationMenuCotentProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const context = useContext(NavigationMenuContext);
	if (context === null) {
		throw new Error(
			"NavigaitonMenuContent must be used withing a NavigationMenu component"
		);
	}
	const { itemIndexActive } = context;

	return (
		<div
			ref={containerRef}
			className={`nav-dropdown__content ${
				itemIndexActive === index ? "nav-dropdown__content--active" : ""
			}`}>
			<div className="nav-dropdown__content-container">{children}</div>
		</div>
	);
};

export default NavigationMenu;
