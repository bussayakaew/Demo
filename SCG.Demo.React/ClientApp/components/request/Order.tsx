import * as React from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export class Order extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h4>Order</h4>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="row">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" data-toggle="collapse" href="#paymentDetail" />
                                    Payment Term
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="collapse multi-collapse" id="paymentDetail">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="row form-group">
                                            <div className="col-md-2 col-lg-2 text-right"><label>Order No.:</label></div>
                                            <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                            <div className="col-md-2 col-lg-2 text-right"><label>Status:</label></div>
                                            <div className="col-md-4 col-lg-4"><input className="form-control" name="status" type="text" value={this.state.status} /></div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-2 col-lg-2 text-right"><label>Payment:</label></div>
                                            <div className="col-md-4 col-lg-4"><input className="form-control" name="payment" type="text" value={this.state.payment} /></div>
                                            <div className="col-md-2 col-lg-2 text-right"><label>New Payment Term:</label></div>
                                            <div className="col-md-4 col-lg-4"><input className="form-control" name="newPayment" type="text" value={this.state.newPayment} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 text-left ">
                            <RadioGroup name="order" onChange={this.onChange} value={this.state.value}>
                                <Radio value={2}>Load Date</Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <a data-toggle="collapse" href="#loadDateDetail">
                                <span className="glyphicon glyphicon-menu-down"
                                    aria-expanded="false"
                                    aria-controls="loadDateDetail"> </span>  Load Date Detail</a>
                            <div className="collapse multi-collapse" id="loadDateDetail">
                                <br />
                                <div className="card card-body">
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Order No.:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>Status:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="status" type="text" value={this.state.status} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>item:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Load Date:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="payment" type="text" value={this.state.payment} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>New Load Date:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="newPayment" type="text" value={this.state.newPayment} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 text-left ">
                            <RadioGroup name="order" onChange={this.onChange} value={this.state.value}>
                                <Radio value={3}>Qty</Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <a data-toggle="collapse" href="#qtyDetail">
                                <span className="glyphicon glyphicon-menu-down"
                                    aria-expanded="false"
                                    aria-controls="qtyDetail"> </span>  QTY Detail</a>
                            <div className="collapse multi-collapse" id="qtyDetail">
                                <br />
                                <div className="card card-body">
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Order No.:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>Status:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="status" type="text" value={this.state.status} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>item:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Qty:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="payment" type="text" value={this.state.payment} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>New Qty:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="newPayment" type="text" value={this.state.newPayment} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 text-left ">
                            <RadioGroup name="order" onChange={this.onChange} value={this.state.value}>
                                <Radio value={4}>Deduct at Warehouse</Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <a data-toggle="collapse" href="#deductDetail">
                                <span className="glyphicon glyphicon-menu-down"
                                    aria-expanded="false"
                                    aria-controls="deductDetail"> </span>  Deduct Detail</a>
                            <div className="collapse multi-collapse" id="deductDetail">
                                <br />
                                <div className="card card-body">
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Order No.:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>Status:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="status" type="text" value={this.state.status} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>item:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Price:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="payment" type="text" value={this.state.payment} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>New Price:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="newPayment" type="text" value={this.state.newPayment} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 text-left ">
                            <RadioGroup name="order" onChange={this.onChange} value={this.state.value}>
                                <Radio value={5}>Cancel</Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <a data-toggle="collapse" href="#cancellationDetail">
                                <span className="glyphicon glyphicon-menu-down"
                                    aria-expanded="false"
                                    aria-controls="cancellationDetail"> </span>  Cancellation Detail</a>
                            <div className="collapse multi-collapse" id="cancellationDetail">
                                <br />
                                <div className="card card-body">
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Order No.:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>Status:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="status" type="text" value={this.state.status} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Item:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="payment" type="text" value={this.state.payment} /></div>
                                        <div className="col-md-2 col-lg-2 text-right"><label>Cc E-mail:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="newPayment" type="text" value={this.state.newPayment} /></div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-2 col-lg-2 text-right"><label>Reason:</label></div>
                                        <div className="col-md-4 col-lg-4"><input className="form-control" name="orderNo" type="text" value={this.state.orderNo} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 text-left ">
                            <RadioGroup name="order" onChange={this.onChange} value={this.state.value}>
                                <Radio value={6}>Other Change</Radio>
                            </RadioGroup>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                            <a data-toggle="collapse" href="#otherDetail">
                                <span className="glyphicon glyphicon-menu-down"
                                    aria-expanded="false"
                                    aria-controls="otherDetail"> </span>  Other Detail</a>
                            <div className="collapse multi-collapse" id="otherDetail">
                                <div className="card">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}