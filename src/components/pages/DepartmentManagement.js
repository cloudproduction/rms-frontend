import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import DepartmentAddEdit from './DepartmentAddEdit';

class DepartmentManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptData: [],
            addModalShow: false,
            editId: null,
            editFlag: false,
            addFlag: false
            
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
                                                <button  onClick={this.open} type="button" data-toggle="modal" data-target="#formModal"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                    className="btn btn-sm btn-info btn-base float-right"
                                                    >
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
                                                                        
                                                                <button onClick={() => this.deptEdit(dep_data.id)} className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
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
                            {this.state.addModalShow ?
                                <DepartmentAddEdit
                                    openModal={this.state.addModalShow}
                                    editFlag={this.state.editFlag}
                                    addFlag={this.state.addFlag}
                                    editId={this.state.editId}
                                    loadUsers={this.loadUsers}
                                    modalHandler={this.modalHandler}
                                />:null
                            }       
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DepartmentManagement;