import React, { Component } from 'react';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3><a href="index.html" style={{ color: 'white' }}> RMS </a></h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="user_management.html" style={{ textDecoration: 'none' }}><i className="fa fa-angle-right" /> User Management RBA </a>
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

        );
    }
}

export default Sidebar;