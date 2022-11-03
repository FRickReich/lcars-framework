import React from 'react';
import PropTypes from 'prop-types';
import './Screen.scss';

export const Screen = ({ className, children, ...props }) => {
    return (
        <div
            className={`
                Screen ${className !== undefined ? className : ''}
                Screen__padding-large
            `}
        >
            {children}
        </div>
    );
};

Screen.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    children: PropTypes.node,
};

Screen.defaultProps = {
    className: undefined,
    children: undefined,
};
