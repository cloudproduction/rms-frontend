import React, { Component } from 'react';
import BootstrapModal from '../partials/BootstrapModal';
import axiosInstance from '../../intercept';
import InvalidFeedBack from '../partials/ErrorStyle';
import Select from 'react-select'




class UserAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            groups: [],
            error_message: {},
            msg_success: "",
            id: null,
            modalTitle: (this.props.addFlag === true ? 'User Add' : 'User Edit')

        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmailName = this.onChangeEmailName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGroupName = this.onChangeGroupName.bind(this);
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmailName(e) {
        console.log(e.target.value);

        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeGroupName(e) {
        console.log(e);
        // Array.isArray(e) ? e.map(x => x.value) : []
        this.setState({
            id: e.map(x => x.value)
            
        })
    }
   

    addUsertData = async (e) => {

        e.preventDefault()
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            groups: this.state.id

        };

        console.log('data test', obj);
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            await axiosInstance.post('/users/', obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    if (res.status === 201) {
                        this.setState({

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
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: ""

        })

        this.props.loadUsers()
    }



    async getOptions() {
        const token = JSON.parse(window.localStorage.getItem('token'))

        if (token) {
            const res = await axiosInstance.get('/group-list/',
            {
                headers: {
                    'Authorization': `token ${token.token}`
                }

                })
            
            const data = res.data
        
            const options = data.map(d => ({
              "value" : d.id,
              "label" : d.name
        
            }))
        
            this.setState({groups: options})
        
          }
            else {
            alert('No token here')
        }

    
      }
    
    
    
      componentDidMount(){
          this.getOptions()
      }

    render() {

        let className = ''
        if (this.state.error_message.hasOwnProperty('first_name')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('last_name')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('username')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('email')) {
            className += "is-invalid"
        } else if (this.state.error_message.hasOwnProperty('password')) {
            className += "is-invalid"
        }
        console.log(this.state.id)

        return (
            <div>
                <BootstrapModal openModal={this.props.openModal} modalHandler={this.props.modalHandler} modalTitle={this.state.modalTitle}>
                    <form>
                        {
                            this.state.msg_success &&
                            <p className="alert alert-success">{this.state.msg_success}</p>
                        }
                        <div className="form-row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"> First Name</label>
                                    <input type="text" className={"form-control " + className} autoComplete="off"
                                        id="first_name" aria-describedby="emailHelp"
                                        onChange={this.onChangeFirstName}
                                        value={this.state.first_name} />
                                    {this.state.error_message.hasOwnProperty('first_name') && <InvalidFeedBack message={this.state.error_message.first_name[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"> Last  Name</label>
                                    <input type="text" className={"form-control " + className} autoComplete="off"
                                        id="last_name" aria-describedby="emailHelp"
                                        onChange={this.onChangeLastName}
                                        value={this.state.last_name} />
                                    {this.state.error_message.hasOwnProperty('last_name') && <InvalidFeedBack message={this.state.error_message.last_name[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input type="text" className={"form-control " + className} autoComplete="off"
                                        id="username" aria-describedby="emailHelp"
                                        onChange={this.onChangeUserName}
                                        value={this.state.username} />
                                    {this.state.error_message.hasOwnProperty('username') && <InvalidFeedBack message={this.state.error_message.username[0]} />}

                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className={"form-control " + className} autoComplete="off"
                                        id="email" aria-describedby="emailHelp"
                                        onChange={this.onChangeEmailName}
                                        value={this.state.email} />
                                    {this.state.error_message.hasOwnProperty('email') && <InvalidFeedBack message={this.state.error_message.email[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password </label>
                                    <input type="password" className={"form-control " + className} autoComplete="off"
                                        id="password" aria-describedby="emailHelp"
                                        onChange={this.onChangePassword}
                                        value={this.state.password} />
                                    {this.state.error_message.hasOwnProperty('password') && <InvalidFeedBack message={this.state.error_message.password[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>User Groups</label>
                                  

                                    <Select options={this.state.groups} onChange={this.onChangeGroupName} isMulti  />
        {/* {
           this.state.value === null ? "" : this.state.value.map(v => <h4>{v.label}</h4>) */}
        
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
                                        <button type="button" className="btn btn-info btn-base" onClick={this.addUsertData}
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

export default UserAddEdit;