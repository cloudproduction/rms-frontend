import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class ViewRequisition extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { match, location, history } = this.props
        return (
            <div>
                <div className="layout_content">
                    <div className="container">
                        {/* <div class="card-header mb-4">
                  <h5 align="center">View All Requisitions</h5>
              </div> */}
                        <div className="card table-card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Requisition List
          </h3>
                                <button type="button" data-toggle="collapse" data-target="#collapseFilter" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right" onclick="change('addIcon')">
                                    <i className="fa fa-search" />&nbsp;
            Advanced search
          </button>
                            </div>
                            <div id="collapseFilter" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Project</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select project">
                                                        <option value="a">Project A </option>
                                                        <option value="a">Project B</option>
                                                        <option value="a">Project C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Site Name</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Site Name">
                                                        <option value="a">Site A </option>
                                                        <option value="a">Site B</option>
                                                        <option value="a">Site C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Requisition Type</label>
                                                    <select className="selectpicker" title="Requisition Type">
                                                        <option value="a">Prerequisite</option>
                                                        <option value="a">Postrequisite</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Working Date </label>
                                                    <div className="input-group date" data-provide="datepicker">
                                                        <input type="text" className="form-control" placeholder="Working Date" id="startdate" />
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-th">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Payment Date </label>
                                                    <div className="input-group date" data-provide="datepicker">
                                                        <input type="text" className="form-control" placeholder="Payment Date" id="startdate" />
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-th">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Payment  Type </label>
                                                    <select className="selectpicker" title="Select Payment  Typee">
                                                        <option value="a">Mobile Banking</option>
                                                        <option value="a">cash</option>
                                                        <option value="a">Cheque</option>
                                                        <option value="a">others</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Client </label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Client">
                                                        <option value="a">Mr .A</option>
                                                        <option value="a"> Mr. B</option>
                                                        <option value="a"> Mr. C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Department</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Department">
                                                        <option value="a">Civil</option>
                                                        <option value="a">Mehcanical</option>
                                                        <option value="a">Electrical</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Requisition No</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select Requisition No">
                                                        <option value="a">2001 </option>
                                                        <option value="a">2002</option>
                                                        <option value="a">3005</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlSelect1">Prepared By</label>
                                                    <select className="selectpicker" data-live-search="true" title="Select User">
                                                        <option value="a">Mr .A</option>
                                                        <option value="a"> Mr. B</option>
                                                        <option value="a"> Mr. C</option>
                                                    </select>
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
                            <div className="col-md-12">
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1" style={{ fontSize: 16 }}>
                                            </i> Requisition A
              </h3>
                                        <div className="float-right">
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit">
                                                <Link to="/dashboard/edit-requisition" ><i className="fa fa-pencil"> </i> </Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <div className="teble-responsive">
                                            <table className="table table-bordered mb0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan>
                                                            <b className="mr-1">  Project:</b> ERP management system
                        {/* <span class="base-color">
                                                          ERP management system
                                                      </span> */}
                                                        </td>
                                                        <td colSpan>
                                                            <b className="mr-1"> Site Name :</b> SiteA
                        {/* <span class="base-color">
                                                          SiteA
                                                      </span> */}
                                                        </td>
                                                        <td colSpan>
                                                            <b className="mr-1">Purpose:</b> Item purchase
                        {/* <span class="base-color">Item purchase </span> */}
                                                        </td>
                                                        <td colSpan title="Payment Remarks">
                                                            <b className="mr-1">PR :</b> Lorem ipsum dolor
                        {/* <span class="base-color"> Lorem ipsum dolor</span> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b className="mr-1">Requisition Type :</b> Prerequisite
                        {/* <span class="base-color">Prerequisite</span> */}
                                                        </td>
                                                        <td colSpan title="Working Date"><b className="mr-1">WD:</b> 20/08/2019
                        {/* <span class="base-color">20/08/2019</span> */}
                                                        </td>
                                                        <td colSpan title="Payment date">
                                                            <b className="mr-1"> PD :</b> 20/08/2019
                        {/* <span class="base-color">20/08/2019</span> */}
                                                        </td>
                                                        <td colSpan>
                                                            <b className="mr-1">Payment type:</b> Mobile Banking
                        {/* <span class="base-color">Mobile Banking </span> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b className="mr-1">Requisition Cost:</b> 15,725
                        {/* <span class="base-color">15,725</span> */}
                                                        </td>
                                                        <td colSpan>
                                                            <b className="mr-1"> Contact No:</b> 01245835447
                        {/* <span class="base-color">01245835447</span> */}
                                                        </td>
                                                        <td title="Submitted By"><b className="mr-1"> SB :</b> Akib ahmed
                        {/* <span class="base-color">  Akib  ahmed</span> */}
                                                        </td>
                                                        <td colSpan title="Prepared by">
                                                            <b className="mr-1">PB :</b> kamal ahmed khan
                        {/* <span class="base-color">kamal ahmed khan</span> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td colSpan>
                                                            <form>
                                                                <div className="form-group row">
                                                                    {/* <label for="" class="ml-3  mt-2">MA</label> */}
                                                                    <label htmlFor className="ml-3  mt-2" title="Managerial Approval"><b>MA :</b></label>
                                                                    <div className="col-sm-10">
                                                                        <select className="form-control form-control-sm" id>
                                                                            <option selected="selected">Pending</option>
                                                                            <option value="saab"> Approved</option>
                                                                            <option value="saab">Rejected</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </td>
                                                        <td>
                                                            <h6 title="Administrative Approval"> <b>AA:</b> <span className="badge badge-info ml-2">Pending</span></h6>
                                                        </td>
                                                        <td>
                                                            <h6 title="Accounts Approval"> <b>AA:</b> <span className="badge badge-info ml-2">Pending</span></h6>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="accordionform custom-ac">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card table-card requsition_card">
                                                    <div className="card-header customacc" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                                        <div className="mb-0">
                                                            <h3 className="float-left title-full"><i className="fa fa-list mr-1" /> Details : <span className="float-right"><i className="fa fa-angle-down " aria-hidden="true" /></span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-2"><b>Requisition</b> </div>
                                                                <div className="col-md-1"><b>Item</b> </div>
                                                                <div className="col-md-1"><b>Unit</b> </div>
                                                                <div className="col-md-1"><b>Qty</b></div>
                                                                <div className="col-md-1"><b>PPUnit</b> </div>
                                                                <div className="col-md-2"><b>Total Price</b> </div>
                                                                <div className="col-md-4"><b>Remarks</b><br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className>Requisition A</span></div>
                                                                <div className="col-md-1"><span className>Item A</span></div>
                                                                <div className="col-md-1"><span className>Kg </span></div>
                                                                <div className="col-md-1"><span className>75</span></div>
                                                                <div className="col-md-1"><span className>20.45</span></div>
                                                                <div className="col-md-2"><span className>500.75 </span></div>
                                                                <div className="col-md-4"><span className>lorem ipsom dolor orem ipsom
                            </span>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className>Requisition A</span></div>
                                                                <div className="col-md-1"><span className>Item A</span></div>
                                                                <div className="col-md-1"><span className>Kg </span></div>
                                                                <div className="col-md-1"><span className>75</span></div>
                                                                <div className="col-md-1"><span className>20.45</span></div>
                                                                <div className="col-md-2"><span className>500.75 </span></div>
                                                                <div className="col-md-4"><span className>lorem ipsom doloripsom dolor orem ipsom
                            </span> </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <b>Description:</b>
                                                                    <span className> Lorem ipsum dolor sit amet, consectetur adipiscing elitt. Nam tristique molestie lacus sit amet convallis. Aliquam risus erat, tempor eget mollis vitae, tristique non nisi. Morbi bibendum erat sed semper aliquet. </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1" style={{ fontSize: 16 }}>
                                            </i> Requisition B
              </h3>
                                        <div className="float-right">
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit">
                                                <a href="edit_requisition.html"><i className="fa fa-pencil"> </i> </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <div className="teble-responsive">
                                            <table className="table table-bordered mb0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan>
                                                            Project:
                        <span className="base-color">
                                                                ERP management system
                        </span>
                                                        </td>
                                                        <td colSpan>
                                                            Site Name :
                        <span className="base-color">
                                                                SiteA
                        </span>
                                                        </td>
                                                        <td colSpan>
                                                            Purpose: <span className="base-color">Item purchase </span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment Remarks:
                        <span className="base-color"> Lorem ipsum dolor</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Requisition Type
                        <span className="base-color">Prerequisite</span>
                                                        </td>
                                                        <td colSpan>Working Date:
                        <span className="base-color">20/08/2019</span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment date: <span className="base-color">20/08/2019</span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment type: <span className="base-color">Mobile Banking </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Requisition Cost: <span className="base-color">15,725</span>
                                                        </td>
                                                        <td colSpan>
                                                            Contact No: <span className="base-color">01245835447</span>
                                                        </td>
                                                        <td> Submitted By: <span className="base-color">  Akib  ahmed</span>
                                                        </td>
                                                        <td colSpan>
                                                            Prepared by:<span className="base-color">kamal ahmed khan</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <h6 title="Managerial Approval"> MA: <span className="badge badge-success ml-2">Approved</span></h6>
                                                        </td>
                                                        <td>
                                                            <form>
                                                                <div className="form-group row">
                                                                    {/* <label for="" class="ml-3  mt-2">MA</label> */}
                                                                    <label htmlFor className="ml-3  mt-2" title="Addministrative Approval">AA</label>
                                                                    <div className="col-sm-10">
                                                                        <select className="form-control form-control-sm" id="colFormLabelSm">
                                                                            <option selected="selected">Pending</option>
                                                                            <option value="saab"> Approved</option>
                                                                            <option value="saab">Rejected</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </td>
                                                        <td>
                                                            <h6 title="Accounts Approval"> AA: <span className="badge badge-info ml-2">Pending</span></h6>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="accordionform custom-ac">
                                            <div className="accordion" id="accordionExample">
                                                {/* DM form */}
                                                <div className="card table-card requsition_card">
                                                    <div className="card-header customacc" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                                        <div className="mb-0">
                                                            <h3 className="float-left title-full"><i className="fa fa-list mr-1" /> Details : <span className="float-right"><i className="fa fa-angle-down " aria-hidden="true" /></span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-2">Requisition </div>
                                                                <div className="col-md-1">Item </div>
                                                                <div className="col-md-1">Unit </div>
                                                                <div className="col-md-1">Qty</div>
                                                                <div className="col-md-1">PPUnit </div>
                                                                <div className="col-md-2">Total Price </div>
                                                                <div className="col-md-4">Remarks<br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className="base-color">Requisition A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Item A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Kg </span></div>
                                                                <div className="col-md-1"><span className="base-color">75</span></div>
                                                                <div className="col-md-1"><span className="base-color">20.45</span></div>
                                                                <div className="col-md-2"><span className="base-color">500.75 </span></div>
                                                                <div className="col-md-4"><span className="base-color">lorem ipsom dolor orem ipsom
                            </span>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className="base-color">Requisition A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Item A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Kg </span></div>
                                                                <div className="col-md-1"><span className="base-color">75</span></div>
                                                                <div className="col-md-1"><span className="base-color">20.45</span></div>
                                                                <div className="col-md-2"><span className="base-color">500.75 </span></div>
                                                                <div className="col-md-4"><span className="base-color">lorem ipsom doloripsom dolor orem ipsom
                            </span> </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <b>Description:</b>
                                                                    <span className> Lorem ipsum dolor sit amet, consectetur adipiscing elitt. Nam tristique molestie lacus sit amet convallis. Aliquam risus erat, tempor eget mollis vitae, tristique non nisi. Morbi bibendum erat sed semper aliquet. </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-table mr-1" style={{ fontSize: 16 }}>
                                            </i> Requisition C
              </h3>
                                        <div className="float-right">
                                            <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                <i className="fa fa-trash-o" />
                                            </button>
                                            <button className="btn btn-sm btn-edit">
                                                <a href="edit_requisition.html"><i className="fa fa-pencil"> </i> </a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body-list formarea filtercard table-responsive">
                                        <div className="teble-responsive">
                                            <table className="table table-bordered mb0">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan>
                                                            Project:
                        <span className="base-color">
                                                                ERP management system
                        </span>
                                                        </td>
                                                        <td colSpan>
                                                            Site Name :
                        <span className="base-color">
                                                                SiteA
                        </span>
                                                        </td>
                                                        <td colSpan>
                                                            Purpose: <span className="base-color">Item purchase </span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment Remarks:
                        <span className="base-color"> Lorem ipsum dolor</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Requisition Type
                        <span className="base-color">Prerequisite</span>
                                                        </td>
                                                        <td colSpan>Working Date:
                        <span className="base-color">20/08/2019</span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment date: <span className="base-color">20/08/2019</span>
                                                        </td>
                                                        <td colSpan>
                                                            Payment type: <span className="base-color">Mobile Banking </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Requisition Cost: <span className="base-color">15,725</span>
                                                        </td>
                                                        <td colSpan>
                                                            Contact No: <span className="base-color">01245835447</span>
                                                        </td>
                                                        <td> Submitted By: <span className="base-color">  Akib  ahmed</span>
                                                        </td>
                                                        <td colSpan>
                                                            Prepared by:<span className="base-color">kamal ahmed khan</span> </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <h6 title="Managerial Approval"> MA: <span className="badge badge-success ml-2">Approved</span></h6>
                                                        </td>
                                                        <td>
                                                            <h6 title="Administrative Approval"> AA: <span className="badge badge-success ml-2">Approved</span></h6>
                                                        </td>
                                                        <td>
                                                            <form>
                                                                <div className="form-group row">
                                                                    <label htmlFor className="ml-3  mt-2" title="Accounts Approval">AA</label>
                                                                    <div className="col-sm-8">
                                                                        <select className="form-control form-control-sm" id="colFormLabelSm">
                                                                            <option selected="selected">Pending</option>
                                                                            <option value="saab"> Approved</option>
                                                                            <option value="saab">Rejected</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="accordionform custom-ac">
                                            <div className="accordion" id="accordionExample">
                                                {/* DM form */}
                                                <div className="card table-card requsition_card">
                                                    <div className="card-header customacc" data-toggle="collapse" data-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                                        <div className="mb-0">
                                                            <h3 className="float-left title-full"><i className="fa fa-list mr-1" /> Details : <span className="float-right"><i className="fa fa-angle-down " aria-hidden="true" /></span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div id="collapsefour" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-2">Requisition </div>
                                                                <div className="col-md-1">Item </div>
                                                                <div className="col-md-1">Unit </div>
                                                                <div className="col-md-1">Qty</div>
                                                                <div className="col-md-1">PPUnit </div>
                                                                <div className="col-md-2">Total Price </div>
                                                                <div className="col-md-4">Remarks<br />
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className="base-color">Requisition A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Item A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Kg </span></div>
                                                                <div className="col-md-1"><span className="base-color">75</span></div>
                                                                <div className="col-md-1"><span className="base-color">20.45</span></div>
                                                                <div className="col-md-2"><span className="base-color">500.75 </span></div>
                                                                <div className="col-md-4"><span className="base-color">lorem ipsom dolor orem ipsom
                            </span>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-2"><span className="base-color">Requisition A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Item A</span></div>
                                                                <div className="col-md-1"><span className="base-color">Kg </span></div>
                                                                <div className="col-md-1"><span className="base-color">75</span></div>
                                                                <div className="col-md-1"><span className="base-color">20.45</span></div>
                                                                <div className="col-md-2"><span className="base-color">500.75 </span></div>
                                                                <div className="col-md-4"><span className="base-color">lorem ipsom doloripsom dolor orem ipsom
                            </span> </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <b>Description:</b>
                                                                    <span className> Lorem ipsum dolor sit amet, consectetur adipiscing elitt. Nam tristique molestie lacus sit amet convallis. Aliquam risus erat, tempor eget mollis vitae, tristique non nisi. Morbi bibendum erat sed semper aliquet. </span>
                                                                </div>
                                                            </div>
                                                            {/* <div class="table-responsive">
                                                      <table class="table table-bordered  ">
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      Requisition <br><span class="base-color">Requisition A</span>
                                                                  </td>
                                                                  <td> Item <br><span class="base-color">Item A</span>

                                                                  </td>
                                                                  <td>
                                                                      Unit <br><span class="base-color">Kg </span>
                                                                  </td>
                                                                  <td>
                                                                      Quantity <br> <span class="base-color">75</span>
                                                                  </td>
                                                                  <td> Price Per Unit <br> <span class="base-color">20.45</span>

                                                                  </td>
                                                                  <td>
                                                                      Total Price <br> <span class="base-color">500.75 </span>
                                                                  </td>


                                                              </tr>
                                                              <tr>
                                                                  <td colspan="6">
                                                                      Remarks <br><span class="base-color">lorem ipsom dolor </span>
                                                                  </td>

                                                              </tr>


                                                          </tbody>
                                                      </table>
                                                      <table class="table table-bordered  ">
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      Requisition <br><span class="base-color">Requisition A</span>
                                                                  </td>
                                                                  <td> Item <br><span class="base-color">Item A</span>

                                                                  </td>
                                                                  <td>
                                                                      Unit <br><span class="base-color">Kg </span>
                                                                  </td>
                                                                  <td>
                                                                      Quantity <br> <span class="base-color">75</span>
                                                                  </td>
                                                                  <td> Price Per Unit <br> <span class="base-color">20.45</span>

                                                                  </td>
                                                                  <td>
                                                                      Total Price <br> <span class="base-color">500.75 </span>
                                                                  </td>


                                                              </tr>
                                                              <tr>
                                                                  <td colspan="6">
                                                                      Remarks <br><span class="base-color">lorem ipsom dolor </span>
                                                                  </td>

                                                              </tr>


                                                          </tbody>
                                                      </table>

                                                  </div> */}
                                                        </div>
                                                    </div>
                                                </div>
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

export default ViewRequisition;