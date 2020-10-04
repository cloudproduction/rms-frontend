import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import ModalHeader from '../partials/ModalHeader';

class DepartmentAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: true
        };
        this.onChangeDeptName = this.onChangeDeptName.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
    }

    onChangeDeptName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeStatus(e) {
        console.log(e.target.value);
        if (e.target.value === 'Active') {
            this.setState({
                status: true
            });
        } else {
            this.setState({
                status: false
            });
        }

    }

    addDeptData = async(e) => {
        alert('hi')
        e.preventDefault()
        const obj = {
            name: this.state.name,
            status: this.state.status

        };

        console.log('data test', obj);
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {
            
           await axiosInstance.post('/departments/', obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)

                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            alert('Invalid token')
        }

        this.setState({
            name: "",
            status: ""
        })

    }


    render() {
        return (
            <div>
                <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                            <ModalHeader title="Add Department"/>

                                <button type="button" className="close"
                                    data-dismiss="modal" aria-label="Close"
                                    onClick= {this.props.onHide}>
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
                                                <input type="text" className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    onChange={this.onChangeDeptName}
                                                    value={this.state.name} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlSelect1">Status</label>
                                                <select className="form-control" onChange={this.onChangeStatus}>
                                                    <option value="">Select Status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Deactive">Deactive</option>
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
                                <button type="button"
                                    className="btn btn-info btn-base"
                                    onClick={this.addDeptData}>
                                    Submit
                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DepartmentAddEdit;