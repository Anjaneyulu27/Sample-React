import React from "react";
// import "./App.css";
import "antd/dist/antd.css";
import MainContainer from "./MainContainer";
import Login from "../../src/components/Login";
interface IState {
	isLoggedIn: boolean;
	qsValue: string
}

interface IProps{
	qsValue:string
}

class LoginForm extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isLoggedIn: false,
			qsValue: ''
		};
	}
	onLogin = (values:any) =>{
		alert(values)
		this.setState({ isLoggedIn: true , qsValue: values});
	}
	render() {
		const { isLoggedIn } = this.state;
		return (
			<div className="App">
				{isLoggedIn ? <MainContainer  qsValue={this.state.qsValue}/> : <Login onLogin={this.onLogin} />}
			</div>
		);
	}
}

export default LoginForm;