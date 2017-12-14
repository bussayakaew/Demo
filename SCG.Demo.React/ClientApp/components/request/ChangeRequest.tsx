import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { RequesterInfo } from './../shared/RequesterInfo';
import { InitialData } from './InitialData';
import { Action } from './../shared/Action';
import { StepBar } from './../shared/StepBar';
import { Test } from './Test';
import { Test1 } from './Test1';
import { Order } from './Order';

export class ChangeRequest extends React.Component<any, any> {
    constructor(props) {
        super(props)
        this.state = {
            requesterInfo: "",
            initialData: ""
        }

        this.handleRequesterInfo = this.handleRequesterInfo.bind(this)
        this.handleInitialData = this.handleInitialData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleRequesterInfo(value) {
        this.setState({
            requesterInfo: value
        })
    }

    handleInitialData(value) {
        this.setState({
            initialData: value
        })
    }

    handleSubmit(event) {
        if(event) event.preventDefault();
        console.log('Your state is', this.state);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3><b>Change Request</b></h3>
                <div className="row form-group">
                    <div className="col-sm-12 col-sm-12 col-md-6 col-lg-6 text-left">
                        <h4><b>Status: </b></h4>
                    </div>
                    <div className="col-sm-12 col-sm-12 col-md-6 col-lg-6 text-right">
                        <h4><b>Request No: </b></h4>
                    </div>
                </div>
                <StepBar />
                <RequesterInfo />
                <InitialData />
                <Order />
                <Action />
                <Test1 />
            </form>
        )
    }
}
