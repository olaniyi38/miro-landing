import {
	useState,
	useContext,
	ReactNode,
	FC,
	createContext,
	Children,
} from "react";

interface TabContextType {
	activeTabIndex: number;
	setActiveTabIndex: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabSwitcherProps {
	children: ReactNode;
	defaultActiveIndex?: number;
}

export const TabSwitcher: FC<TabSwitcherProps> = ({
	children,
	defaultActiveIndex = 0,
}) => {
	const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveIndex);

	return (
		<TabContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>
			<div className="tab-switch">{children}</div>
		</TabContext.Provider>
	);
};

interface TabListProps {
	children: ReactNode;
}

export const TabList: FC<TabListProps> = ({ children }) => {
	return <div className="tab-switch__nav">{children}</div>;
};

interface TabProps {
	index: number;
	children: ReactNode;
}

export const Tab = ({ index, children }: TabProps) => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error("Tab must be used within a TabSwitcher");
	}
	const { activeTabIndex, setActiveTabIndex } = context;
	const isActive = activeTabIndex === index;

	return (
		<button
			onClick={() => setActiveTabIndex(index)}
			className={`tab-switch__nav-item ${
				isActive ? "tab-switch__nav-item--active" : ""
			}`}>
			{children}
		</button>
	);
};

interface TabPanelsProps {
	children: ReactNode;
}

export const TabPanels: FC<TabPanelsProps> = ({ children }) => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error("TabPanels must be used within a TabSwitcher");
	}

	return <div className="tab-switch__panels">{children}</div>;
};

interface TabPanelProps {
	children: ReactNode;
	index: number;
}

export const TabPanel: FC<TabPanelProps> = ({ children, index }) => {
	const context = useContext(TabContext);
	if (!context) {
		throw new Error("TabPanels must be used within a TabSwitcher");
	}
	const { activeTabIndex } = context;
	const isActive = activeTabIndex === index;
	return (
		<div className={`tab-switch__panel ${isActive ? "tab-switch__panel--active" : ""}`}>
			{children}
		</div>
	);
};

// Usage example:

export default TabSwitcher;
