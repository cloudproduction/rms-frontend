import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import DepartmentAddEdit from './DepartmentAddEdit';

class DepartmentManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptData: [],
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
            
            axiosInstance.get('/departments/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
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

    deleteDept = async id => {
        const token = JSON.parse(window.localStorage.getItem('token'))
        if(token) {
            await axiosInstance.delete(`/departments/${id}`, {
               
                headers: {
                    'Authorization': `token ${token.token}`
                }
            }
            );
            this.loadUsers();
          };
    
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
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Department management
                  </h3>
                                                <button type="button" data-toggle="modal" data-target="#formModal"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
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
                                                                <button onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.deleteDept(dep_data.id)};}} className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
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

                            <DepartmentAddEdit
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

export default DepartmentManagement;