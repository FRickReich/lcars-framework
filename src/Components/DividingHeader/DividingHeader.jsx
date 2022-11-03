import React from 'react';
import PropTypes from 'prop-types';

import './DividingHeader.scss';

export const DividingHeader = ({
    className,
    size,
    leftTitle,
    centerTitle,
    rightTitle,
    ...props
}) => {
    return (
        <div
            className={`DividingHeader ${
                className !== undefined ? className : ''
            }`}
        >
            {leftTitle ? (
                <>
                    <div className="DividingHeader_startCap"></div>
                    <div className="DividingHeader__leftTitle">{leftTitle}</div>
                </>
            ) : (
                <div className="DividingHeader_startCapNoText"></div>
            )}
            <div className="DividingHeader__spaceDivider"></div>
            {centerTitle && (
                <div className="DividingHeader__centerTitle">{centerTitle}</div>
            )}
            <div className="DividingHeader__spaceDivider"></div>
            {rightTitle ? (
                <>
                    <div className="DividingHeader__rightTitle">
                        {rightTitle}
                    </div>
                    <div className="DividingHeader_endCap"></div>
                </>
            ) : (
                <div className="DividingHeader_endCapNoText"></div>
            )}
        </div>
    );
};

DividingHeader.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    leftTitle: PropTypes.string,
    centerTitle: PropTypes.string,
    rightTitle: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DividingHeader.defaultProps = {
    className: undefined,
    leftTitle: '',
    centerTitle: '',
    rightTitle: '',
    size: 'small',
};
