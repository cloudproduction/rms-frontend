import React, { Component } from 'react';

class ItemManagement extends Component {
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
                                <div className="accordionform">
                                    <div className="accordion" id="accordionExample">
                                        {/* DM form */}
                                        <div className="card table-card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                </h2><h3 className="float-left"><i id="addIcon" className="fa fa-chevron-circle-down" style={{ font: 15 }} /> Requisition Item Management
                  </h3>
                                                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="btn btn-sm btn-info btn-base float-right">
                                                    <i className="fa fa-plus-square-o" />&nbsp;
                    Add New
                  </button>
                                            </div>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleInputEmail1">Item Name</label>
                                                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleFormControlSelect1">Status</label>
                                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                                        <option selected>Disable</option>
                                                                        <option>Enable</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-2">
                                                                <label htmlFor=" exampleFormControlSelect1">&nbsp;</label>
                                                                <button type="submit" className="btn btn-block btn-info btn-base float-right ">
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
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card table-card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>Item Name</th>
                                                        <th>Status</th>
                                                        <th width="80px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Travel</td>
                                                        <td><span className="disapproved">Deactive</span></td>
                                                        <td className="text-nowrap">
                                                            <div>
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                                    <i className="fa fa-pencil" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cost</td>
                                                        <td>Disable</td>
                                                        <td className="text-nowrap">
                                                            <div>
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                                    <i className="fa fa-pencil" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cost</td>
                                                        <td><span className="approved">Active</span></td>
                                                        <td className="text-nowrap">
                                                            <div>
                                                                <button className="btn btn-sm btn-del mr10" data-toggle="modal" data-target="#">
                                                                    <i className="fa fa-trash-o" />
                                                                </button>
                                                                <button className="btn btn-sm btn-edit" data-toggle="modal" data-target="#formModal">
                                                                    <i className="fa fa-pencil" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Item Name</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Sayket Client add code End*/}
                <div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Edit Requisition Item
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">
                                        ×
            </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Item Name</label>
                                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlSelect1">Status</label>
                                                        <select className="form-control" id="exampleFormControlSelect1">
                                                            <option selected>Disable</option>
                                                            <option>Enable</option>
                                                        </select>
                                                    </div>
                                                </div>
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
            </div>

        );
    }
}

export default ItemManagement;