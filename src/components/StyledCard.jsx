import React from 'react'

const StyledCard = () => {
    const cardStyle = {
        backgroundColor: '#42a529ff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };
    const textStyle = {
        color: '#ffffffff',        
    };
    return (
        <div style={cardStyle}> <h2 style={textStyle}>Styled Card Component</h2>
            <p style={textStyle}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aut magnam quasi exercitationem modi. Error, sequi. Quidem quisquam modi doloribus. Reiciendis exercitationem inventore consequuntur ipsa ut nemo quam ea necessitatibus.</p>


        </div>


    )
}

export default StyledCard
