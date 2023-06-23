import React, { useEffect } from 'react';
// import TopToBottom from '../common/lib/TopToBottom';
import TopToBottom from './lib/TopToBottom';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.back-to-top');
    });
    return (
        <>
            <div className={`back-to-top ${className}`}>
                <a href="#">
                    <i className="fa fa-arrow-up" />
                </a>
            </div>
        </>
    );
}

export default BackToTop;
