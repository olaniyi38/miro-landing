import { createElement, HTMLAttributes, ReactNode } from "react";

type Props<T extends HTMLElement> = {
	children: ReactNode;
	type?: SplitType;
	as: keyof HTMLElementTagNameMap;
} & HTMLAttributes<T>;

type SplitType = "word" | "char";

function SplitText<T extends HTMLElement>({
	children,
	as,
	...props
}: Props<T>) {
	const split = () => {
		if (typeof children === "string") {
			const words = children.split(" ").map((w, i) => {
				return (
					<>
						<span
							key={w + i}
							className="word"
							style={{
								display: "inline-block",
								overflow: "hidden",
								lineHeight: 1.2,
							}}>
							{w.split("").map((c, i) => (
								<span
									style={{ display: "inline-block" }}
									key={i + c}
									className="char">
									{c}
								</span>
							))}
						</span>{" "}
					</>
				);
			});
			return words;
		}
	};

	return createElement(
		as,
		{ style: { overflow: "hidden" }, ...props },
		split()
	);
}

export default SplitText;
