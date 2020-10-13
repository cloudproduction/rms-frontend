import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import ItemManagementAddEdit from './ItemManagementAddEdit';


class ItemManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: [],
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

    itemEdit = async(id) => {
       
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
            
            axiosInstance.get('/items/', {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data)
                    this.setState({
                        itemData: res.data.reverse()
                    })

                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            alert('No token here')
        }
    }


    deleteItem = async id => {
        const token = JSON.parse(window.localStorage.getItem('token'))
        if(token) {
            await axiosInstance.delete(`/items/${id}`, {
               
                headers: {
                    'Authorization': `token ${token.token}`
                }
            }
            );
            this.loadUsers();
          };
    
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
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Requisition Item Management
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
                                                        <th>Item Name</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        this.state.itemData.map((item_data, index) =>
                                                            <tr key={index}>
                                                                <td>{item_data.name}</td>
                                                                <td><span className="disapproved">{item_data.status === true ? 'Active' : 'Deactive'}</span></td>
                                                                <td className="text-nowrap">
                                                                    <div>
                                                                    <button onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.deleteItem(item_data.id)};}} className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                        </button>
                                                                        
                                                                <button onClick={() => this.itemEdit(item_data.id)} className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
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
                                                        <th>Item Name</th>
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

                {this.state.addModalShow ?
                    <ItemManagementAddEdit
                        openModal={this.state.addModalShow}
                        editFlag={this.state.editFlag}
                        addFlag={this.state.addFlag}
                        editId={this.state.editId}
                        loadUsers={this.loadUsers}
                        modalHandler={this.modalHandler}
                    /> : null
                }

            </div>

        );
    }
}

export default ItemManagement;