import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Landing from "./containers/Landing";
import MainContainer from "./containers/MainContainer";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginForm from "./containers/LoginContainer";
import { Routes } from "./Routes/routes";
interface IState {
	isLoggedIn: boolean;
	qsValue: string
}

interface IProps{
	qsValue:string
}

// const fakeAuth = {
// 	isAuthenticated: false,
// 	authenticate(cb:any) {
// 	  this.isAuthenticated = true
// 	  setTimeout(cb, 100)
// 	},
// 	signout(cb:any) {
// 	  this.isAuthenticated = false
// 	  setTimeout(cb, 100)
// 	}
//   }
  
//Create a Private route for the login

class App extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isLoggedIn: false,
			qsValue: ''
		};
	}
	onLogin = ( values:any) =>{
		this.setState({ isLoggedIn: true , qsValue: values.username});
	}
	render() {
		console.log(this.state.isLoggedIn, "test123")
		const { isLoggedIn } = this.state;
		return (
			<div>
			<div className="App">
				{isLoggedIn ? <MainContainer  qsValue={this.state.qsValue}/> : <Login onLogin={this.onLogin} />}
			</div>
			</div>
		);
	}
}

export default App;
