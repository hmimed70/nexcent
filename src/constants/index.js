import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import dribble from "../assets/images/dribble.svg";
import image18 from '../assets/images/blog-1.png';
import image19 from '../assets/images/blog-2.png';
import image20 from '../assets/images/blog-3.png';

import member from '../assets/images/mem.png'
import club from '../assets/images/clubs.png'
import event from '../assets/images/event.png'
import payment from '../assets/images/pay.png'


export  const navItems = [
    { link: "Home", path: "home"},
    { link: "About", path: "about"},
    { link: "Service", path: "service"},
    { link: "Product", path: "product"},
    { link: "Testimonial", path: "testimonial"},
    { link: "FAQ", path: "faq"},
    { link: "Terms", path: "terms"},
   ]
export const stats = [
    {
        id: "members",
        icon: member,
        value: "2,245,431",
        title: "Members",
    },
    {
        id: "clubs",
        icon: club,
        value: "46,328",
        title: "Clubs",
    },
    {
        id: "events",
        icon: event,
        value: "828,867",
        title: "Event Bookings",
    },
    {
        id: "payments",
        icon: payment,
        value: "1,926,436",
        title: "Payments",
    },
];

export const footerLinks = [
	{
		id: "company",
		title: "Company",
		links: [
			{
				id: "about",
				title: "About Us",
				link: "#",
			},
			{
				id: "blog",
				title: "Blog",
				link: "#",
			},
			{
				id: "contact",
				title: "Contact Us",
				link: "#",
			},
			{
				id: "pricing",
				title: "Pricing",
				link: "#",
			},
			{
				id: "testimonial",
				title: "Testimonial",
				link: "#",
			},
		],
	},
	{
		id: "support",
		title: "Support",
		links: [
			{
				id: "help-center",
				title: "Help Center",
				link: "#",
			},
			{
				id: "terms-of-service",
				title: "Terms of Service",
				link: "#",
			},
			{
				id: "legal",
				title: "Legal",
				link: "#",
			},
			{
				id: "privacy-policy",
				title: "Privacy Policy",
				link: "#",
			},
			{
				id: "status",
				title: "Status",
				link: "#",
			},
		],
	},
];
export const socials = [
	{
		id: "instagram",
		icon: instagram,
		link: "https://www.instagram.com/",
	},
	{
		id: "dribble",
		icon: dribble,
		link: "https://dribbble.com/",
	},
	{
		id: "twitter",
		icon: twitter,
		link: "https://twitter.com/",
	},
	{
		id: "youtube",
		icon: youtube,
		link: "https://www.youtube.com/",
	},
];

export      const blogs = [
    {
        id: "blog1",
        thumbnail: image18,
        title: "Creating Streamlined Safeguarding Processes with OneRen",
        action: "Read More",
    },
    {
        id: "blog2",
        thumbnail: image19,
        title:
            "What are your safeguarding responsibilities and how can you manage them?",
        action: "Read More",
    },
    {
        id: "blog3",
        thumbnail: image20,
        title: "Revamping the Membership Model with Triathlon Australia",
        action: "Read More",
    },
];