import React, { Component } from 'react';

class ViewNewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="layout_content">
                    {/* <div class="card-header">
              <h3 class="text-center">
                  View all project
              </h3>

          </div> */}
                    <div className="container">
                        {/* <div class="card-header mb-4">
                  <h5 align="center">View All Projects</h5>
              </div> */}
                        <div className="card table-card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Project List
          </h3>
                                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right">
                                    <i className="fa fa-search" />&nbsp;
            Advanced Search
          </button>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Project</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select project">
                                                        <option>Project A </option>
                                                        <option>Project B</option>
                                                        <option>Project C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Client</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Client">
                                                        <option>Abdullah</option>
                                                        <option>Noor</option>
                                                        <option>Mr. Hasan</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Department</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Department">
                                                        <option>Civil</option>
                                                        <option>Mehcanical</option>
                                                        <option>Electrical</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Requisition Status</label>
                                                    <select className="form-control" id="exampleFormControlSelect1" title="Select Requisition Status">
                                                        <option>Enable</option>
                                                        <option>Disable</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Team</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Team">
                                                        <option data-tokens="A">Team A</option>
                                                        <option data-tokens="B">Team B</option>
                                                        <option data-tokens="C">Team C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Start Date </label>
                                                    <div className="input-group date" data-provide="datepicker">
                                                        <input type="text" className="form-control" placeholder="Start Date" id="startdate" />
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-th">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Expected Completion Date </label>
                                                    <div className="input-group date" data-provide="datepicker">
                                                        <input type="text" className="form-control" placeholder="Start Date" id="startdate" />
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-th">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Completion  Date </label>
                                                    <div className="input-group date" data-provide="datepicker">
                                                        <input type="text" className="form-control" placeholder="Start Date" id="startdate" />
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-th">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Project Status</label>
                                                    <select className="form-control" title="Select project status">
                                                        <option>Pending</option>
                                                        <option value="saab">Running</option>
                                                        <option value="saab">Complete</option>
                                                        <option value="saab">Handover</option>
                                                        <option value="saab">Postponed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Project ID</label>
                                                    <input className="form-control" id="PI" name="gender" required type="number" placeholder="Project ID" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <button type="submit" className="btn btn-sm btn-info btn-base float-right">
                                                    Submit
                  </button>
                                            </div>
                                            <div className="form-group col-md-6">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1">
                                            </i> ERP Management system
              </h3>
                                        <div className="float-right">
                                            {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a> */}
                                            <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#ErpModal">
                                                <i className="fas fa-eye" />
                                            </button>
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                <i className="fa fa-pencil" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <table className="table table-bordered mb0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="mr-1">Project ID:</b> 1029
                      {/* <span class="base-color">
															1029
														</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Client Name">CN :</b> Munna
                      {/* <span class="base-color">
															Munna
														</span> */}
                                                    </td>
                                                    <td> <b className="mr-1">Project Budget :</b> 20,000
                      {/* <span class="base-color"> 20,000 </span> */}
                                                    </td>
                                                    <td><b className="mr-1">Project Status :</b> <span className="badges badge-info">Running</span>
                                                        {/* <span class="base-color">Running</span> */}
                                                    </td>
                                                    <td><b className="mr-1">Sites :</b> <a href="site_management.html">5</a>
                                                        {/* <span class="base-color"><a href="site_management.html">5</a> </span>  */}
                                                    </td>
                                                    <td><b className="mr-1" title="Total Requisition">TR:</b> 50
                      {/* <span class="base-color">50</span>  */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b className="mr-1" title="Average Requisition"> AR:</b> 10
                      {/* <span class="base-color">10</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Start date">SD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Completion Date">CD:</b> 28/07/2020
                      {/* <span class="base-color">28/07/2020</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Expected Completion Date">ECD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Assigned Team">AT:</b> Team A
                      {/* <span class="base-color">A</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1">Requisition:</b> Enable
                      {/* <span class="base-color">Enable</span> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1">
                                            </i> Requisition Management system
              </h3>
                                        <div className="float-right">
                                            {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a> */}
                                            <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#ErpModal">
                                                <i className="fas fa-eye" />
                                            </button>
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                <i className="fa fa-pencil" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <table className="table table-bordered mb0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="mr-1">Project ID:</b> 1029
                      {/* <span class="base-color">
															1029
														</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Client Name">CN :</b> Munna
                      {/* <span class="base-color">
															Munna
														</span> */}
                                                    </td>
                                                    <td> <b className="mr-1">Project Budget :</b> 20,000
                      {/* <span class="base-color"> 20,000 </span> */}
                                                    </td>
                                                    <td><b className="mr-1">Project Status :</b> <span className="badges badge-warning">Pending</span>
                                                        {/* <span class="base-color">Running</span> */}
                                                    </td>
                                                    <td><b className="mr-1">Sites :</b> <a href="site_management.html">5</a>
                                                        {/* <span class="base-color"><a href="site_management.html">5</a> </span>  */}
                                                    </td>
                                                    <td><b className="mr-1" title="Total Requisition">TR:</b> 50
                      {/* <span class="base-color">50</span>  */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b className="mr-1" title="Average Requisition"> AR:</b> 10
                      {/* <span class="base-color">10</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Start date">SD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Completion Date">CD:</b> 28/07/2020
                      {/* <span class="base-color">28/07/2020</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Expected Completion Date">ECD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Assigned Team">AT:</b> Team A
                      {/* <span class="base-color">A</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1">Requisition:</b> Enable
                      {/* <span class="base-color">Enable</span> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1">
                                            </i> Inventory Management system
              </h3>
                                        <div className="float-right">
                                            {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a> */}
                                            <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#ErpModal">
                                                <i className="fas fa-eye" />
                                            </button>
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                <i className="fa fa-pencil" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <table className="table table-bordered mb0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="mr-1">Project ID:</b> 1029
                      {/* <span class="base-color">
															1029
														</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Client Name">CN :</b> Munna
                      {/* <span class="base-color">
															Munna
														</span> */}
                                                    </td>
                                                    <td> <b className="mr-1">Project Budget :</b> 20,000
                      {/* <span class="base-color"> 20,000 </span> */}
                                                    </td>
                                                    <td><b className="mr-1">Project Status :</b> <span className="badges badge-success">Handover</span>
                                                        {/* <span class="base-color">Running</span> */}
                                                    </td>
                                                    <td><b className="mr-1">Sites :</b> <a href="site_management.html">5</a>
                                                        {/* <span class="base-color"><a href="site_management.html">5</a> </span>  */}
                                                    </td>
                                                    <td><b className="mr-1" title="Total Requisition">TR:</b> 50
                      {/* <span class="base-color">50</span>  */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b className="mr-1" title="Average Requisition"> AR:</b> 10
                      {/* <span class="base-color">10</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Start date">SD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Completion Date">CD:</b> 28/07/2020
                      {/* <span class="base-color">28/07/2020</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Expected Completion Date">ECD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Assigned Team">AT:</b> Team A
                      {/* <span class="base-color">A</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1">Requisition:</b> Enable
                      {/* <span class="base-color">Enable</span> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1">
                                            </i> Tech blog system
              </h3>
                                        <div className="float-right">
                                            {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a> */}
                                            <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#ErpModal">
                                                <i className="fas fa-eye" />
                                            </button>
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                <i className="fa fa-pencil" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <table className="table table-bordered mb0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="mr-1">Project ID:</b> 1029
                      {/* <span class="base-color">
															1029
														</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Client Name">CN :</b> Munna
                      {/* <span class="base-color">
															Munna
														</span> */}
                                                    </td>
                                                    <td> <b className="mr-1">Project Budget :</b> 20,000
                      {/* <span class="base-color"> 20,000 </span> */}
                                                    </td>
                                                    <td><b className="mr-1">Project Status :</b> <span className="badges badge-danger">Postponed</span>
                                                        {/* <span class="base-color">Running</span> */}
                                                    </td>
                                                    <td><b className="mr-1">Sites :</b> <a href="site_management.html">5</a>
                                                        {/* <span class="base-color"><a href="site_management.html">5</a> </span>  */}
                                                    </td>
                                                    <td><b className="mr-1" title="Total Requisition">TR:</b> 50
                      {/* <span class="base-color">50</span>  */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b className="mr-1" title="Average Requisition"> AR:</b> 10
                      {/* <span class="base-color">10</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Start date">SD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Completion Date">CD:</b> 28/07/2020
                      {/* <span class="base-color">28/07/2020</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Expected Completion Date">ECD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Assigned Team">AT:</b> Team A
                      {/* <span class="base-color">A</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1">Requisition:</b> Enable
                      {/* <span class="base-color">Enable</span> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1">
                                            </i> Job Site system
              </h3>
                                        <div className="float-right">
                                            {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a> */}
                                            <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#ErpModal">
                                                <i className="fas fa-eye" />
                                            </button>
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                <i className="fa fa-pencil" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <table className="table table-bordered mb0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b className="mr-1">Project ID:</b> 1029
                      {/* <span class="base-color">
															1029
														</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Client Name">CN :</b> Munna
                      {/* <span class="base-color">
															Munna
														</span> */}
                                                    </td>
                                                    <td> <b className="mr-1">Project Budget :</b> 20,000
                      {/* <span class="base-color"> 20,000 </span> */}
                                                    </td>
                                                    <td><b className="mr-1">Project Status :</b> <span className="badges badge-primary">Complete</span>
                                                        {/* <span class="base-color">Running</span> */}
                                                    </td>
                                                    <td><b className="mr-1">Sites :</b> <a href="site_management.html">5</a>
                                                        {/* <span class="base-color"><a href="site_management.html">5</a> </span>  */}
                                                    </td>
                                                    <td><b className="mr-1" title="Total Requisition">TR:</b> 50
                      {/* <span class="base-color">50</span>  */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><b className="mr-1" title="Average Requisition"> AR:</b> 10
                      {/* <span class="base-color">10</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Start date">SD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Completion Date">CD:</b> 28/07/2020
                      {/* <span class="base-color">28/07/2020</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Expected Completion Date">ECD:</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1" title="Assigned Team">AT:</b> Team A
                      {/* <span class="base-color">A</span> */}
                                                    </td>
                                                    <td>
                                                        <b className="mr-1">Requisition:</b> Enable
                      {/* <span class="base-color">Enable</span> */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <div class="card table-card">
                          <div class="card-header">
                              <h3 class="float-left">
                                  <i class="fa fa-table mr-1">
											</i> Inventory Management system
                              </h3>
                              <div class="float-right">
                                  <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#ErpModal">Details</a>
                                  <button class="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                      <i class="fa fa-trash-o"></i>
                                  </button>
                                  <button class="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                      <i class="fa fa-pencil"></i>
                                  </button>
                              </div>
                          </div>
                          <div class="card-body-list formarea filtercard table-responsive">
                              <table class="table table-bordered mb0">
                                  <tbody>
                                      <tr>
                                          <td>
                                              Project ID:
                                              <span class="base-color">
															1029
														</span>
                                          </td>
                                          <td>
                                              Client Name :
                                              <span class="base-color">
															Munna
														</span>
                                          </td>
                                          <td> Project Budget : <span class="base-color">  <a href="site_management.html"> 20,000</a> </span>

                                          </td>
                                          <td>Project Status : <span class="base-color">Running</span> </td>
                                          <td>Sites : <span class="base-color"><a href="site_management.html">5</a> </span> </td>
                                          <td>Total Requisition: <span class="base-color">50</span> </td>
                                      </tr>
                                      <tr>
                                          <td>Average Requisition: <span class="base-color">10</span> </td>
                                          <td>
                                              Start date: <span class="base-color">20/08/2019</span>
                                          </td>
                                          <td>
                                              Completion Date: <span class="base-color">28/07/2020</span>
                                          </td>


                                          <td>
                                              Expected Completion Date: <span class="base-color">20/08/2019</span>
                                          </td>
                                          <td>Assigned Team: <span class="base-color">A</span>

                                          </td>
                                          <td> Requisition: <span class="base-color">Enable</span> </td>


                                      </tr>
                                      

                                  </tbody>
                              </table>
                          </div>
                      </div> */}
                            </div>
                            <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">
                                                Edit Project
                </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">
                                                    ×
                  </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form >
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="name">Name</label>
                                                            <input className="form-control" id="name" name="name" required type="text" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Project ID</label>
                                                            <input className="form-control" id="PI" name="gender" required type="number" placeholder="Project ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Requisition Status</label>
                                                            <select className="form-control" style={{ width: '100%' }} tabIndex={-1} aria-hidden="true">
                                                                <option value="selected">Enable</option>
                                                                <option value="saab">Disable</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>
                                                                <label> Client</label>
                                                            </label>
                                                            <select className="selectpicker" data-live-search="true">
                                                                <option data-tokens="A">Client A</option>
                                                                <option data-tokens="B">Client B</option>
                                                                <option data-tokens="C">Client C</option>
                                                                <option data-tokens="D">Client D</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>
                                                                <label> Department</label>
                                                            </label>
                                                            <select className="selectpicker" data-live-search="true">
                                                                <option data-tokens="A">Department A</option>
                                                                <option data-tokens="B">Department B</option>
                                                                <option data-tokens="C">Department C</option>
                                                                <option data-tokens="D">Department D</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <label>
                                                            <label>Team</label>
                                                        </label>
                                                        <select className="selectpicker" data-live-search="true">
                                                            <option data-tokens="A">Team A</option>
                                                            <option data-tokens="B">Team B</option>
                                                            <option data-tokens="C">Team C</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Managerial Approvar</label>
                                                            <select className="selectpicker" multiple data-live-search="true">
                                                                <option value="selected">MR. Akib</option>
                                                                <option value="saab"> Mr.Bappy</option>
                                                                <option value="saab">Mr. kamal</option>
                                                                <option value="saab">Mr. Hasan</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Administrative Approvar</label>
                                                            <select className="selectpicker" multiple data-live-search="true">
                                                                <option value="selected">MR. Abdullah</option>
                                                                <option value="saab"> Mr.Jamal</option>
                                                                <option value="saab">Mr. hasem</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Accounts Approvar</label>
                                                            <select className="selectpicker" multiple data-live-search="true">
                                                                <option value="selected">MR. kawsar</option>
                                                                <option value="saab"> Mr.Hamid</option>
                                                                <option value="saab">Mr. Julfikar</option>
                                                                <option value="saab">Mr. Maruf</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Project Budget</label>
                                                            <input className="form-control" id="PB" name="budget" required type="number" step="0.01" placeholder="Project Budget" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="phone">
                                                                Start Date:
                        </label>
                                                            <div className="input-group date" data-provide="datepicker">
                                                                <input type="text" className="form-control" placeholder="Start Date" id="startdate" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-th">
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="phone">
                                                                Expected Completion Date
                        </label>
                                                            <div className="input-group date" data-provide="datepicker">
                                                                <input type="text" className="form-control" placeholder=" Expected Completion Date" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-th">
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="phone">
                                                                Completion Date
                        </label>
                                                            <div className="input-group date" data-provide="datepicker">
                                                                <input type="text" className="form-control" placeholder="Completion Date" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-th">
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="form-group">
                                                            <label>Project Status</label>
                                                            <select className="form-control" style={{ width: '100%' }} tabIndex={-1} aria-hidden="true">
                                                                <option value="selected">Pending</option>
                                                                <option value="saab">Running</option>
                                                                <option value="saab">Complete</option>
                                                                <option value="saab">Handover</option>
                                                                <option value="saab">Postponed</option>
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
                                            <button type="button" className="btn btn-info btn-base">
                                                Save changes
                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="ErpModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="card">
                                            <div className="card-header ">
                                                <h5 className="ml-4">ERP Management system</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">
                                                        ×
                    </span>
                                                </button>
                                            </div>
                                            <div className="card-body-detail">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <b>Project name : </b> ERP Management system <br />
                                                                <b>Project Budget: </b> 20,000 <br />
                                                                <b>Sites: </b> 5 <br />
                                                                <b>Average Requisition :</b> 10 <br />
                                                                <b>Expected Completion Date:</b> 10/10/2018 <br />
                                                                <b> Assigned Team: </b> Team A <br />
                                                                <b>Assigned Department:</b> Civil <br />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <b> Projrct ID:</b> 2006 <br />
                                                                <b>Project  status:</b> Running <br />
                                                                <b>Total Requisition :</b> 50 <br />
                                                                <b>Start date :</b> 20/05/2018 <br />
                                                                <b>Completion Date:</b> 20/10/2018 <br />
                                                                <b>Requisition: </b> Enable <br />
                                                            </div>
                                                        </div>
                                                        {/* <div class="row">
                                                  <div class="col-md-4">

                                                  </div>
                                                  <div class="col-md-4">

                                                  </div>
                                                  <div class="col-md-4">

                                                  </div>
                                              </div> */}
                                                        {/* <div class="mt-4 mb-4">
                                                  
                                                  
                                                  
                                              </div> */}
                                                        <div className="row mt-5">
                                                            <div className="col-md-4">
                                                                <b>Managerial Approvar :</b><br /> Akib <br /> khan <br /> Hasan
                        </div>
                                                            <div className="col-md-4">
                                                                <b>Administrative Approvar:</b><br /> Abdullah <br /> Noor <br /> kamal <br /> Jamal
                        </div>
                                                            <div className="col-md-4">
                                                                <b>Accounts Approvar:</b> <br /> fahim <br /> adnan <br /> jakir
                        </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="col-md-6">
                                              <ul class="list-group">
                                                  <li class="list-group-item">Phone : 01926610425</li>
                                                  <li class="list-group-item">Status : Active</li>
                                                  <li class="list-group-item">Contact Info: 29/3 Lalmatia </li>

                                              </ul>
                                          </div> */}
                                                </div>
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ViewNewProject;