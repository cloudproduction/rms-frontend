import React, { Component } from 'react';
import axiosInstance from '../../intercept';

class DepartmentManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptData: []
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    

    loadUsers = () => {

        
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {
            console.log('105 line');
            axiosInstance.get('/departments/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        deptData: res.data.reverse()
                    })

                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            alert('No token here')
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
                                        {/* DM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Department management
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
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Department Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleFormControlSelect1">Status</label>
                                                                    <select className="form-control">
                                                                        <option value="active">Active</option>
                                                                        <option value="deactive">Deactive</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <div className="form-group">
                                                                    <label htmlFor=" exampleFormControlSelect1"> &nbsp;</label>
                                                                    <br />
                                                                    <button type="submit" className="btn btn-block btn-info btn-base float-right ">
                                                                        Submit
                            </button>
                                                                </div>
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
                        <div className="row ">
                            <div className="col">
                                <div className="card table-card">
                                    {/* <div class="card-header ">
                                          <h3 class="float-left "><i class="fa fa-info-circle "></i> Table Title</h3>
                                          <button class="btn btn-sm btn-info btn-base float-right "><i class="fa fa-plus-square-o "></i>&nbsp; Add New </button>
                                      </div> */}
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered " style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Department Name</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    {
                                                        this.state.deptData.map((dep_data,index) =>
                                                        <tr key={index}>
                                                        <td>{dep_data.name}</td>
                                                        <td><span className="approved">{dep_data.status=== true ? 'Active' : 'Deactive'}</span></td>
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
                                                        <th>Department Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
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
                                                Edit Department
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
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Department Name</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Status</label>
                                                            <select className="form-control">
                                                                <option value="active">Active</option>
                                                                <option value="active">Deactive</option>
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

export default DepartmentManagement;