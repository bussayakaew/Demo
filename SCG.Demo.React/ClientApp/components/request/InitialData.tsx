import * as React from 'react';
import { Test1 } from './Test1';
import { Select } from 'antd'; 
const Option = Select.Option;

export class InitialData extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            channel: '',
            changeType: '',
            customerCode: '',
            customerName: '',
            soldTo: ''
        }

        this.updateInput = this.updateInput.bind(this)

    }

    componentDidMount() {
        let data = Test1.GetData();
        console.log("data", data);
    }

    updateInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.handleInitialData(this.state);
    }
      
    public render() {
        return <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Initial Data</h4>
            </div>
            <div className="panel-body">
                <div className="row form-group">
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right ">
                        <label>Channel:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <input className="form-control" name="channel" type="text" value={this.state.channel} onChange={this.updateInput} />
                    </div>
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Change Type:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <Select defaultValue="changeOrder" onChange={this.updateInput}>
                            <Option value="changeOrder">Change Order</Option> 
                            <Option value="changeBid">Change Bid</Option>
                        </Select>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Customer Code:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <input className="form-control" name="customerCode" type="text" value={this.state.customerCode} />
                    </div>
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Customer Name:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <input className="form-control" name="customerName" type="text" value={this.state.customerName} />
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Sold To:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-10 col-lg-10">
                        <input className="form-control" name="soldTo" type="text" value={this.state.soldTo} />
                    </div>
                </div>
            </div>
        </div>
    }
}
