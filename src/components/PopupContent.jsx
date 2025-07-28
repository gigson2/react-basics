import React from 'react'
import { createPortal } from 'react-dom'

export const PopupContent = ({ copied }) => {
    const sectionStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    return createPortal(
        <section style={sectionStyle}>
            {copied && (
                <div>
                    <p>Copied to clipboard</p>
                </div>
            )}
        </section>,
        document.querySelector('#popup-section')
    )
}
