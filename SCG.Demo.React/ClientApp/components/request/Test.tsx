import * as React from 'react';
import { Action } from './../shared/Action';

export class Test extends React.Component<any, any>{
    constructor(props) {
        super(props);

        this.state = {
            creator: '',
            createDate: ''
        }

        this.update = this.update.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    update(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        this.props.handleOnChange(this.state);
    };

    onSubmit(){

    }

    render() {
        return (
            <div>
                <div className="row form-group">
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Creator:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <input className="form-control" name="creator" type="text" value={this.state.creator} onChange={this.update} />
                    </div>
                    <div className="col-sm-4 col-sm-4 col-md-2 col-lg-2 text-right">
                        <label>Create Data:</label>
                    </div>
                    <div className="col-sm-8 col-sm-8 col-md-4 col-lg-4">
                        <input className="form-control" name="createDate" type="text" value={this.state.createDate} onChange={this.update}/>
                    </div>
                </div>
                
            </div>
        )
    }
}