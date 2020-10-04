import React, { Component } from 'react';

class BootstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (



       
<div className="modal fade " show={this.state.showModal} onHide={this.close} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Client
        </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    ×
          </span>
                            </button>
                        </div>
                        <div className="modal-body">
                           {this.props.children}
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





        );
    }
}

export default BootstrapModal; 