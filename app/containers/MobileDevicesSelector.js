import React from 'react';
import DeviceBox from '../components/DeviceBox';
// import { connect } from 'react-redux';

const MobileDevicesSelector = () => {
    return (
        <div>
            <DeviceBox deviceInfo={{brand: 'Apple', model: 'iPhone 6'}} />
        </div>
    );
};

export default MobileDevicesSelector;
