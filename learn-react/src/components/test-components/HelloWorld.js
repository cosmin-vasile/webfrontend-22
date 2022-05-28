import React from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.css';

const HelloWorld = (props) => {
    const { title, nr, label, comp } = props;

    return (
        <div className="title">
            {title} - {nr} - {label} - {comp}
        </div>
    );
};

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HelloWorld;