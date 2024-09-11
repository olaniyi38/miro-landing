import { FC } from "react";
import { TFooterLinkGroup } from "./Footer";
import { GoArrowRight } from "react-icons/go";
import SplitText from "./SplitText";

type Props = {
	data: TFooterLinkGroup;
};

const FooterLinkGroup: FC<Props> = ({ data }) => {
	return (
		<div className="footer-link-group">
			<h3 className="footer-link-group__title">{data.title}</h3>
			<div className="footer-link-group__links">
				{data.links.map(({ label, href }) => (
					<a
						className="footer-link-group__link"
						key={label}
						href={href}>
						<SplitText data-anim="reveal" as="span">{label}</SplitText>
					</a>
				))}
			</div>
			{data.footer && (
				<a
					href={data.footer.href}
					className="footer-link-group__link footer-link-group__link--bottom">
					<span>{data.footer.label}</span>
					<GoArrowRight />
				</a>
			)}
		</div>
	);
};

export default FooterLinkGroup;
