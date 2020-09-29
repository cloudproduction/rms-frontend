import React, { Component } from 'react';
import axios from 'axios';
class ClientAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            client_name: "",
            address: "",
            contact_info: "",
            email_address: "",
            phone: "",
            status: true,
            post_status: ''
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
            client_name: e.target.value
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

    addClientData = (e) => {
        alert('hi')
        e.preventDefault()
        const obj = {
            name: this.state.client_name,
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
            axios.post('/api/clients/', obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)

                })
                .catch((error) => {
                    console.error(error)
                })
        }

    }

    render() {
       
        return (
            <div>

                <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Edit Client
                </h5>
                                <button type="button" className="close"
                                    data-dismiss="modal" aria-label="Close"
                                onClick= {this.props.onHide}>
                                    <span aria-hidden="true">
                                        ×
                  </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.addClientData}>
                                    <div className="form-row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1"> Client Name</label>
                                                <input type="text" className="form-control"
                                                    id="client_name" aria-describedby="emailHelp"
                                                    onChange={this.onChangeClientName}
                                                    value={this.state.client_name} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1"> Address</label>
                                                <input type="text" className="form-control"
                                                    id="address" aria-describedby="emailHelp"
                                                    onChange={this.onChangeAddress}
                                                    value={this.state.address} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Contact Info</label>
                                                <input type="text" className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    onChange={this.onChangeContact}
                                                    value={this.state.contact_info} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Emial address</label>
                                                <input type="email" className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    onChange={this.onChangeEmail}
                                                    value={this.state.email_address} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Phone no </label>
                                                <input type="text" className="form-control"
                                                    id="phone" aria-describedby="emailHelp"
                                                    onChange={this.onChangePhone}
                                                    value={this.state.phone} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlSelect1">Status</label>
                                                <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChangeStatus}>
                                                    <option >Select Status</option>
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
                                <button type="button" className="btn btn-info btn-base">
                                    Save changes
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