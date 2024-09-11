import { FC } from "react";
import Testimonial, { TTestimonial } from "./Testimonial";

const data: TTestimonial[] = [
	{
		company: "VMware",
		quote:
			"When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
		author: {
			name: "Roxanne Mustafa",
			position: "Design Team Lead",
			src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	},
	{
		company: "DocuSign",
		quote:
			"Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
		author: {
			name: "Jane Ashley",
			position: "Head of Design",
			src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	},
	{
		company: "Frog",
		quote:
			"As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that's at the core of what we do and will continue to extend into the future.",
		author: {
			name: "Laura Baird",
			position: "Associate Design Director",
			src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	},
];

const Testimonials: FC = () => {
	return (
		<div className="testimonials">
			{data.map((t) => (
				<Testimonial
					key={t.company}
					data={t}
				/>
			))}
		</div>
	);
};

export default Testimonials;
