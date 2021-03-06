import React, { Component } from 'react';
// import axios from 'axios';
import axiosInstance from '../../intercept';
import ValidationError from '../ValidationError'
import InvalidFeedBack from '../partials/ErrorStyle'
import ModalHeader from '../partials/ModalHeader';
import BootstrapModal from '../partials/BootstrapModal';

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
            msg_success: "",
            modalTitle:(this.props.addFlag=== true? 'Add Client' : 'Edit Client')
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

        e.preventDefault()
        const obj = {
            name: this.state.name,
            address: this.state.address,
            contact_info: this.state.contact_info,
            email: this.state.email_address,
            phone_no: this.state.phone,
            status: this.state.status 

        };

        // console.log('data test', obj);
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            await axiosInstance.post('/clients/', obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
                    if (res.status === 201) {
                        // console.log('data add success');
                        this.setState({
                            name: "",
                            address: "",
                            contact_info: "",
                            email_address: "",
                            phone: "",
                            msg_success: "Data Added Successfully"
                        })
                    }


                })
                .catch((error) => {
                    // console.error('15', error)
                    // console.log('116',error.response.data.name[0]);

                    this.setState({
                        error_message: error.response.data
                    })

                })
        } else {
            alert('Invalid token')
        }
    this.props.loadUsers()

    }



    // edit function area start 
    componentDidMount() {
        console.log('153 line for test');
         if (this.props.editFlag === true) {
            this.editLoaderData()
            console.log('testing');
        } else {
            console.log('no edit data call');
        }
    }


    editLoaderData = async() => {

        const token = JSON.parse(window.localStorage.getItem('token'))

        if (token) {

           await axiosInstance.get(`/clients/${this.props.editId}`, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)

                    // console.log('data add success');
                    this.setState({
                        name: res.data.name,
                        address: res.data.address,
                        contact_info: res.data.contact_info,
                        email_address: res.data.email,
                        phone:res.data.phone_no,
                        status:res.data.status
                    })



                })
                .catch((error) => {

                    this.setState({
                        error_message: error.response.data
                    })

                })
        } else {
            alert('Invalid token')
        }
    }

    updateClientData = async (e) => {

        e.preventDefault()
        const obj = {
            name: this.state.name,
            address: this.state.address,
            contact_info: this.state.contact_info,
            email: this.state.email_address,
            phone_no: this.state.phone,
            status:this.state.status

        };

        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            await axiosInstance.put(`/clients/${this.props.editId}/`, obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
                    if (res.status === 200) {
                        console.log('data add success');
                        this.setState({
                            msg_success: "Data Updated Successfully",
                            error_message: ""
                        })
                    }


                })
                .catch((error) => {
                    // console.error('15', error)
                    // console.log('116',error.response.data.name[0]);

                    this.setState({
                        error_message: error.response.data
                    })

                })
        } else {
            alert('Invalid token')
        }
        this.props.loadUsers()

    }


    CloseModal = () => {
        alert('fire')
        this.setState({
            openModal:false
        })
        document.getElementById('back_drop').style.cssText = 'display:none'
        
    }

    handleCloseModal = () => {
        this.props.CloseModal()
    }

    render() {
        
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

                <BootstrapModal openModal={this.props.openModal} modalHandler={this.props.modalHandler}  modalTitle={this.state.modalTitle}>
                    <form>
                        {
                            this.state.msg_success &&
                            <p className="alert alert-success">{this.state.msg_success}</p>
                        }

                        <div className="form-row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"> Client Name</label>
                                    <input type="text" className={"form-control " + className}
                                        id="name" aria-describedby="emailHelp"
                                        onChange={this.onChangeClientName}
                                        value={this.state.name} autoComplete="off"/>
                                    {this.state.error_message.hasOwnProperty('name') && <InvalidFeedBack message={this.state.error_message.name[0]} />}


                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"> Address</label>
                                    <input type="text" className={"form-control " + className}
                                        id="address" aria-describedby="emailHelp"
                                        onChange={this.onChangeAddress}
                                        value={this.state.address} autoComplete="off"/>

                                    {this.state.error_message.hasOwnProperty('address') && <InvalidFeedBack message={this.state.error_message.address[0]} />}


                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Contact Info</label>
                                    <input type="text" className={"form-control " + className}
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
                                    <input type="email" className={"form-control " + className}
                                        id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={this.onChangeEmail}
                                        value={this.state.email_address} autoComplete="off" />
                                    {this.state.error_message.hasOwnProperty('email') && <InvalidFeedBack message={this.state.error_message.email[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone no </label>
                                    <input type="text" className={"form-control " + className}
                                        id="phone" aria-describedby="emailHelp"
                                        onChange={this.onChangePhone}
                                        value={this.state.phone} autoComplete="off" />
                                    {this.state.error_message.hasOwnProperty('phone_no') && <InvalidFeedBack message={this.state.error_message.phone_no[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Status</label>
                                    <select className="form-control" id="exampleFormControlSelect1" onChange={this.onChangeStatus} value={this.state.status===true ? 'Active':'Deactive'}>
            
                                        <option value="Active">Active</option>
                                        <option value="Deactive">Deactive</option>
                                    </select>

                                </div>
                            </div>

                            <div className="col-md-12 mt-2">
                                <hr/>
                                <div className="form-group text-center">
                              
                                    
                                    {this.props.editFlag === true ?
                                        <button type="button" className="btn btn-info btn-base " onClick={this.updateClientData}
                                        >
                                            Submit
                </button> : ''}

                                    {this.props.addFlag === true ?
                                        <button type="button" className="btn btn-info btn-base" onClick={this.addClientData}
                                        >
                                            Submit
                </button> : ''}
                                    
                  


                                </div>
                            </div>


                        </div>
                    </form>

                </BootstrapModal>


            </div>
        );
    }

}

export default ClientAddEdit;

