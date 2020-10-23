import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Divider, Tag, Input } from "antd";
import {columns, data} from "../constants"

interface IProps{
}

interface IState{
qsValue: string
}

class TableComponent extends React.Component <IProps, IState>{
constructor(props:any){
	super(props)
	this.state={
		qsValue:''
	}

}

handleSearch=(e:any)=>{
this.setState({
	qsValue:e.target.value
})
}

render(){
	return (
		<div className="App">
			<Input onChange={this.handleSearch} type= 'text'/>
			<Table
				columns={columns}
				expandedRowRender={record => (
					<p style={{ margin: 0 }}>{record.description}</p>
				)}
				dataSource={data}
				title={() => "TO DO: BIG5 TECH"}
				footer={() =>
					'A social "To Do" App for people wishing to join the Big5 Tech - Google, Facebook, Amazon, Microsoft and Apple'
				}
			/>
		</div>
	);
};
}

export default TableComponent;
