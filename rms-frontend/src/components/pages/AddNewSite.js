import React, { Component } from 'react';

class AddNewSite extends Component {
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
                              <i class="fa fa-list" aria-hidden="true"></i> &nbsp; Table List
                          </a>
                      </div> */}
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-info-circle">
                                            </i> Add New Site
              </h3>
                                    </div>
                                    <div className="card-body formarea filtercard">
                                        <form >
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
                                                        <select className="form-control" style={{ width: '100%' }} tabIndex={-1} aria-hidden="true">
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
                                                        <textarea className="form-control" rows={3} defaultValue={"                                                    "} />
                                                    </div>
                                                </div>
                                                {/* <div class="col-md-4 col-sm-6">
                                          <div class="form-group">
                                              <label>Total Requisition</label>
                                              <input class="form-control" id="PB" name="budget" required="" type="number" step="0.01" placeholder="Total Requisition">
                                          </div>
                                      </div>
                                      <div class="col-md-4 col-sm-6">
                                          <div class="form-group">
                                              <label> Requisition count</label>
                                              <input class="form-control" id="PB" name="budget" required="" type="number" step="0.01" placeholder="Requisition count">
                                          </div>
                                      </div> */}
                                                <div className="col-12">
                                                    <button className="btn btn btn-info btn-base float-right">
                                                        <i className="fa fa-save">
                                                        </i>
                      Submit
                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default AddNewSite;