import {Input} from 'antd'
import React from 'react';

interface IProps{
    qsValue:string
    oninputChange:any
}
class InputSearch extends React.Component<IProps>{
    constructor(props:IProps){
        super(props);
        this.state={
        qsValue:''
        }
    }
render(){
    return(
        <div className="input_search">
            <Input type="text" onChange={this.props.oninputChange} placeholder="Enter keywords"></Input>
        </div>
    )
}
}
export default InputSearch