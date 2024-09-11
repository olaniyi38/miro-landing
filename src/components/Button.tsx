import { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
	children: ReactNode;
	icon?: ReactElement<IconType>;
	inverted?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, icon, inverted, ...props }) => {
	return (
		<button
			{...props}
			className={`button ${inverted ? "button--inverted" : ""}`}>
			<span>{children}</span>
			{icon && icon}
		</button>
	);
};

export default Button;
