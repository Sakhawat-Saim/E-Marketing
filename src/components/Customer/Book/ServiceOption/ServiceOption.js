import React from 'react';

const ServiceOption = (props) => {
    return (
            <option>{props.service.title}</option>
    );
};

export default ServiceOption;