import React, { Component } from 'react';
// import axios from 'axios';
import axiosInstance from '../../intercept';
import ValidationError from '../ValidationError'
import InvalidFeedBack from '../partials/ErrorStyle'

class ClientAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            contact_info: "",
            email_address: "",
            phone: "",
            status: true,
            error_message: {

            },
        };
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);

    }

    onChangeClientName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeContact(e) {
        console.log(e.target.value);
        this.setState({
            contact_info: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email_address: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeStatus(e) {
        console.log(e.target.value);
        if (e.target.value === 'Active') {
            this.setState({
                status: true
            });
        } else {
            this.setState({
                status: false
            });
        }

    }

    addClientData = async (e) => {
        alert('hi')
        e.preventDefault()
        const obj = {
            name: this.state.name,
            address: this.state.address,
            contact_info: this.state.contact_info,
            email: this.state.email_address,
            phone_no: this.state.phone,
            status: this.state.status

        };

        console.log('data test', obj);
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {
            console.log('105 line');
            await axiosInstance.post('/clients/', obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        name: "",
                        address: "",
                        contact_info: "",
                        email_address: "",
                        phone: ""
                    })

                })
                .catch((error) => {
                    console.error('15', error)
                    // console.log('116',error.response.data.name[0]);
                    this.setState({
                        error_message: error.response.data
                    })

                    // Object.keys(this.state.error_message).map(index => 
                    //     // console.log(typeof this.props.error_message[index])

                    //         Object.keys(this.state.error_message[index]).map((i) =>
                    //             // <li className="alert alert-danger" key={i}>{this.state.error_message[index][i]}</li>
                    //             this.setState(state => {
                    //                 state.validation[this.state.error_message[index][i]] 
                    //         })
                    //             )
                    //     )

                })
        } else {
            alert('Invalid token')
        }


    }


    render() {
        // (this.state.error_message.hasOwnProperty('name') && "is-invalid")
        let className = ''
        if (this.state.error_message.hasOwnProperty('name')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('address')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('contact_info')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('email')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('phone_no')) {
            className += "is-invalid"
        }
       
           
        return (
            <div>

                <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add Client
                </h5>
                                <button type="button" className="close"
                                    data-dismiss="modal" aria-label="Close"
                                    onClick={this.props.onHide}>
                                    <span aria-hidden="true">
                                        ×
                  </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form >

                              
                                    <div className="form-row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1"> Client Name</label>
                                                <input type="text" className={"form-control "+className}
                                                    id="name" aria-describedby="emailHelp"
                                                    onChange={this.onChangeClientName}
                                                    value={this.state.name} />
                                                {this.state.error_message.hasOwnProperty('name') && <InvalidFeedBack message={this.state.error_message.name[0]} />}


                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1"> Address</label>
                                                <input type="text" className={"form-control " +className}
                                                    id="address" aria-describedby="emailHelp"
                                                    onChange={this.onChangeAddress}
                                                    value={this.state.address} />

                                                {this.state.error_message.hasOwnProperty('address') && <InvalidFeedBack message={this.state.error_message.address[0]} />}


                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Contact Info</label>
                                                <input type="text" className={"form-control "+className}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    onChange={this.onChangeContact}
                                                    value={this.state.contact_info} />
                                              {this.state.error_message.hasOwnProperty('contact_info') && <InvalidFeedBack message={this.state.error_message.contact_info[0]} />}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Emial address</label>
                                                <input type="email" className={"form-control "+className}
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    onChange={this.onChangeEmail}
                                                    value={this.state.email_address} />
                                 {this.state.error_message.hasOwnProperty('email') && <InvalidFeedBack message={this.state.error_message.email[0]} />}

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Phone no </label>
                                                <input type="text" className={"form-control "+className}
                                                    id="phone" aria-describedby="emailHelp"
                                                    onChange={this.onChangePhone}
                                                    value={this.state.phone} />
           {this.state.error_message.hasOwnProperty('phone_no') && <InvalidFeedBack message={this.state.error_message.phone_no[0]} />}

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlSelect1">Status</label>
                                                <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChangeStatus}>
                                                    <option value ="">Select Status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Deactive">Deactive</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                </button>
                                <button type="button" className="btn btn-info btn-base" onClick={this.addClientData}
                                >
                                    Submit
                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default ClientAddEdit;

