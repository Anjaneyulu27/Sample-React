import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Input, Row, Button } from "antd";
import { Routes } from "../Routes/routes";
import { Link, Router } from "react-router-dom";
import history from '../Routes/history'
import LoginForm from "./LoginContainer";
// import TableSearch from './TableSearch'
// import columns  from "../components/TableComponent";
// import Item from "antd/lib/list/Item";

const { Header, Content, Footer } = Layout;

interface IState {
  qsValue: string;
}

interface IProps {
  Value: string;
}

class HeaderLayout extends React.Component<IState, IProps> {
  constructor(props: any) {
    super(props);
    // this.state={
    //  Value:''
    // }
  }
  
  // handleLogout(e:any){
  //  history.push("/Login")
  // }

  // handleChange(e:any){
  //   let currentList:any = [];
  //   let newList:any = [];
  //   if (e.target.value !== ""){
  //     currentList= columns;
  //     newList = currentList.filter((item:any)=> {
  //       const cl = item.toLowercase();
  //       const filter = item.target.toLowercase();
  //       return cl.includes(filter)
  //   });
  // }
  //   else{
  //     newList = columns
  //   }
  // }
  //   onQsEnter=()=>{
  // let qsString = []
  // let tabledata: string
  // const value: string = this.state.qsValue.toLocaleLowerCase().replace(/\s/g, '')
  // if (value.length==! 0){
  //   qsString = columns.filter(items=>{
  //     tabledata= items.value.toLocaleLowerCase().replace(/\s/g, '')
  //   })

  //   })
  // }

  //   oninputChange=(e:any)=>{
  //     this.setState({
  //         qsValue:e.target.value
  //     }),
  //     ()=>{
  // if (this.state.qsValue===''){
  // this.onQsEnter();
  // }
  //       }

  render() {
    // var HeaderText = {
    //   color: 'white',
    //   fontSize: 20,
    //   position: 'relative',
    //   top: -65,
    //   right: -85
    // };
    // var cssStyles = {
    //   position: "relative", top: -127, left: 354
    // }
    return (
      <Header>
        <div style={{ color: "Red", fontSize: 20 }}>Welcome</div>
        <Row
          style={{
            color: "white",
            fontSize: 20,
            position: "relative",
            top: -64,
            right: -111
          }}
        >
          {this.props.qsValue}
        </Row>
        <div className="logo" />
        <p className="testcss" style={{position: "relative", top: -127, left: 354}}>
          <Router history={history}>
          <Link to= '/Login'>{LoginForm}
          Logout
       </Link>
       </Router>
        </p>
        </Header>
      //   {/* <Menu
      //   theme="dark"
      //   mode="horizontal" 
      //   defaultSelectedKeys={["2"]}
      //   style={{ lineHeight: "50px" }}
      // >
      //   <Menu.Item key="1">Tab1</Menu.Item>
      //   <Menu.Item key="2">Tab2</Menu.Item>
      //   <Menu.Item key="3">Tab3</Menu.Item>
      // </Menu> */}
      //   {/* <TableSearch oninputChange='' qsValue={this.state.Value}/> */}
      //   {/* <div>
      //   <Routes/></div> */}
    );
  }
}

export default HeaderLayout;
