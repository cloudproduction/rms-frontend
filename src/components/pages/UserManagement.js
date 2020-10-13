import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axiosInstance from '../../intercept';
import UserAddEdit from './UserAddEdit';

class UserManagement extends Component {

    constructor(props) {

        super(props)
        this.state = {
            userData: [],
            addModalShow: false,
            editId: null,
            editFlag: false,
            addFlag: false
        }
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
        
        if (token) {
            
            axiosInstance.get('/users/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                   
                    this.setState({
                        userData: res.data.reverse()
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
                                        {/* CM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> User management
                                                 </h3>
                                                <button onClick={this.open} type="button" data-toggle="modal" data-target="#formModal" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right">
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
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                        <th>Email</th>
                                                        <th>User Group</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.userData.map((user_data,index) => 
                                                            <tr key={index}>
                                                        <td>{user_data.first_name}</td>
                                                        <td>{user_data.last_name}</td>
                                                        <td>{user_data.username}</td>
                                                        <td>{user_data.email}</td>
                                                        <td className="text-nowrap" >
                                                                    {user_data.groups.map((group_role, i) =>
                                                                        <span key={i} className="badge badge-success">{group_role.name}</span>
                                                            
                                                           )}
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
                                                 
                                                        )
                                                    }
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
                            
                            {this.state.addModalShow ?
                                <UserAddEdit
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

export default UserManagement;