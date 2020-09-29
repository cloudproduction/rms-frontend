import React, { Component } from 'react';

class AddNewProject extends Component {
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
                        <div className="row">
                            <div className="col">
                                {/* <div class="mb15">
                          <a href="#" class="btn btn-sm btn-info btn-base float-right">
                              <i class="fa fa-plus-square-o" aria-hidden="true"></i> &nbsp; Add New
                          </a>
                      </div> */}
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-info-circle mr-1">
                                            </i> Add New Project
              </h3>
                                    </div>
                                    <div className="card-body formarea filtercard">
                                        <form action>
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
                                                            <option value="saab">Enable</option>
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
                                                            <option data-tokens="A" value="saab">Client A</option>
                                                            <option data-tokens="B" value="saab">Client B</option>
                                                            <option data-tokens="C" value="saab">Client C</option>
                                                            <option data-tokens="D" value="saab">Client D</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group">
                                                        <label>
                                                            <label> Department</label>
                                                        </label>
                                                        <select className="selectpicker" data-live-search="true">
                                                            <option data-tokens="A" value="saab">Department A</option>
                                                            <option data-tokens="B" value="saab">Department B</option>
                                                            <option data-tokens="C" value="saab">Department C</option>
                                                            <option data-tokens="D" value="saab">Department D</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <label>
                                                        <label>Team</label>
                                                    </label>
                                                    <select className="selectpicker" data-live-search="true">
                                                        <option data-tokens="A" value="saab">Team A</option>
                                                        <option data-tokens="B" value="saab">Team B</option>
                                                        <option data-tokens="C" value="saab">Team C</option>
                                                    </select>
                                                </div>
                                                {/* <div class="col-md-4 col-sm-6">
                                      <div class="form-group">

                                          <label>Assigned Team</label>

                                          <select class="form-control select2 select2-hidden-accessible" data-placeholder="Select Department" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                              <option value="A">Team A</option>
                                                  <option value="B">Team B</option>
                                                  <option value="W">Team C</option>
                                                  <option value="Y">Team D</option>
                                          </select>
                                      </div>
                                  </div> */}
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Managerial Approvar</label>
                                                        <select className="selectpicker" multiple data-live-search="true">
                                                            <option value="saab">MR. Akib</option>
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
                                                            <option value="saab">MR. Abdullah</option>
                                                            <option value="saab"> Mr.Jamal</option>
                                                            <option value="saab">Mr. hasem</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Accounts Approvar</label>
                                                        <select className="selectpicker" multiple data-live-search="true">
                                                            <option value="saab">MR. kawsar</option>
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
                                                            <option selected="selected">Pending</option>
                                                            <option value="saab">Running</option>
                                                            <option value="saab">Complete</option>
                                                            <option value="saab">Handover</option>
                                                            <option value="saab">Postponed</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn btn-info btn-base float-right">
                                                        <i className="fa fa-save">
                                                        </i>
                      Submit
                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        {/* <div class="row">
                                  <div class="col-4">
                                      <button class="btn btn btn-info btn-base float-right>
                                      <i class=" fa fa-save ">
                                              </i> Submit
                                      </button>
                                  </div>
                              </div> */}
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

export default AddNewProject;