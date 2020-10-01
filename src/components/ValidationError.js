import React, { Component } from 'react';

class ValidationError extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        // console.log('11', typeof(this.props.error_message));
        return (
            <div>
                {
                    
                         Object.keys(this.props.error_message).map(index => 
                    // console.log(typeof this.props.error_message[index])
                        
                        Object.keys(this.props.error_message[index]).map((i) =>
                            <li className="alert alert-danger" key={i}>{this.props.error_message[index][i]}</li>
                        )
                    )
                   
                }
            </div>
        );
    }
}

export default ValidationError;