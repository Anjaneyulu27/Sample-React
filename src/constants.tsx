import React from 'react'
import { Tag } from 'antd';

export const columns = [
	{ title: "Name", dataIndex: "name", key: "name" },
	{ title: "Task Completed", dataIndex: "status", key: "status" },
	{ title: "Days Completed / Days Planned", dataIndex: "days", key: "days" },
	{ title: "Interested Companies", dataIndex: "companies", key: "companies" },
	{
		title: "Companies Interviewed",
		dataIndex: "interviewed",
		key: "interviewed"
	},
	{
		title: "Job Tags",
		key: "tags",
		dataIndex: "tags",
		render: (tags: {
			map: (arg0: (tag: any) => JSX.Element) => React.ReactNode;
		}) => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? "geekblue" : "green";
					if (tag === "loser") {
						color = "volcano";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: "Linkedin",
		dataIndex: "",
		key: "x",
		render: () => <a href="javascript:;">vyshnavkr123</a>
	}
];

export const data = [
	{
		key: 1,
		name: "Test4",
		status: "32%",
		days: "90 / 365",
		companies: "Google, Amazon, Linkedin",
		interviewed: "Amazon",
		tags: ["SDE - BACKEnd"],
		description:
			"DSA, Design Patterns, JVM Memory Mgmt, Microservices, published 50+ apps online myself, Certified in AWS and OCJP"
	},
	{
		key: 2,
		name: "Test4",
		status: "84%",
		days: "150 / 165",
		companies: "Facebook, Microsoft",
		interviewed: "Amazon",
		tags: ["SDE - frontend"],
		description: "Pytorch and Neural Network, IIT Bombay"
	},
	{
		key: 3,
		name: "Test5",
		status: "65%",
		days: "20 / 120",
		companies: "Apple",
		interviewed: "Amazon, Google",
		tags: ["SDE - fullstack"],
		description: "ReactJs, Redux, MS CS UK"
	},
	{
		key: 4,
		name: "Test6",
		status: "57%",
		days: "45 / 65",
		companies: "Quora, Linkedin",
		interviewed: "Quora",
		tags: ["Machine Learning Engineer"],
		description: "MS in Statistics, published 100+ apps online myself"
	},
	{
		key: 5,
		name: "Test8",
		status: "84%",
		days: "150 / 165",
		companies: "Uber, Microsoft, Swiggy",
		interviewed: "DirectI",
		tags: ["Site Reliability Engineer"],
		description: "Ansible, Docker, Kubernetes"
	},
	{
		key: 6,
		name: "Test9",
		status: "65%",
		days: "20 / 120",
		companies: "AWS",
		interviewed: "Flipkart, Paypal",
		tags: ["Cloud Specialist"],
		description: "AWS, Azure, Firebase"
	},
	{
		key: 7,
		name: "Test10",
		status: "65%",
		days: "27 / 120",
		companies: "Microsoft, Tesla",
		interviewed: "Flipkart, Paypal",
		tags: ["SRE"],
		description: "AWS, Azure, Firebase"
	}
];