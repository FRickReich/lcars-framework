import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import './Button.scss';

export const Button = ({
    className,
    textVertical,
    textHorizontal,
    rounded,
    label,
    animation,
    divided,
    ...props
}) => {
    return (
        <motion.button
            initial={{ opacity: 1 }}
            animate={animation === true ? { opacity: 0 } : { opacity: 1 }}
            transition={
                animation === true
                    ? {
                          duration: 0.25,
                          yoyo: Infinity,
                          repeatDelay: 1,
                          ease: 'easeInOut',
                      }
                    : {}
            }
            whileHover={{
                opacity: 0.75,
                transition: { duration: 0.1 },
            }}
            className={`Button 
                ${className !== undefined ? className : ''} 
                Button__textVertical-${textVertical}
                Button__textHorizontal-${textHorizontal}
                ${divided !== 'none' ? `Button__divider-${divided}` : ''}
                ${rounded === 'left' ? 'Button__rounded-left' : ''}
                ${rounded === 'right' ? 'Button__rounded-right' : ''}
                ${
                    rounded === 'both'
                        ? 'Button__rounded-left Button__rounded-right'
                        : ''
                }
                `}
        >
            <span className="Button__text">{label}</span>
        </motion.button>
    );
};

Button.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    textVertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    textHorizontal: PropTypes.oneOf(['left', 'center', 'right']),
    rounded: PropTypes.oneOf(['none', 'left', 'right', 'both']),
    label: PropTypes.string.isRequired,
    animation: PropTypes.bool,
    divided: PropTypes.oneOf(['none', 'left', 'right']),
};

Button.defaultProps = {
    className: undefined,
    label: 'Default Button',
    textVertical: 'bottom',
    textHorizontal: 'right',
    rounded: 'none',
    animation: false,
    divided: 'none',
};
