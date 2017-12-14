import * as React from 'react';
import { Table } from 'antd';
export class Test1 extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleClickSubmit = this.handleClickSubmit.bind(this)
    }

    handleClickSubmit() {

    }
    render() {
        return (
          <div>
           <Table></Table>
          </div>
        )
      }

    public static GetData(){
        return "test call method";
    }

    public static SetData(){

    }
}