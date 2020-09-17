import React, { Component } from 'react';
// import Sidebar from '../layouts/Sidebar';
// import Content from './Content';
import { Redirect } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import UserManagement from './UserManagement';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token === null) {
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        const { match, location, history } = this.props
        console.log(this.props);
        return (
            <div>
   <div className="wrapper">
      {/* Sidebar  */}
      <nav id="sidebar">
         <div className="sidebar-header">
            <h3><Link to={`${match.path}/`} style={{ color: 'white' }}> RMS </Link></h3>
         </div>
         <ul className="list-unstyled components">
            <li>
               <Link to={`${match.path}/usermanagement`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> User Management RBA </Link>
            </li>
            <li>
               <a href="client management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Client Management </a>
            </li>
            <li>
               <a href="department_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Department Management </a>
            </li>
            <li>
               <a href="team_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Team Management </a>
            </li>
            <li>
               <a href="unit_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Unit Management </a>
            </li>
            <li>
               <a href="requisitions_item_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Requisitions Item
               Management </a>
            </li>
            <li>
               <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Project
               Management</a>
               <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li><a href="add_new_project.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Project </a></li>
                  <li><a href="project_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Projects</a></li>
               </ul>
            </li>
            <li>
               <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Site
               Management</a>
               <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li><a href="add_new_site.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Site</a></li>
                  <li><a href="site_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Sites</a></li>
               </ul>
            </li>
            <li>
               <a href="#homeSubmenuRequisition" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Requisition Management</a>
               <ul className="collapse list-unstyled" id="homeSubmenuRequisition">
                  <li><a href="add_new_requisition.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Requisition</a></li>
                  <li><a href="requisition_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Requisition</a></li>
                  <li><a href="edit_requisition.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Edit Requisition</a></li>
               </ul>
            </li>
         </ul>
      </nav>
      {/* Page Content  */}
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
                        {/* onClick={this.logout} */}
                        <button className="btn btn-cyan mt-1" >
                        <i className="fas fa-power-off" style={{ marginRight: 5 }} />Log Out
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*End Modal: Login with Avatar Form*/}
         <Switch>
            <Route exact path={`${match.path}/`} component={Home} />
            <Route path={`${match.path}/usermanagement`} component={UserManagement} />
            {/* 
            <Route path="/logout" component={Logout}></Route>
            */}
         </Switch>
      </div>
   </div>
</div>
        );
    }
}

export default Dashboard;