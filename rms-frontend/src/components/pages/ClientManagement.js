import React, { Component } from 'react';
import axios from 'axios';

class ClientManagement extends Component {
    constructor(props) {
        const token = localStorage.getItem("token")
        super(props);
        this.state = {
            clientData: [] 

        }
    }
    
    componentDidMount() {
        this.loadUsers();

    }
      
    loadUsers = () => {
        const token = JSON.parse(window.localStorage.getItem('token')) 
        if (token) {
            const clientData =  axios.get('http://0.0.0.0:8000/api/clients/', {
                headers: {
                  'Authorization': `token ${token.token}`
                }
              })
              .then((res) => {
                //   console.log(res.data)
                  this.setState({
                      clientData:res.data
                  })
              })
              .catch((error) => {
                console.error(error)
              })
        }
      
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
                                                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right">
                                                    <i className="fa fa-plus-square-o" />&nbsp;
                    Add New
                  </button>
                                            </div>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1"> Client Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1"> Address</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Contact Info</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Emial address</label>
                                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Phone no </label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleFormControlSelect1">Status</label>
                                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                                        <option value= "">Active</option>
                                                                        <option value= "">Deactive</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-12">
                                                                <button type="submit" className="btn btn-sm btn-info btn-base float-right">
                                                                    Submit
                          </button>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
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
                                                        <td>Ayan</td>
                                                        <td>Dhaka</td>
                                                        <td>22/3 Lalmatia</td>
                                                        <td>tiger@gmail.com</td>
                                                        <td>01720110425</td>
                                                        <td><span className="approved">Active</span></td>
                                                        <td className="text-nowrap">
                                                            <div>
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
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
                            <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">
                                                Edit Client
                </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">
                                                    ×
                  </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1"> Client Name</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1"> Address</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Contact Info</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Emial address</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Phone no </label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Status</label>
                                                            <select className="form-control" id="exampleFormControlSelect1">
                                                                <option value= "">Active</option>
                                                                <option value= "">Deactive</option>
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
                    </div>
                </div>
            </div>

        );
    }
}

export default ClientManagement;