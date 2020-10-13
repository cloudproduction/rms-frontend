import React, { Component } from 'react';
import axiosInstance from '../../intercept';
import BootstrapModal from '../partials/BootstrapModal';
import InvalidFeedBack from '../partials/ErrorStyle';


class DepartmentAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: true,
            error_message: {},
            msg_success: "",
            modalTitle: (this.props.addFlag === true ? 'Department Add' : 'Department Edit')

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


    CloseModal = () => {
        
        this.setState({
            openModal: false
        })
        document.getElementById('back_drop').style.cssText = 'display:none'

    }

    handleCloseModal = () => {
        this.props.CloseModal()
    }

    // dept add functionality
    addDeptData = async (e) => {

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
                    if (res.status === 201) {
                        this.setState({
                            name: "",
                            msg_success: "Data Added Successfully"
                        })
                    }

                })
                .catch((error) => {
                    // console.error(error)
                    this.setState({
                        error_message: error.response.data
                    })
                })
        } else {
            alert('Invalid token')
        }

        this.setState({
            name: "",
            status: ""
        })

        this.props.loadUsers()
    }

  
  // edit function area start 
  componentDidMount() {
    console.log('153 line for test');
     if (this.props.editFlag === true) {
        this.editLoaderData()
        console.log('testing');
    } else {
        console.log('no edit data call');
    }
  }
    
  editLoaderData = async() => {

    const token = JSON.parse(window.localStorage.getItem('token'))

    if (token) {

       await axiosInstance.get(`/departments/${this.props.editId}`, {
            headers: {
                'Authorization': `token ${token.token}`
            }

        })
            .then((res) => {
                console.log(res.data)

                // console.log('data add success');
                this.setState({
                    name: res.data.name,
                    status:res.data.status
                })



            })
            .catch((error) => {

                this.setState({
                    error_message: error.response.data
                })

            })
    } else {
        alert('Invalid token')
    }
}

updateDepttData = async (e) => {

    e.preventDefault()
    const obj = {
        name: this.state.name,
        status:this.state.status

    };

    const token = JSON.parse(window.localStorage.getItem('token'))
    console.log(token.token);
    if (token) {

        await axiosInstance.put(`/departments/${this.props.editId}/`, obj, {
            headers: {
                'Authorization': `token ${token.token}`
            }

        })
            .then((res) => {
                // console.log(res.data)
                if (res.status === 200) {
                    // console.log('data add success');
                    this.setState({
                        msg_success: "Data Updated Successfully",
                        error_message: ""
                    })
                }


            })
            .catch((error) => {

                this.setState({
                    error_message: error.response.data
                })

            })
    } else {
        alert('Invalid token')
    }
    this.props.loadUsers()

}

    render() {

        let className = ''
        if (this.state.error_message.hasOwnProperty('name')) {
            className += "is-invalid"
        }

        return (
            <div>
                <BootstrapModal openModal={this.props.openModal} modalHandler={this.props.modalHandler} modalTitle={this.state.modalTitle}>
                    <form>
                        {
                            this.state.msg_success &&
                            <p className="alert alert-success">{this.state.msg_success}</p>
                        }
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Department Name</label>
                                    <input type="text" className={"form-control " + className}
                                        id="exampleInputEmail1" aria-describedby="emailHelp"
                                        onChange={this.onChangeDeptName}
                                        value={this.state.name}  autoComplete="off"/>
                                    {this.state.error_message.hasOwnProperty('name') && <InvalidFeedBack message={this.state.error_message.name[0]} />}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Status</label>
                                    <select className="form-control" onChange={this.onChangeStatus} value={this.state.status===true ? 'Active':'Deactive'}>
                                        <option value="Active">Active</option>
                                        <option value="Deactive">Deactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <hr />
                                <div className="form-group text-center">

                                    {this.props.editFlag === true ?
                                        <button type="button" className="btn btn-info btn-base " onClick={this.updateDepttData}
                                        >
                                            Submit
                                        </button> : ''
                                    }

                                    {this.props.addFlag === true ?
                                        <button type="button" className="btn btn-info btn-base" onClick={this.addDeptData}
                                        >
                                            Submit
                                      </button> : ''
                                    }

                                </div>
                            </div>

                        </div>
                    </form>
                </BootstrapModal>
            </div>
        );
    }
}

export default DepartmentAddEdit;