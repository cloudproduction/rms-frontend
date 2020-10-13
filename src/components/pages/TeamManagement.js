import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import TeamManagementAddEdit from './TeamManagementAddEdit';
// React = require('react');
// React.Bootstrap = require('react-bootstrap');
// React.Bootstrap.Select = require('react-bootstrap-select');

// import { selectpicker} from 'react-bootstrap'


class TeamManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: [],
            addModalShow: false,
            editId: null,
            editFlag: false,
            addFlag: false
        };
    }

    open = () => {
        this.setState({
            addModalShow: true,
            addFlag:true
        })

    }

    deptEdit = async(id) => {
       
        this.setState({
            editId: id,
            editFlag: true,
            addModalShow: true
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
    

    teamEdit = async(id) => {
       
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
                                        {/* DM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Team management
                  </h3>
                                                <button onClick={this.open} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right">
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
                                                        <th>Team Name</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                
                                                    {
                                                        this.state.teamData.map((team_data, index) => 
                                                        <tr key={index}>
                                                        <td>{team_data.name}</td>
                                                        <td><span className="disapproved">{team_data.status === true ? 'Active' : 'Deactive'}</span></td>
                                                        <td className="text-nowrap"> 
                                                                    <div>
                                                                    <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#BetaModal">
                                                                <i className="fas fa-eye" title="View Details"></i>
                                                            </button>
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button onClick={() => this.teamEdit(team_data.id)}className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
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
                            
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {this.state.addModalShow ?
                                <TeamManagementAddEdit
                                    openModal={this.state.addModalShow}
                                    editFlag={this.state.editFlag}
                                    addFlag={this.state.addFlag}
                                    editId={this.state.editId}
                                    loadUsers={this.loadUsers}
                                    modalHandler={this.modalHandler}
                                />:null
                            } 

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