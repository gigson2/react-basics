import React from 'react'
import { PopupContent } from './PopupContent'

const CopyInput = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [copied, setCopied] = React.useState(false)
    const cardStyle = {
        backgroundColor: '#fffeaaff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };
    return (
        <div style={cardStyle}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {
                navigator.clipboard.writeText(inputValue).then(() => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000);
                })
            }}>Copy</button>
            <PopupContent copied={copied} />
        </div>
    )
}

export default CopyInput
