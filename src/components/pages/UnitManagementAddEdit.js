import React, { Component } from 'react';

class UnitManagementAddEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            status: true
        };
        this.onChangeUnitName = this.onChangeUnitName.bind(this);
        this.onChangeStatu = this.onChangeStatu.bind(this);
    }

    onChangeUnitName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeStatu(e) {
        console.log(e.target.value);
        if (e.target.value === 'Active') {
            this.setState({
                status: true
            });
        } else {
            this.setState({
                status: false
            });
        }

    }

    render() {
        return (
                      <div>
<div className="modal fade" id="formModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Add Unit
        </h5>
                                <button type="button" className="close" data-dismiss="modal"
                                    aria-label="Close"
                                    onClick= {this.props.onHide}>
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
                                                        <label htmlFor="exampleInputEmail1">Unit Name</label>
                                                        <input type="text" className="form-control"
                                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                                            onChange={this.onChangeUnitName}
                                                            value={this.state.name} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlSelect1">Status</label>
                                                        <select className="form-control" id="exampleFormControlSelect1"  onChange={this.onChangeStatu}>
                                                            <option value="">Select Option</option>
                                                            <option value="Active">Active</option>
                                                            <option value="Deactive">Deactive</option>
                                                            
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
                                <button type="button" className="btn btn-info btn-base"
                                    onClick={this.addUnittData}
                                >
                                    Submit
        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnitManagementAddEdit;