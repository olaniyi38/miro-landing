import { FC } from "react";

export type TTestimonial = {
	company: string;
	quote: string;
	author: {
		name: string;
		position: string;
		src: string;
	};
};

type Props = {
	data: TTestimonial;
};

const Testimonial: FC<Props> = ({ data }) => {
	return (
		<div className="testimonial">
			<h3 className="testimonial__company">{data.company}</h3>
			<p className="testimonial__quote">"{data.quote}"</p>
			<div className="testimonial__author">
				<div className="testimonial__author-image">
					<img
						src={data.author.src}
						alt={data.author.name}
					/>
				</div>
				<div className="testimonial__author-info">
					<p className="testimonial__author-name">{data.author.name}</p>
					<p className="testimonial__author-position">
						{data.author.position} at {data.company}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
