import React from 'react'
import PropTypes from 'prop-types';
import { COLORS } from '../../const/colors';

function CircleIcon({
    color
}) {
    return (
        <>
            <div className="circle-ico" />

            <style jsx>{`
                .circle-ico {
                    background-color: ${COLORS[color] ? COLORS[color] : COLORS.green};
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                }   
                .circle-ico:hover{
                    opacity:1;
                    background:#222a4c;
                    transition:4s;
                }
            
            `}</style>
        </>
    )
}

CircleIcon.propTypes = {
    color: PropTypes.string
}

export default CircleIcon;