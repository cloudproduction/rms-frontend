import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.logout = this.logout.bind(this)
    }

    logout() {
    
        localStorage.removeItem("token")
        this.props.history.push('/');
        
    }

    render() {
        return (
            <div>
                <div id="content">
                    {/*Navbar Start*/}
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'white' }}>
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-default">
                                <i className="fas fa-bars" />
                            </button>
                            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-align-justify" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fa fa-bell" data-toggle="modal" data-target="#myModal" />
                                        </a>
                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5>Notifications</h5>
                                                        <button className="close" data-dismiss="modal">×</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a href="" data-toggle="modal" data-target="#modalLoginAvatar">
                                            <img className="profile-logo" src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login_form.html">
                                            <i className="fas fa-sign-in-alt" data-target="#loginPageModal" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/*Navbar End*/}
                    {/*Profile Modal Start*/}
                    <div className="modal fade" id="modalLoginAvatar" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog cascading-modal modal-avatar modal-sm" role="document">
                            {/*Content*/}
                            <div className="modal-content">
                                {/*Header*/}
                                <div className="modal-header">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" className="rounded-circle img-responsive" />
                                    <button className="close" data-dismiss="modal">
                                        <i className="fas fa-times" style={{ fontSize: 15 }} /></button>
                                </div>
                                {/*Body*/}
                                <div className="modal-body text-center mb-1">
                                    <h3 style={{ color: 'palevioletred' }}>Farhana Afreen</h3>
                                    <hr />
                                    <div className="md-form ml-0 mr-0">
                                        <button className="btn btn-cyan mt-1"><i className="fas fa-user" style={{ marginRight: 5 }} />
                Profile
              </button>
                                    </div>
                                    <hr />
                                    <div className="text-center mt-1">
                                        <button className="btn btn-cyan mt-1"><i className="fas fa-cog" style={{ marginRight: 5 }} />Setting
              </button>
                                    </div>
                                    <hr />
                                    <div className="text-center mt-1">
                                        <button className="btn btn-cyan mt-1" onClick={this.logout}>
                                            <i className="fas fa-power-off" style={{ marginRight: 5 }} />Log Out
              </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Modal: Login with Avatar Form*/}
                    <div className="text-content" style={{ padding: 20 }}>
                        <h2>Requisition Management System</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="line" />
                        <h2>What is RSM?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="line" />
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(Content);