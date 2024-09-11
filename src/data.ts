import { TFooterLinkGroup } from "./components/Footer";
import img from "@/assets/images/section6-img.webp";
import img2 from "@/assets/images/tab-img2.webp";

export const footerLinks: TFooterLinkGroup[] = [
	{
		title: "Product",
		links: [
			{ label: "Online whiteboard", href: "#" },
			{ label: "Apps & Integrations", href: "#" },
			{ label: "Templates", href: "#" },
			{ label: "Miroverse", href: "#" },
			{ label: "Miro Developer Platform", href: "#" },
			{ label: "Miro for Devices", href: "#" },
			{ label: "Security & Compliance", href: "#" },
			{ label: "Accessibility", href: "#" },
			{ label: "Changelog", href: "#" },
		],

		footer: { label: "View demo", href: "#" },
	},
	{
		title: "Solutions",
		links: [
			{ label: "Meetings and Workshops", href: "#" },
			{ label: "Brainstorming & Ideation", href: "#" },
			{ label: "Agile Workflows", href: "#" },
			{ label: "Diagramming", href: "#" },
			{ label: "Research & Design", href: "#" },
			{ label: "Strategy & Planning", href: "#" },
			{ label: "Mind Map", href: "#" },
			{ label: "Concept Map", href: "#" },
			{ label: "Online Sticky Notes", href: "#" },
			{ label: "Flowchart", href: "#" },
			{ label: "Wireframing", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Miro Academy", href: "#" },
			{ label: "Help Center", href: "#" },
			{ label: "Blog", href: "#" },
			{ label: "Status", href: "#" },
			{ label: "Miro Community", href: "#" },
			{ label: "Miro Professional Network", href: "#" },
			{ label: "Miro Experts Directory", href: "#" },
			{ label: "Miro Events", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About us", href: "#" },
			{ label: "Careers 🚀", href: "#" }, // Assuming "Careers" link has a specific URL
			{ label: "Miro in the News", href: "#" },
			{ label: "Customer Stories", href: "#" },
		],
	},
	{
		title: "Plans and Pricing",
		links: [
			{ label: "Pricing", href: "#" },
			{ label: "Business", href: "#" },
			{ label: "Enterprise", href: "#" },
			{ label: "Consultants", href: "#" },
			{ label: "Education", href: "#" },
			{ label: "Startups", href: "#" },
			{ label: "NPOs", href: "#" },
		],
		footer: { label: "Contact sales", href: "#" },
	},
];

export const tabs1 = [
	{
		title: "brainstorming",
		about:
			"brainstorming Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "diagramming",
		about:
			" diagramming Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "Meetings & Workshops",
		about:
			"Meetings & Workshops Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "Scrum events",
		about:
			"Scrum events Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "mapping",
		about:
			"mapping Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "Research & Design",
		about:
			"Research & Design Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
	{
		title: "Strategic Planning",
		about:
			"Strategic Planning Unleash creative ideas and build on them with the help of sticky notes, images,img2ind maps, videos, drawing capabilities — the list goes on.",
		url: "#",
		img,
	},
];

export const tabs2 = [
	{
		title: "UX & Design",
		listItems: [
			"Build low-fi wireframes",
			"Involve stakeholders in the design process",
			"Run engaging design workshops",
			"Create user personas",
			"Conduct usability testing",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Marketing",
		listItems: [
			"Develop content strategy",
			"Implement SEO best practices",
			"Run social media campaigns",
			"Analyze marketing metrics",
			"Create email newsletters",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Product Management",
		listItems: [
			"Define product roadmap",
			"Prioritize feature backlog",
			"Conduct market research",
			"Collaborate with cross-functional teams",
			"Manage product lifecycle",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Engineering",
		listItems: [
			"Develop scalable architecture",
			"Implement CI/CD pipelines",
			"Conduct code reviews",
			"Optimize performance",
			"Ensure code quality and testing",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Consultants",
		listItems: [
			"Provide expert advice",
			"Analyze business processes",
			"Develop strategic plans",
			"Facilitate workshops",
			"Present findings and recommendations",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Agile Coaches",
		listItems: [
			"Implement Agile methodologies",
			"Facilitate Scrum ceremonies",
			"Coach teams on Agile principles",
			"Help remove impediments",
			"Foster continuous improvement",
		],
		image: img2,
		href: "#",
	},
	{
		title: "Sales",
		listItems: [
			"Identify and qualify leads",
			"Conduct product demonstrations",
			"Negotiate contracts",
			"Manage customer relationships",
			"Achieve sales targets",
		],
		image: img2,
		href: "#",
	},
];
export const dropdownMenuData = [
	{
		category: "Products",
		items: [
			{ title: "Product A", url: "/products/a" },
			{ title: "Product B", url: "/products/b" },
			{ title: "Product C", url: "/products/c" },
			{ title: "All Products", url: "/products" },
		],
	},
	{
		category: "Solutions",
		items: [
			{ title: "Enterprise Solutions", url: "/solutions/enterprise" },
			{ title: "Small Business Solutions", url: "/solutions/small-business" },
			{ title: "Custom Solutions", url: "/solutions/custom" },
			{ title: "Case Studies", url: "/solutions/case-studies" },
		],
	},
	{
		category: "Resources",
		items: [
			{ title: "Documentation", url: "/resources/docs" },
			{ title: "API Reference", url: "/resources/api" },
			{ title: "Tutorials", url: "/resources/tutorials" },
			{ title: "Blog", url: "/blog" },
			{ title: "Support", url: "/support" },
		],
	},
];

export const features = [
	{
		title: "Free forever",
		content: `
				Our free plan gives you unlimited team members, 3 boards, and 300+
				expert-made templates. Signing up with your work email lets you bring in
				your team faster. See our pricing plans for more
				features.
			`,
	},
	{
		title: "Easy integrations",
		content: `
				Miro has 100+ powerful integrations with tools you already use like G
				Suite, Slack, and Jira, so your workflow is seamless. View the full list
				in our Marketplace.
			`,
	},
	{
		title: "Security first",
		content: `
				We treat your data like you would — with the utmost care. We follow
				industry-leading security standards and give you tools to protect
				intellectual property. Learn more at our Trust Center.
			
		`,
	},
];
