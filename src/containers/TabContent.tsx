import React from "react";
import { Tabs, Button } from "antd";
import Cards from "../components/Cards";
import ModalAlert from "../components/ModalAlert";
import TableComponent from "../components/TableComponent";
const { TabPane } = Tabs;
interface ITab {
	title: string;
	component: any;
}

const tabList: ITab[] = [
	{
		title: "Buttons",
		component: <Cards/>
	},
	{
		title: "Modal",
		component: <ModalAlert/>
	},
	{
		title: "Table",
		component: <TableComponent/>
	},
	{
		title: "Buttons2",
		component: <Button>Test2</Button>
	}
];

const TabExample: React.FC = () => {
	function callback(key: string) {
		console.log(key);
	}

	return (
		<div>
			<Tabs defaultActiveKey="1" onChange={callback}>
				{tabList.map((i: ITab, index: Number) => (
					<TabPane tab={i.title} key={index + ""}>
						{i.component}
					</TabPane>
				))}
			</Tabs>
		</div>
	);
};
export default TabExample;
