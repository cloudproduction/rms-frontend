import React, { Component } from 'react';

class ViewSite extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div>
  <div className="layout_content">
    <div className="container">
      {/* <div class="card-header mb-4">
                  <h5 align="center">View All Sites</h5>

              </div> */}
      <div className="card table-card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
          </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{font: 15}} /> Site List
          </h3>
          <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right" onclick="change('addIcon')">
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
                    <label htmlFor="exampleFormControlSelect1">Department</label>
                    <select className="selectpicker" data-live-search="true" title="Select Department">
                      <option>Civil</option>
                      <option>Mehcanical</option>
                      <option>Electrical</option>
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
                    <label htmlFor="exampleFormControlSelect1">Project</label>
                    <select className="selectpicker" data-live-search="true" title="Select project">
                      <option>Project A </option>
                      <option>Project B</option>
                      <option>Project C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Site Name</label>
                    <input className="form-control" id="name" name="name" required type="text" placeholder="Site Name" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Site ID</label>
                    <input className="form-control" id="name" name="name" required type="text" placeholder="Site ID " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Site Status</label>
                    <select className="form-control" id="exampleFormControlSelect1" title="Select Site Status">
                      <option>Pending</option>
                      <option>Running</option>
                      <option>Completed</option>
                      <option>Handovered</option>
                      <option>Postponed</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
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
                    <label htmlFor="exampleFormControlSelect1">Handover  Date </label>
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
                </i> Site A
              </h3>
              <div className="float-right">
                {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#SiteAModal"></a> */}
                <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#SiteAModal">
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
                      <b className="mr-1">Project:</b> RMS
                      {/* <span class="base-color">
															RMS
														</span> */}
                    </td>
                    <td>
                      <b className="mr-1"> Site Name :</b> SiteA
                      {/* <span class="base-color">
															SiteA
														</span> */}
                    </td>
                    <td> <b className="mr-1">Site ID :</b> 3001
                      {/* <span class="base-color">  3001 </span> */}
                    </td>
                    <td colSpan={2}><b className="mr-1">Site Status :</b> Running
                      {/* <span class="base-color">Running</span> */}
                    </td>
                    <td title="Total Requisitions"> <b className="mr-1">TR:</b> 25
                      {/* <span class="base-color">25</span> */}
                    </td>
                    <td title="Requisition Count"> <b className="mr-1">RC:</b> <a href="requisition_management.html"> 5</a>
                      {/* <span class="base-color"><a href="requisition_management.html">5</a>
                                              </span> */}
                    </td>
                  </tr>
                  <tr>
                    <td title=" Start date">
                      <b className="mr-1">SD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Expected Completion Date">
                      <b className="mr-1"> ECD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Completion Date">
                      <b className="mr-1"> CD :</b> 20/08/2019
                      {/* <span class="base-color">28/07/2020</span> */}
                    </td>
                    <td title="Expected Handover date">
                      <b className="mr-1"> EHD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td colSpan={3} title="Handover date">
                      <b className="mr-1">HD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
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
                </i> Site B
              </h3>
              <div className="float-right">
                {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#SiteAModal"></a> */}
                <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#SiteAModal">
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
                      <b className="mr-1">Project:</b> RMS
                      {/* <span class="base-color">
															RMS
														</span> */}
                    </td>
                    <td>
                      <b className="mr-1"> Site Name :</b> SiteA
                      {/* <span class="base-color">
															SiteA
														</span> */}
                    </td>
                    <td> <b className="mr-1">Site ID :</b> 3001
                      {/* <span class="base-color">  3001 </span> */}
                    </td>
                    <td colSpan={2}><b className="mr-1">Site Status :</b> Running
                      {/* <span class="base-color">Running</span> */}
                    </td>
                    <td title="Total Requisitions"> <b className="mr-1">TR:</b> 25
                      {/* <span class="base-color">25</span> */}
                    </td>
                    <td title="Requisition Count"> <b className="mr-1">RC:</b> <a href="requisition_management.html"> 5</a>
                      {/* <span class="base-color"><a href="requisition_management.html">5</a>
                                              </span> */}
                    </td>
                  </tr>
                  <tr>
                    <td title=" Start date">
                      <b className="mr-1">SD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Expected Completion Date">
                      <b className="mr-1"> ECD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Completion Date">
                      <b className="mr-1"> CD :</b> 20/08/2019
                      {/* <span class="base-color">28/07/2020</span> */}
                    </td>
                    <td title="Expected Handover date">
                      <b className="mr-1"> EHD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td colSpan={3} title="Handover date">
                      <b className="mr-1">HD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
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
                </i> Site C
              </h3>
              <div className="float-right">
                {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#SiteAModal"></a> */}
                <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#SiteAModal">
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
                      <b className="mr-1">Project:</b> RMS
                      {/* <span class="base-color">
															RMS
														</span> */}
                    </td>
                    <td>
                      <b className="mr-1"> Site Name :</b> SiteA
                      {/* <span class="base-color">
															SiteA
														</span> */}
                    </td>
                    <td> <b className="mr-1">Site ID :</b> 3001
                      {/* <span class="base-color">  3001 </span> */}
                    </td>
                    <td colSpan={2}><b className="mr-1">Site Status :</b> Running
                      {/* <span class="base-color">Running</span> */}
                    </td>
                    <td title="Total Requisitions"> <b className="mr-1">TR:</b> 25
                      {/* <span class="base-color">25</span> */}
                    </td>
                    <td title="Requisition Count"> <b className="mr-1">RC:</b> <a href="requisition_management.html"> 5</a>
                      {/* <span class="base-color"><a href="requisition_management.html">5</a>
                                              </span> */}
                    </td>
                  </tr>
                  <tr>
                    <td title=" Start date">
                      <b className="mr-1">SD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Expected Completion Date">
                      <b className="mr-1"> ECD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Completion Date">
                      <b className="mr-1"> CD :</b> 20/08/2019
                      {/* <span class="base-color">28/07/2020</span> */}
                    </td>
                    <td title="Expected Handover date">
                      <b className="mr-1"> EHD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td colSpan={3} title="Handover date">
                      <b className="mr-1">HD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
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
                </i> Site D
              </h3>
              <div className="float-right">
                {/* <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#SiteAModal"></a> */}
                <button className="btn btn-sm btn-edit mr-2" data-toggle="modal" data-target="#SiteAModal">
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
                      <b className="mr-1">Project:</b> RMS
                      {/* <span class="base-color">
															RMS
														</span> */}
                    </td>
                    <td>
                      <b className="mr-1"> Site Name :</b> SiteA
                      {/* <span class="base-color">
															SiteA
														</span> */}
                    </td>
                    <td> <b className="mr-1">Site ID :</b> 3001
                      {/* <span class="base-color">  3001 </span> */}
                    </td>
                    <td colSpan={2}><b className="mr-1">Site Status :</b> Running
                      {/* <span class="base-color">Running</span> */}
                    </td>
                    <td title="Total Requisitions"> <b className="mr-1">TR:</b> 25
                      {/* <span class="base-color">25</span> */}
                    </td>
                    <td title="Requisition Count"> <b className="mr-1">RC:</b> <a href="requisition_management.html"> 5</a>
                      {/* <span class="base-color"><a href="requisition_management.html">5</a>
                                              </span> */}
                    </td>
                  </tr>
                  <tr>
                    <td title=" Start date">
                      <b className="mr-1">SD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Expected Completion Date">
                      <b className="mr-1"> ECD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td title="Completion Date">
                      <b className="mr-1"> CD :</b> 20/08/2019
                      {/* <span class="base-color">28/07/2020</span> */}
                    </td>
                    <td title="Expected Handover date">
                      <b className="mr-1"> EHD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
                    </td>
                    <td colSpan={3} title="Handover date">
                      <b className="mr-1">HD :</b> 20/08/2019
                      {/* <span class="base-color">20/08/2019</span> */}
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
											</i> Site B
                              </h3>
                              <div class="float-right">
                                  <a href="#" class="badge badge-success mr-2" data-toggle="modal" data-target="#SiteAModal">Details</a>
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
                                              Project:
                                              <span class="base-color">
															ERP
														</span>
                                          </td>
                                          <td>
                                              Site Name :
                                              <span class="base-color">
															SiteA
														</span>
                                          </td>
                                          <td> Site ID : <span class="base-color">  3001 </span>

                                          </td>
                                          <td colspan="2">Site Status : <span class="base-color">Running</span> </td>

                                          <td>Total Requisitions:
                                              <br><span class="base-color">25</span> </td>
                                          <td>Requisition Count:
                                              <br> <span class="base-color"><a href="requisition_management.html">5</a></span> </td>

                                      </tr>
                                      <tr>
                                          <td>
                                              Start date: <span class="base-color">20/08/2019</span>
                                          </td>
                                          <td>
                                              Expected Completion Date: <span class="base-color">20/08/2019</span>
                                          </td>

                                          <td>
                                              Completion Date: <span class="base-color">28/07/2020</span>
                                          </td>
                                          <td>
                                              Expected Handover date: <span class="base-color">20/08/2019</span>
                                          </td>
                                          <td colspan="3">
                                              Handover date: <span class="base-color">20/08/2019</span>
                                          </td>


                                      </tr>
                                      <tr>
                                          <td colspan="7">
                                              <b> Description:</b>
                                              <span class=""> Lorem ipsum dolor sit amet, consectetur adipiscing elitt. Nam tristique molestie lacus sit amet convallis. Aliquam risus erat, tempor eget mollis vitae, tristique non nisi. Morbi bibendum erat sed semper aliquet. </span>
                                          </td>

                                      </tr>

                                  </tbody>
                              </table>
                          </div>
                      </div> */}
          {/* <div class="card table-card">
                          <div class="card-header">
                              <h3 class="float-left">
                                  <i class="fa fa-info-circle">
											</i> Inventory Management system
                              </h3>
                              <div class="float-right">
                                  <a href="" class="btn btn-sm btn-del mr10"><i class="fa fa-trash-o"></i></a>
                                  <a href="" class="btn btn-sm btn-edit"><i class="fa fa-pencil"></i></a>
                              </div>
                          </div>
                          <div class="card-body formarea filtercard table-responsive">
                              <table class="table table-bordered mb0">
                                  <tbody>
                                      <tr>
                                          <td>
                                              Project ID:
                                              <span class="base-color">
															1029
														</span>
                                          </td>
                                          <td colspan="2">
                                              Client Name :
                                              <span class="base-color">
															Munna
														</span>
                                          </td>
                                          <td> Project Budget : <span class="base-color">  20,000 </span>
                                          </td>
                                          <td>Project Status : <span class="base-color">Running</span> </td>
                                      </tr>
                                      <tr>
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
                                      <tr>
                                          <td>
                                              Assigned Department: <span class="base-color">Civil</span>
                                          </td>
                                          <td> Accounts Approval: <span class="disapproved">Disapproved</span>
                                          </td>
                                          <td>
                                              Managerial Approval:<br /> <span class="approved">Approved</span>
                                          </td>
                                          <td colspan="2">
                                              Administrative Approval :<br /> <span class="approved">Approved</span>
                                          </td>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      <div class="card table-card">
                          <div class="card-header">
                              <h3 class="float-left">
                                  <i class="fa fa-info-circle">
											</i> ERP Management system
                              </h3>
                              <div class="float-right">
                                  <a href="" class="btn btn-sm btn-del mr10"><i class="fa fa-trash-o"></i></a>
                                  <a href="" class="btn btn-sm btn-edit"><i class="fa fa-pencil"></i></a>
                              </div>
                          </div>
                          <div class="card-body formarea filtercard table-responsive">
                              <table class="table table-bordered mb0">
                                  <tbody>
                                      <tr>
                                          <td>
                                              Project ID:
                                              <span class="base-color">
															1029
														</span>
                                          </td>
                                          <td colspan="2">
                                              Client Name :
                                              <span class="base-color">
															Munna
														</span>
                                          </td>
                                          <td> Project Budget : <span class="base-color">  20,000 </span>
                                          </td>
                                          <td>Project Status : <span class="base-color">Running</span> </td>
                                      </tr>
                                      <tr>
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
                                      <tr>
                                          <td>
                                              Assigned Department: <span class="base-color">Civil</span>
                                          </td>
                                          <td> Accounts Approval: <span class="disapproved">Disapproved</span>
                                          </td>
                                          <td>
                                              Managerial Approval:<br /> <span class="approved">Approved</span>
                                          </td>
                                          <td colspan="2">
                                              Administrative Approval :<br /> <span class="approved">Approved</span>
                                          </td>
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
                  Edit Site
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <form action>
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Project</label>
                        <select className="selectpicker" data-live-search="true">&gt;
                          <option data-tokens="A">Project A</option>
                          <option data-tokens="B">Project B</option>
                          <option data-tokens="C">Project C</option>
                          <option data-tokens="D">Project D</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name"> Site Name</label>
                        <input className="form-control" id="name" name="name" required type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <label>Site ID</label>
                        <input className="form-control" id="PI" name="gender" required type="number" placeholder="Site ID" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone">
                          Start Date:
                        </label>
                        <div className="input-group date" data-provide="datepicker">
                          <input type="text" className="form-control" placeholder="Start Date" />
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
                        <label htmlFor="phone">
                          Expected Handover Date
                        </label>
                        <div className="input-group date" data-provide="datepicker">
                          <input type="text" className="form-control" placeholder=" Expected Handover Date" />
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
                          Handover Date
                        </label>
                        <div className="input-group date" data-provide="datepicker">
                          <input type="text" className="form-control" placeholder="Handover Date" />
                          <div className="input-group-addon">
                            <i className="fa fa-th">
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="form-group">
                        <label>Site Status</label> <br />
                        <select className="form-control" style={{width: '100%'}} tabIndex={-1} aria-hidden="true">
                          <option selected="selected">Pending</option>
                          <option value="saab">Running</option>
                          <option value="volvo">Complete</option>
                          <option value="saab">Handover</option>
                          <option value="saab">Postponed</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="amount">
                          Site Description:
                        </label>
                        <textarea className="form-control" rows={3} defaultValue={"                                                        "} />
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
        {/* View Details */}
        <div className="modal fade" id="SiteAModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="card">
                <div className="card-header ">
                  <h5 className="ml-4">Site A</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
                <div className="card-body-detail">
                  <div className="row">
                    <div className="col-md-12">
                      <b>Project: </b> ERP Management system <br />
                      <b> Site Name:</b> Site A <br />
                      <b> Site ID : </b> 2050 <br />
                      <b>Site   status:</b> Running <br />
                      <b>Total Requisitions: </b> 25 <br />
                      <b>Requisition Count:</b> 5
                      <div className="row mt-4 mb-4">
                        <div className="col-md-4">
                          <b>Start date</b> <br />20/05/2018
                        </div>
                        <div className="col-md-4">
                          <b>Expected Completion Date:</b> 10/10/2018
                        </div>
                        <div className="col-md-4">
                          <b>Completion Date:</b> <br /> 20/10/2018
                        </div>
                      </div>
                      <div className="row mt-4 mb-4">
                        <div className="col-md-4">
                          <b>Expected Handover date : </b> <br />20/05/2018
                        </div>
                        <div className="col-md-4">
                          <b>Handover date:</b> <br /> 10/10/2018
                        </div>
                      </div>
                      <div className="mt-4 mb-4 mr-4">
                        <b> Description : </b> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elitt. Nam tristique molestie lacus sit amet convallis. Aliquam risus erat, tempor eget mollis vitae, tristique non
                        nisi. Morbi bibendum erat sed semper aliquet. <br />
                      </div>
                    </div>
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

export default ViewSite;