import React, { Component } from 'react';

class EditRequsition extends Component {
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
                                <div className="mb15">
                                    <a href="#" className="btn btn-sm btn-info btn-base float-right">
                                        <i className="fa fa-list" aria-hidden="true" /> &nbsp; Table List
            </a>
                                </div>
                                <div className="card table-card">
                                    <div className="card-header">
                                        <h3 className="float-left">
                                            <i className="fa fa-info-circle">
                                            </i> Edit Requisition
              </h3>
                                    </div>
                                    <div className="card-body formarea filtercard">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="name">Project</label><br />
                                                    <select className="selectpicker" data-live-search="true">
                                                        <option data-tokens="A">Project A</option>
                                                        <option data-tokens="B">Project B</option>
                                                        <option data-tokens="C">Project C</option>
                                                        <option data-tokens="D">Project D</option>
                                                        <option data-tokens="E">Project E</option>
                                                        <option data-tokens="F">Project F</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group ">
                                                    <label htmlFor="name ">Site</label><br />
                                                    <select className="selectpicker" data-live-search="true">
                                                        <option data-tokens="A">Site A</option>
                                                        <option data-tokens="B">Site B</option>
                                                        <option data-tokens="C">Site C</option>
                                                        <option data-tokens="D">Site D</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group ">
                                                    <label htmlFor="phone ">
                                                        Working Date:
                    </label>
                                                    <div className="input-group date " data-provide="datepicker ">
                                                        <input type="text " className="form-control " placeholder="Working Date " />
                                                        <div className="input-group-addon ">
                                                            <i className="fa fa-th ">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group ">
                                                    <label htmlFor="phone ">
                                                        Payment Date:
                    </label>
                                                    <div className="input-group date " data-provide="datepicker ">
                                                        <input type="text " className="form-control " placeholder="Payment Date " />
                                                        <div className="input-group-addon ">
                                                            <i className="fa fa-th ">
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group ">
                                                    <label htmlFor="name "> Payment type</label><br />
                                                    <select className="form-control " style={{ width: '100%' }} tabIndex={-1} aria-hidden="true ">
                                                        <option value=" volvo "> Mobile banking</option>
                                                        <option value="saab ">check</option>
                                                        <option value="volvo ">cash</option>
                                                        <option value="saab ">others</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group ">
                                                    <label>Payment Remarks</label>
                                                    <input className="form-control " id="name " name="name " required=" " type="text " placeholder="Payment Remarks " />
                                                </div>
                                            </div>
                                            <div className=" col-md-4 ">
                                                <div className="form-group ">
                                                    <label>Contact No</label>
                                                    <input className="form-control " id="name1 " name="name1 " required=" " type="text " placeholder="Contact No " />
                                                </div>
                                            </div>
                                            <div className="col-md-4 co-sm-6 ">
                                                <div className="form-group ">
                                                    <label>Purpose</label>
                                                    <input className="form-control " id="name2 " name="name2 " required=" " type="text " placeholder="Purpose " />
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 ">
                                                <div className="form-group">
                                                    <label htmlFor="phone ">
                                                        Requisition type
                    </label>
                                                    <div className="area-ckeckbox-radio">
                                                        <div className="radio radio-info radio-inline">
                                                            <input type="radio" id="inlineRadio1 " defaultValue="option1 " name="radioInline " defaultChecked=" " />
                                                            <label htmlFor="inlineRadio1 ">
                                                                Pre Requisition
                        </label>
                                                        </div>
                                                        <div className="radio radio-info radio-inline ml15 ">
                                                            <input type="radio" id="inlineRadio2 " defaultValue="option1 " name="radioInline " />
                                                            <label htmlFor="inlineRadio2 ">
                                                                Post Requisition
                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 ">
                                                <div className="form-group ">
                                                    <label htmlFor="comment ">Description</label>
                                                    <textarea className="form-control " rows={3} id="comment " defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                  <div class="col-md-4 col-sm-6">
                                      <div class="form-group">
                                          <label>Managerial Approval</label>
                                          <select class="form-control" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                          <option selected="selected">MR. Akib</option>
                                          <option value="saab"> Mr.Bappy</option>
                                          <option value="saab">Mr. kamal</option>
                                          <option value="saab">Mr. Hasan</option>

