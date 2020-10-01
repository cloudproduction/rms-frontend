import React, { Component } from 'react';

function InvalidFeedBack({message}) {
    return (
        <div className="invalid-feedback">
        {message}
    </div>
    )
}

export default InvalidFeedBack