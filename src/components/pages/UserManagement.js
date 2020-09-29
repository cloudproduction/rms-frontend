import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class UserManagement extends Component {

    constructor(props) {

        super(props)
        this.state = {}
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
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> User management
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
                                                                    <label htmlFor="exampleInputEmail1"> First Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1"> Last  Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Username</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Password </label>
                                                                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="form-group">
                                                                <label>User Groups</label>
                                                        <select className="selectpicker" multiple data-live-search="true">
                                                            <option value="saab">MR. kawsar</option>
                                                            <option value="saab"> Mr.Hamid</option>
                                                            <option value="saab">Mr. Julfikar</option>
                                                            <option value="saab">Mr. Maruf</option>
                                                        </select>
                                                                    </div>
                                                            </div>

                                                            <div className=" col-md-4 ">
                                                                <div className="form-group">
                                                                    <label htmlFor=" exampleFormControlSelect1"> &nbsp;</label>
                                                                    <br />
                                                                    <button type="submit" className="btn btn btn-info btn-base">
                                                                        Submit
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div class="form-row">
                                                  <div class="form-group col-md-12">

                                                  </div>
                                                  <div class="form-group col-md-6">

                                                  </div>
                                              </div> */}
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
                                            <table  id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>User Group</th>
                                                    <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ayan</td>
                                                        <td>hasan</td>
                                                        <td>ayan123</td>
                                                        <td>ayan@gmail.com</td>
                                                        <td className="text-nowrap" > 
                                                        <span className="badge badge-success">Admin</span>
                                                        <span className="badge badge-success">Managerial</span>
                                                    </td>
                                                        <td className="text-nowrap">
                                                           
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                                    <i className="fa fa-pencil" />
                                                                </button>
                                                           
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ayan</td>
                                                        <td>hasan</td>
                                                        <td>ayan123</td>
                                                        <td>ayan@gmail.com</td>
                                                        <td className="text-nowrap" style={{margin:'1px'}}>
                                                        <span className="badge badge-success">Admin</span>
                                                        <span className="badge badge-success">Managerial</span>
                                                    </td>
                                                        <td className="nowrap" >
                                                            
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                                    <i className="fa fa-pencil" />
                                                                </button>
                                                            
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>User Group</th>
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
                                                Edit User
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
                                                            <label htmlFor="exampleInputEmail1"> First Name</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1"> Last  Name</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Username</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Password </label>
                                                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div class="form-row">
                                          <div class="form-group col-md-12">

                                          </div>
                                          <div class="form-group col-md-6">

                                          </div>
                                      </div> */}
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <label htmlFor="exampleInputEmail1" />
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

export default UserManagement;