                                      </select>
                                      </div>
                                  </div>

                                  <div class="col-md-4 col-sm-6">
                                      <div class="form-group">
                                          <label>Administrative Approval</label>
                                          <select class="form-control" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                              <option selected="selected">MR. Abdullah</option>
                                              <option value="saab"> Mr.Jamal</option>
                                              <option value="saab">Mr. hasem</option>
                                              
                                      </select>
                                      </div>
                                  </div>

                                  <div class="col-md-4 col-sm-6">
                                      <div class="form-group">
                                          <label>Accounts Approval</label>
                                          <select class="form-control" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                              <option selected="selected">MR. kawsar</option>
                                              <option value="saab"> Mr.Hamid</option>
                                              <option value="saab">Mr. Julfikar</option>
                                              <option value="saab">Mr. Maruf</option>
                                      </select>
                                      </div>
                                  </div>
                              </div> */}
                                        <div className="row ">
                                            <div className="col-md-4 ">
                                                <div className="form-group ">
                                                    <label htmlFor="name ">Submitted By</label><br />
                                                    <select className="selectpicker" data-live-search="true">
                                                        <option data-tokens="A">Mr A</option>
                                                        <option data-tokens="A">Mr B</option>
                                                        <option data-tokens="A">Mr C</option>
                                                        <option data-tokens="A">Mr D</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="form-group ">
                                                    <label htmlFor="name ">Prepared By</label><br />
                                                    <select className="selectpicker" data-live-search="true">
                                                        <option data-tokens="A">Mr A</option>
                                                        <option data-tokens="A">Mr B</option>
                                                        <option data-tokens="A">Mr C</option>
                                                        <option data-tokens="A">Mr D</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card table-card repeater pdb15 ">
                                        <div className="card-header ">
                                            <h3 className="float-left ">
                                                Select Requisition Item
                </h3>
                                        </div>
                                        {/* <select class="selectpicker" multiple data-live-search="true"> */}
                                        <div className="allforms ">
                                            <div className="card-body formarea filtercard ">
                                                <div className="extraform ">
                                                    <div className="row ">
                                                        <div className="col-md-12 "> &nbsp;</div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <select className="selectpicker" data-live-search="true">
                                                                    <option data-tokens="A">Item A</option>
                                                                    <option data-tokens="B">Item B</option>
                                                                    <option data-tokens="C">Item C</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <select className="form-control" style={{ width: '100%' }} tabIndex={-1} aria-hidden="true " placeholder="Unit ">
                                                                    <option value="volvo ">Kg</option>
                                                                    <option value="saab ">gm</option>
                                                                    <option value="volvo ">Ltr</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <input className="form-control" type="text " placeholder="Quantity " /></div>
                                                        </div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <input className="form-control" type="text " placeholder="Price Per Unit " /></div>
                                                        </div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <input className="form-control" type="text " placeholder="Total Price " disabled /></div>
                                                        </div>
                                                        <div className="col-md-2 ">
                                                            <div className="form-group ">
                                                                <input className="form-control" type="text " placeholder="Remarks " /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row " style={{ margin: 5 }}>
                                            <div className="col-md-12 ">
                                                <hr />
                                            </div>
                                            <div className="col-md-8 ">
                                                <a href="#" id="addNewForm" className="btn btn-sm btn-info btn-base float-left fl3 mt10"><i className="fa fa-plus-square-o " /> &nbsp; ADD NEW</a>
                                                <div className="float-right text-muted mt-2">
                                                    <h5>Grand Total</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-4 ">
                                                <div className="form-group ">
                                                    <input className="form-control " type="text " placeholder="Grand Total " disabled /></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="col-md-12 ">
                                                <button className="btn btn btn-info btn-base float-right mt15 fr3 ">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Sayket Client add code End*/}
                </div>
            </div>

        );
    }
}

export default EditRequsition;