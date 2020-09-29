import React, { Component } from 'react';
import axios from 'axios';
import ClientAddEdit from './ClientAddEdit';
import axiosInstance from '../../intercept';

class ClientManagement extends Component {
    constructor(props) {
        const token = localStorage.getItem("token")
        super(props);
        this.state = {
            clientData: [],
            addModalShow: false
        }

    }



    componentDidMount() {
        this.loadUsers();
    }

    componentDidUpdate() {

    }

    loadUsers = () => {

        axiosInstance.get('/clients/').then(
                res => {
                    console.log(res.data);
            }
        )
        // const token = JSON.parse(window.localStorage.getItem('token'))
        // console.log(token.token);
        // if (token) {
        //     console.log('105 line');
        //     axios.get('/api/clients/', {
        //         headers: {
        //             'Authorization': `token ${token.token}`
        //         }

        //     })
        //         .then((res) => {
        //             console.log(res.data)
        //             this.setState({
        //                 clientData: res.data
        //             })

        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        // }
    }


    render() {

        let addModalClose = () => this.setState({ addModalShow: false })
        console.log(this.state.addModalShow);
        
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
                                                    onClick={() => this.setState({ addModalShow: true })}>
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
                                    {/* <div class="card-header">
                              <h3 class="float-left"><i class="fa fa-info-circle"></i> Table Title</h3>
                              <button class="btn btn-sm btn-info btn-base float-right"><i class="fa fa-plus-square-o"></i>&nbsp; Add New </button>
                          </div> */}
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Client Name</th>
                                                        <th>Address</th>
                                                        <th>Contact Info</th>
                                                        <th>Email</th>
                                                        <th>Phone No</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.clientData.map((clien_data, index) =>
                                                            <tr key={index}>
                                                                <td>{clien_data.name}</td>
                                                                <td>{clien_data.address}</td>
                                                                <td>{clien_data.contact_info}</td>
                                                                <td>{clien_data.email}</td>
                                                                <td>{clien_data.phone_no}</td>
                                                                <td><span className="approved">Active</span></td>
                                                                <td className="text-nowrap">
                                                                    <div>
                                                                        <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                            <i className="fa fa-trash-o" />
                                                                        </button>
                                                                        <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#">
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
                                                        <th>Address</th>
                                                        <th>Contact Info</th>
                                                        <th>Email</th>
                                                        <th>Phone No</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ClientAddEdit
                                show={this.state.addModalShow}
                                onHide={addModalClose}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ClientManagement;