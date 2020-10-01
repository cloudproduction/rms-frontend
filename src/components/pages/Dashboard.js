import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import { Redirect,withRouter } from 'react-router-dom'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import axiosInstance from '../../intercept';
import AddNewProject from './AddNewProject';
import AddNewSite from './AddNewSite';
import AddRequisition from './AddRequisition';
import ClientManagement from './ClientManagement';
import DepartmentManagement from './DepartmentManagement';
import EditRequsition from './EditRequsition';
import Home from './Home';
import ItemManagement from './ItemManagement';
import TeamManagement from './TeamManagement';
import UnitManagement from './UnitManagement';
import UserManagement from './UserManagement';
import ViewNewProject from './ViewNewProject';
import ViewRequisition from './ViewRequisition';
import ViewSite from './ViewSite';


class Dashboard extends Component {
   constructor(props) {
      super(props);
      const token = localStorage.getItem("token")

      let loggedIn = true
      if (token === null) {
         loggedIn = false
      }

      this.state = {
         loggedIn,
         menu: false
      }
     
   }

   // logout = (e) => {
   //    window.confirm('Are you  sure logout the system ?')
   //    // axiosInstance.get('/logout/')
   //    //    .then(resp => { 
   //    //       console.log('logout');
   //    //       this.props.history.push('/')
   //    //    })
    
   //   window.localStorage.removeItem("token")
      
   //    this.props.history.push('/')

   // }

  
   logout = async (e) => {
      const token = JSON.parse(window.localStorage.getItem('token'))
      console.log(token.token);
      if (token) {

          await axiosInstance.get(`/logout/`, {
             
              headers: {
                  'Authorization': `token ${token.token}`
              }
          }).then(
             resp => {
                console.log('logout');
                window.localStorage.removeItem("token")
                this.props.history.push('/')
             }
          );
        };
  
 }

   render() {

      const show = (this.state.menu) ? "show" : "";
      if (this.state.loggedIn === false) {
         return <Redirect to="/" />
      }
      const { match, location, history } = this.props
      // console.log(this.props);
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
                        <Link to={`${match.path}/client-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Client Management </Link>
                     </li>
                     <li>
                        <Link to={`${match.path}/department-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Department Management </Link>
                     </li>
                     <li>
                        <Link to={`${match.path}/team-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Team Management </Link>
                     </li>
                     <li>
                        <Link to={`${match.path}/unit-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Unit Management </Link>
                     </li>
                     <li>
                        <Link to={`${match.path}/item-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Item
               Management </Link>
                     </li>
                     <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Project
               Management</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                           <li><Link to={`${match.path}/add-project-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Project </Link></li>
                           <li><Link to={`${match.path}/view-project-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Projects</Link></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Site
               Management</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                           <li><Link to={`${match.path}/add-site-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Site</Link></li>
                           <li><Link to={`${match.path}/view-site-management`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Sites</Link></li>
                        </ul>
                     </li>
                     <li>
                        <a href="#homeSubmenuRequisition" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-angle-right" /> Requisition Management</a>
                        <ul className="collapse list-unstyled" id="homeSubmenuRequisition">
                           <li><Link to={`${match.path}/add-requisition`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> Add New Requisition</Link></li>
                           <li><Link to={`${match.path}/view-requisition`} style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> View All Requisition</Link></li>
                        </ul>
                     </li>
                  </ul>
               </nav>
               {/* Page Content  */}
               <div id="content">
                  <div>
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
                                 {/* notificatiton */}
                                 <li className="nav-item">
                                    <div className="dropdown">
                                       <a className="nav-link" href="#" data-toggle="dropdown" data-target="#dropdownMenuButton2" aria-haspopup="true" aria-expanded="false">
                                          <div className="bell-icon">
                                             <i className="fa fa-bell" />
                                          </div>
                                       </a>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                          <div className="row">
                                             <div className="col-md-12">
                                                <a className="dropdown-item text-center" href="#"><small className="text-muted">12 Notifications</small> </a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#"><i className="fas fa-envelope mr-1" /> 4 new messages</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#"><i className="fas fa-users mr-1" /> 3 new users</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#"> <i className="fas fa-sticky-note mr-1" />5 new reports</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item text-center" href="#"><small className="text-muted">see all notifications</small> </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div></li>
                                 {/* profile */}
                                 <li className="nav-item">
                                    <div className="dropdown">
                                       <a  data-toggle="dropdown" data-target="#dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                                          <div className="user-icon">
                                             <i className="fas fa-user" />
                                          </div>
                                       </a>
                                       <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#">
                                             <h5>Abdullah Noor</h5>
                                          </a>
                                          <a className="dropdown-item" href="#">
                                             <i className="fas fa-user mr-2" /> Profile
                </a>
                                          <a className="dropdown-item" href="#">
                                             <i className="fas fa-cog mr-2" />Setting
                </a>
                                          <a className="dropdown-item" onClick={this.logout}>
                                             <i className="fas fa-power-off mr-2" />Log Out
                </a>
                                       </div>
                                    </div>
                                 </li>
                                 {/* <li class="nav-item">
                          <a class="nav-link" href="login_form.html">
                              <i class="fas fa-sign-in-alt" data-target="#loginPageModal"></i>
                          </a>
                      </li> */}
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
                                    <button className="btn btn-cyan mt-1">
                                       <i className="fas fa-power-off" style={{ marginRight: 5 }} />Log Out
            </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <Switch>
                     <Route exact path={`${match.path}/`} component={Home} />
                     <Route path={`${match.path}/usermanagement`} component={UserManagement} />
                     <Route path={`${match.path}/client-management`} component={ClientManagement} />
                     <Route path={`${match.path}/department-management`} component={DepartmentManagement} />
                     <Route path={`${match.path}/team-management`} component={TeamManagement} />
                     <Route path={`${match.path}/unit-management`} component={UnitManagement} />
                     <Route path={`${match.path}/item-management`} component={ItemManagement} />
                     <Route path={`${match.path}/add-project-management`} component={AddNewProject} />
                     <Route path={`${match.path}/view-project-management`} component={ViewNewProject} />
                     <Route path={`${match.path}/add-site-management`} component={AddNewSite} />
                     <Route path={`${match.path}/view-site-management`} component={ViewSite} />
                     <Route path={`${match.path}/add-requisition`} component={AddRequisition} />
                     <Route path={`${match.path}/view-requisition`} component={ViewRequisition} />
                     <Route path={`${match.path}/edit-requisition`} component={EditRequsition} />

                     {/* to={`${match.path}/view-project-management`}
            <Route path="/logout" component={Logout}></Route>
            */}
                  </Switch>
               </div>
            </div>
         </div>
      );
   }
}

export default withRouter(Dashboard);