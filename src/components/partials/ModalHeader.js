import React, { Component } from 'react';

const ModalHeader = ({ title }) => (
    <div>
        <h5 className="modal-title" id="exampleModalLabel">
            {title}
          </h5>
    </div>
);

export default ModalHeader;