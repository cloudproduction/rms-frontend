import React, { Component } from 'react';
import BootstrapModal from '../partials/BootstrapModal';
import axiosInstance from '../../intercept';
import Select from 'react-select'
import InvalidFeedBack from '../partials/ErrorStyle';

class TeamManagementAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error_message: {},
            msg_success: "",
            id: null,
            modalTitle: (this.props.addFlag === true ? 'Team Add' : 'Team Edit'),
            id: null,
            members: [],
            name: "",
            status: true,
            selectedMembers: null
        };

        this.onChangeselectedName = this.onChangeselectedName.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeselectedName(e) {
        console.log(e);
        // Array.isArray(e) ? e.map(x => x.value) : []
        this.setState({
            id: Array.isArray(e) ? e.map(x => x.value) : []
            
        })
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

    addTeamtData = async (e) => {

        e.preventDefault()
        const obj = {
            name: this.state.name,
            members: this.state.id,
            status: this.state.status,

        };

        console.log('data test', obj);
        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            await axiosInstance.post('/teams/', obj, {
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
            name: "",

        })

        this.props.loadUsers()
    }


    async getOptions() {
        const token = JSON.parse(window.localStorage.getItem('token'))

        if (token) {
            const res = await axiosInstance.get('/users/',
            {
                headers: {
                    'Authorization': `token ${token.token}`
                }

                })
            
            const data = res.data
        
            const options = data.map(d => ({
              "value" : d.id,
              "label" : d.first_name+" "+d.last_name
        
            }))
        
            this.setState({members: options})
        
          }
            else {
            alert('No token here')
        }

    
      }
    
    
      componentDidMount(){
          this.getOptions()
          if (this.props.editFlag === true) {
              this.editLoaderData()
            
        } else {
            console.log('no edit data call');
        }
      }

    
      editLoaderData = async() => {

        const token = JSON.parse(window.localStorage.getItem('token'))

        if (token) {

           await axiosInstance.get(`/teams/${this.props.editId}/`, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    console.log(res.data.members)
                        
                    // console.log('data add success');
                    this.setState({
                        name: res.data.name,
                        status: res.data.status,
                        selectedMembers: res.data.members.map(d => ({
                            "value": d.id,
                            "label":d.first_name+ " "+d.last_name
                      
                        }) 
                        
                        ) //map en
                        
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

    updateTeamtData = async (e) => {

        e.preventDefault()
        const obj = {
            name: this.state.name,
            status: this.state.status,
            memebers: this.state.members

        };

        const token = JSON.parse(window.localStorage.getItem('token'))
        console.log(token.token);
        if (token) {

            await axiosInstance.put(`/teams/${this.props.editId}/`, obj, {
                headers: {
                    'Authorization': `token ${token.token}`
                }

            })
                .then((res) => {
                    // console.log(res.data)
                    if (res.status === 200) {
                        console.log('data add success');
                        this.setState({
                            msg_success: "Data Updated Successfully",
                            error_message: ""
                        })
                    }


                })
                .catch((error) => {
                    // console.error('15', error)
                    // console.log('116',error.response.data.name[0]);

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
        } else if (this.state.error_message.hasOwnProperty('address')) {
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
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1"> Name</label>
                                    <input type="text" className={"form-control " + className} id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={this.onChangeName}
                                        value={this.state.name} />
                      {this.state.error_message.hasOwnProperty('name') && <InvalidFeedBack message={this.state.error_message.name[0]} />}

                                </div>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="exampleInputEmail1">Members</label>
                                {/* <br /> */}

                                <Select value={this.state.selectedMembers}
                                    options={this.state.members} onChange={this.onChangeselectedName}
                                    isMulti isSearchable />

                            </div>
                            <div className="col-md-4">
                                <div className="ml-5">
                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            Status
                          </label>
                                        <div className="area-ckeckbox-radio">
                                        <div className="radio radio-danger radio-inline ml15">
                                                <input type="radio" id="inlineRadio3" checked={this.state.status===true} 
                                                    name="radioInline" value="Active" onChange={this.onChangeStatus}/>
                                                <label htmlFor="inlineRadio3">
                                                Active 
                              </label>
                                            </div>
                                        <div className="radio radio-danger radio-inline ml15">
                                                <input type="radio" id="inlineRadio3" checked={this.state.status===false} 
                                                    name="radioInline" value="Deactive" onChange={this.onChangeStatus}/>
                                                <label htmlFor="inlineRadio3">
                                                Deactive 
                              </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mt-2">
                                <hr />
                                <div className="form-group text-center">

                                    {this.props.editFlag === true ?
                                        <button type="button" className="btn btn-info btn-base " onClick={this.updateTeamtData}
                                        >
                                            Submit
                                        </button> : ''
                                    }

                                    {this.props.addFlag === true ?
                                        <button type="button" className="btn btn-info btn-base" onClick={this.addTeamtData}
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

export default TeamManagementAddEdit;