import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import UnitManagementAddEdit from './UnitManagementAddEdit';

class UnitManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitData: [],
            addModalShow: false,
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
            axiosInstance.get('/units/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        unitData: res.data.reverse()
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
                                        {/* DM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Unit management
                  </h3>
                                                <button type="button"
                                                    data-toggle="modal" data-target="#formModal"
                                                    aria-expanded="true"
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
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Unit Name</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.unitData.map((unit_data, index) =>
                                                        <tr key={index}>
                                                        <td>{unit_data.name}</td>
                                                        <td><span className="approved">{unit_data.status === true ? 'Active' : 'Pending'}</span></td>
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
                                                        <th> Unit Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <UnitManagementAddEdit
                  show={this.state.addModalShow}
                    onHide={addModalClose}
                />

            </div>

        );
    }
}

export default UnitManagement;