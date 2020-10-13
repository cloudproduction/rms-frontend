import React, { Component } from 'react';
// import axios from 'axios';
import ClientAddEdit from './ClientAddEdit';
import axiosInstance from '../../intercept';
import Pagination from '../partials/Pagination';



class ClientManagement extends Component {
    constructor(props) {
        const token = localStorage.getItem("token")

        super(props);
        this.state = {
            clientData: [],
            addModalShow: false,
            editId: null,
            editFlag: false,
            addFlag: false
            
        }

    }



    componentDidMount() {
        this.loadUsers();
    }



    loadUsers = () => {

        const token = JSON.parse(window.localStorage.getItem('token'))
        // console.log(token.token);
        if (token) {

            axiosInstance.get('/clients/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
                    this.setState({
                        clientData: res.data.reverse()
                    })

                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            alert('No token here')
        }
    }


    deleteUser = async id => {
        const token = JSON.parse(window.localStorage.getItem('token'))
        if (token) {
            await axiosInstance.delete(`/clients/${id}`, {

                headers: {
                    'Authorization': `token ${token.token}`
                }
            }
            );
            this.loadUsers();
        };

    }

    open = () => {
        this.setState({
            addModalShow: true,
            addFlag:true
        })

    }

    modalHandler = () => {
        
        if (this.state.addModalShow === true) {
            this.setState({
                addModalShow: false,
                addFlag: false,
                editFlag:false
            }) 
        } else {
            this.setState({
                addModalShow:true
            })
        }
       
        document.getElementById('back_drop').style.cssText = 'display:none'
        
    }

    clientEdit = async(id) => {
       
        this.setState({
            editId: id,
            editFlag: true,
            addModalShow: true
        })
       
    }


    render() {

     

        return (
            <div>
                <div className="layout_content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="accordionform">
                                    <div className="accordion" id="accordionExample">
                                        {/* CM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Client management
                  </h3>
                                                <button type="button" data-toggle="modal" data-target="#formModal" aria-expanded="true" aria-controls="collapseOne"
                                                    className="btn btn-sm btn-info btn-base float-right"
                                                    onClick={this.open}>
                                                    <i className="fa fa-plus-square-o" />&nbsp;
                    Add New
                  </button>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card table-card">
                                  
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Client Name</th>
                                                        {/* <th>Address</th> */}
                                                        {/* <th>Contact Info</th> */}
                                                        <th>Email</th>
                                                        <th>Phone No</th>
                                                        {/* <th>Status</th> */}
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.clientData.map((clien_data, index) =>
                                                            <tr key={index}>
                                                                <td>{clien_data.name}</td>
                                                                {/* <td>{clien_data.address}</td> */}
                                                                {/* <td>{clien_data.contact_info}</td> */}
                                                                <td>{clien_data.email}</td>
                                                                <td>{clien_data.phone_no}</td>
                                                                {/* <td><span className="approved">Active</span></td> */}
                                                                <td className="text-nowrap">
                                                                    <div>
                                                                        <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#AkashModal">
                                                                            <i className="fas fa-eye" title="View Details" />
                                                                        </button>

                                                                        <button onClick={() => { if (window.confirm('Are you sure to delete this record?')) { this.deleteUser(clien_data.id) }; }} className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                            <i className="fa fa-trash-o" />
                                                                        </button>
                                                                        <button onClick={() => this.clientEdit(clien_data.id)} className="btn btn-sm btn-edit" data-toggle="modal" data-target="#">
                                                                            <i className="fa fa-pencil" />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Client Name</th>
                                                        {/* <th>Address</th> */}
                                                        {/* <th>Contact Info</th> */}
                                                        <th>Email</th>
                                                        <th>Phone No</th>
                                                        {/* <th>Status</th> */}
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            
                                        </div>
                                    </div>
                                    {/* <Pagination/> */}
                                </div>
                            </div>
                            <hr/>
                            {this.state.addModalShow ?
                           
                           <ClientAddEdit
                           openModal={this.state.addModalShow}
                           editFlag={this.state.editFlag}
                           addFlag={this.state.addFlag}
                           editId={this.state.editId}
                            loadUsers={this.loadUsers}
                            modalHandler={this.modalHandler}      
                                /> : null
                            }


                            {/* view modal start  */}

                            <div className="modal fade" id="AkashModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="ml-4">View details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
            </span>
                                                </button>
                                            </div>
                                            <div className="card-body-detail">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <b className="mr-1">Client Name : </b> Akash <br />
                                                        <b className="mr-1">Address :</b> Dhaka <br />
                                                        <b className="mr-1"> Email :</b> akash@gmail.com <br />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <b className="mr-1">Phone :</b> 01926610425 <br />
                                                        <b className="mr-1">Status :</b> Active <br />
                                                        <b className="mr-1">Contact Info:</b> 29/3 Lalmatia <br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* view modal end  */}

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ClientManagement;