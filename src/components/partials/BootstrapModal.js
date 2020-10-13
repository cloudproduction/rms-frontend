import React, { Component } from 'react';


class BootstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal:this.props.openModal
        };
    }

  

    
    render() {
        // console.log('14 Bootstrap modal', this.props.CloseModal);
        // document.getElementsByClassName('modal-backdrop').style.display = 'block';
        // document.body.innerHTML += '<div class="modal-backdrop fade show" style="display:block"></div>'
        if (this.state.openModal === true) {
            document.getElementById('back_drop').style.cssText='display:block'
        }
        
       

        return (


       
            <div id="bootstrap_modal" className={"modal fade " + (this.state.openModal === true ? 'show' : '')} style={this.state.openModal === true ? { display: 'block' } : {}}  tabIndex={-1}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {this.props.modalTitle}
        </h5>
                            <button onClick={this.props.modalHandler} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    ×
          </span>
                            </button>
                        </div>
                        <div className="modal-body" style={{'paddingBottom':'0'}}>
                           {this.props.children}
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
        </button>
                            <button type="button" className="btn btn-info btn-base">
                                Save changes
        </button>
                        </div> */}
                    </div>
                </div>
            </div>





        );
    }
}

export default BootstrapModal; 
