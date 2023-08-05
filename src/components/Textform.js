import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase wsa clicked "+ text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () => {
        let no = text.toLowerCase();
        setText(no);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleOnChange = (event) => {
        //console.log("Onchange");
        setText(event.target.value);
    }
    const handle = () => {
        let ni = '';
        setText(ni)
    }
    const handleCopy = ()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handle}>Clear</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} character</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to preview here"}</p>
            </div>
        </>
    )
}
Textform.propTypes = {
    heading: PropTypes.string.isRequired
};
Textform.defaultProps = { heading: 'Enter Text' };