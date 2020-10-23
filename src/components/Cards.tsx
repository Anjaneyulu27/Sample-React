import React from "react";

import "antd/dist/antd.css";

import { Card, Col, Row } from "antd";
interface IName {
	name: string;
	age: Number;
	place: string;
}

const nameList: IName[] = [];
var times: Number = 10;
for (var i = 0; i < times; i++) {
	nameList.push({
		name: `Name${i + 1}`,
		age: i + 1,
		place: `Place_${i + 1}`
	});
}
export class Cards extends React.Component {
	render() {
		return (
			<div
				style={{
					background: "#ECECEC",
					padding: "30px",
					marginRight: "-300px",
					height: "700px"
				}}
			>
				<Row gutter={16}>
					{nameList.map((i: any) => (
						<Col span={4}>
							<Card title={`Name : ${i.name}`} bordered={false}>
								<p>{`Age : ${i.age}`}</p>

								<p>{`Place : ${i.place}`}</p>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}

export default Cards;
