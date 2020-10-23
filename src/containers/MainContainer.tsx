import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu, Icon } from "antd";
import TabContent from "./TabContent";
import HeaderLayout from "./Header";
// import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

interface IProps{
	qsValue:string
}

interface IState{
	qsValue:string
	collapsed:boolean
}

class MainContainer extends React.Component <IProps, IState> {
	state = {
		collapsed: false,
		qsValue:''
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		return (
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					style={{
						height: "100vh",

						left: 0
					}}
				>
					<div className="logo" style={{ padding: "10%" }}>
						{/* <img src={logo} className="App-logo" alt="logo" style={{
                            margin: 'auto',
                            height: '100%',
                        }} /> */}
					</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>nav 1</span>
						</Menu.Item>
						<Menu.Item key="2">
						<Icon type="android" />
							<span>nav 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="upload" />
							<span>nav 3</span>
						</Menu.Item>

						<Menu.Item key="4">
							<Icon type="bar-chart" />
							<span className="nav-text">nav 4</span>
						</Menu.Item>
						<Menu.Item key="5">
							<Icon type="cloud-o" />
							<span className="nav-text">nav 5</span>
						</Menu.Item>
						<Menu.Item key="6">
							<Icon type="appstore-o" />
							<span className="nav-text">nav 6</span>
						</Menu.Item>
						<Menu.Item key="7">
							<Icon type="team" />
							<span className="nav-text">nav 7</span>
						</Menu.Item>
						<Menu.Item key="8">
							<Icon type="shop" />
							<span className="nav-text">nav 8</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
				<HeaderLayout  qsValue={this.props.qsValue} />
						{/* <Icon
							className="trigger"
							type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
							onClick={this.toggle}
						/>
					 */}
					<Content
						style={{
							margin: "24px 16px",
							padding: 24,
							background: "#fff",
							minHeight: 280
						}}
					>
						<TabContent />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default MainContainer;
