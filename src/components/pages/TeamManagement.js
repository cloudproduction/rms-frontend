import React, { Component } from 'react';
import axiosInstance from '../../intercept';
// React = require('react');
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');

// import { selectpicker} from 'react-bootstrap'


class TeamManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: []
        };
    }

    componentDidMount() {
        this.loadUsers();
    }

    

    loadUsers = () => {

        
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            axiosInstance.get('/teams/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
                    this.setState({
                        teamData: res.data.reverse()
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
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Team management
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
                                                                    <label htmlFor="exampleInputEmail1"> Team Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="title-full">
                                                                    Members
                          </label>
                                                                <br />
                                                                <select className="selectpicker" multiple data-live-search="true">
                                                                    <option value="Mu">Munna</option>
                                                                    <option value="Ha">Hasan</option>
                                                                    <option value="Km">kamrul</option>
                                                                    <option value="Em">Emon</option>
                                                                    <option value="Ra">Rasel</option>
                                                                    <option value="Km">kamrul</option>
                                                                    <option value="Km">kamrul</option>
                                                                    <option value="Km">kamrul</option>
                                                                </select>
                                                            </div>
                                                            {/* 
                                                  <option value="Km">kamrul</option>
                                                     <option value="Km">kamrul</option>
                                                     <option value="Km">kamrul</option>
                                                     <option value="Km">kamrul</option>
                                                     <option value="Km">kamrul</option> */}
                                                            <div className="col-md-4">
                                                                <div className="ml-5">
                                                                    <div className="form-group">
                                                                        <label htmlFor="phone">
                                                                            Status
                              </label>
                                                                        <div className="area-ckeckbox-radio">
                                                                            <div className="radio radio-success radio-inline ">
                                                                                <input type="radio" id="inlineRadio1" defaultValue="option1" name="radioInline" defaultChecked />
                                                                                <label htmlFor="inlineRadio1">
                                                                                    Active
                                  </label>
                                                                            </div>
                                                                            <div className="radio radio-danger radio-inline ml15">
                                                                                <input type="radio" id="inlineRadio2" defaultValue="option1" name="radioInline" />
                                                                                <label htmlFor="inlineRadio2">
                                                                                    Deactive
                                  </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-12">
                                                                <button type="submit" className="btn btn-sm btn-info btn-base float-right">
                                                                    Submit
                          </button>
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
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Team Name</th>
                                                        <th>Status</th>
                                                        <th> View_Details</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                
                                                    {
                                                        this.state.teamData.map((team_data, index) => 
                                                        <tr key={index}>
                                                        <td>{team_data.name}</td>
                                                        <td><span className="disapproved">{team_data.status === true ? 'Active' : 'Deactive'}</span></td>
                                                        <td><a href="#" className="badge badge-info" data-toggle="modal" data-target="#BetaModal">details</a></td>
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
                                                        <th>Team Name</th>
                                                        <th>Status</th>
                                                        <th> View_Details</th>
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
                                                Edit Team
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
                                                            <label htmlFor="exampleInputEmail1"> Name</label>
                                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="exampleInputEmail1">Members</label>
                                                        {/* <br /> */}
                                                        <select className="selectpicker" multiple data-live-search="true">
                                                            <option value="Mu">Munna</option>
                                                            <option value="Ha">Hasan</option>
                                                            <option value="Km">kamrul</option>
                                                            <option value="Em">Emon</option>
                                                            <option value="Ra">Rasel</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="ml-5">
                                                            <div className="form-group">
                                                                <label htmlFor="phone">
                                                                    Status
                          </label>
                                                                <div className="area-ckeckbox-radio">
                                                                    <div className="radio radio-success radio-inline ">
                                                                        <input type="radio" id="inlineRadio3" defaultValue="option3" name="radioInline" defaultChecked />
                                                                        <label htmlFor="inlineRadio3">
                                                                            Active
                              </label>
                                                                    </div>
                                                                    <div className="radio radio-danger radio-inline ml15">
                                                                        <input type="radio" id="inlineRadio4" defaultValue="option4" name="radioInline" />
                                                                        <label htmlFor="inlineRadio4">
                                                                            Deactive
                              </label>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                            {/* view details */}
                            <div className="modal fade" id="AlphaModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>View details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                    </span>
                                                </button>
                                            </div>
                                            <div className="card-body-list">
                                                <table className="table table-bordered mb0">
                                                    <thead>
                                                        <tr>
                                                            <th>Team Name</th>
                                                            <th> Members</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> Alpha </td>
                                                            <td> Munna <br /> Rasel <br /> jamal <br /> kamal <br />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                {/* <div class="row">
                                          <div class="col-md-6">
                                              <ul class="list-group">
                                                  <li class="list-group-item"> Team Name : Alpha</li>



                                              </ul>
                                          </div>
                                          <div class="col-md-6">
                                              <ul class="list-group">
                                                  <li class="list-group-item">Phone : 01926610425</li>
                                                  <li class="list-group-item">Status : Active</li>
                                                  <li class="list-group-item">Contact Info: 29/3 Lalmatia </li>

                                              </ul>
                                          </div>
                                      </div> */}
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="BetaModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>View details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                    </span>
                                                </button>
                                            </div>
                                            <div className="card-body-list">
                                                <table className="table table-bordered mb0">
                                                    <thead>
                                                        <tr>
                                                            <th>Team Name</th>
                                                            <th> Members</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> Beta </td>
                                                            <td> Akmal <br /> rabbbi <br /> kamalr <br /> hasan <br />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="SigmaModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>View details</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                    </span>
                                                </button>
                                            </div>
                                            <div className="card-body-list">
                                                <table className="table table-bordered mb0">
                                                    <thead>
                                                        <tr>
                                                            <th>Team Name</th>
                                                            <th> Members</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> Sigma </td>
                                                            <td> noor <br /> abdullah <br /> jakaria <br />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>
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

export default TeamManagement;