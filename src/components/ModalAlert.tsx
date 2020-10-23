import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Alert } from "antd";
import { Modal, Button } from "antd";

class ModalAlert extends React.Component {
	state = { visible: false, alertYesState: false, alertNoState: false };

	showModal = () => {
		this.setState({
			visible: true,
			alertYesState: false,
			alertNoState: false
		});
	};

	handleOk = () => {
		this.setState({
			visible: false,
			alertYesState: true,
			alertNoState: false
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
			alertYesState: false,
			alertNoState: true
		});
	};

	render() {
		return (
			<div>
				<Button type="primary" onClick={this.showModal}>
					Open Modal
				</Button>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Name: Sindhu BC</p>
					<p>Company: ITC Infotech India</p>
					<p>Place:Bangalore.</p>
				</Modal>
				{this.state.alertYesState ? (
					<Alert message="Success" type="success" />
				) : (
					<></>
				)}

				{this.state.alertNoState ? (
					<Alert message="Cancel" type="info" />
				) : (
					<></>
				)}
			</div>
		);
	}
}
export default ModalAlert;
//ReactDOM.render(<App />, mountNode);
