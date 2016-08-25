import React, { PropTypes } from 'react';

const DeviceBox = ({ deviceInfo }) => {
    return (
        <div className="deviceBoxContainer">
            <div className="deviceImg">
                <i className="fa fa-mobile fa-2x"></i>
            </div>
            <div className="deviceBrand">
                {deviceInfo.brand}
            </div>
            <div className="deviceModel">
                {deviceInfo.model}
            </div>
        </div>
    );
};

DeviceBox.propTypes = {
    deviceInfo: PropTypes.object
};

export default DeviceBox;
