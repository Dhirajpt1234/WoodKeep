import React, { useState } from 'react'


export default function TextForm(prop) {

    const [mystyle2, setmystyle2] = useState({
        color: 'black'
    })

    const [text, setText] = useState("Enter the text here");

    const [btnText, setBtnText] = useState("make red");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClick1 = () => {
        setText(text.toUpperCase());
        prop.showAlert("converted to uppercase!", "success")

    }

    const handleOnClick2 = () => {
        setText(text.toLowerCase())
        prop.showAlert("converted to lowercase!", "success")
    }

    const handleOnClick3 = () => {
        setText("");
    }


    const handleMakeRed = () => {

        if (mystyle2.color === 'black') {
            setmystyle2({
                color: 'red'
            })
            setBtnText("make normal");
        }
        else {
            setmystyle2({
                color: 'black'
            })
            setBtnText("make red");
        }
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (<>
       
        <div className='container ' >
            <div className=" mb-3" >
                <h1 className='my-4 text-' style={{ backgroundColor: prop.mode === "light" ? "white" : "#6082B6", color: prop.mode === "dark" ? "white" : "black" }} > {prop.title} </h1>
                <textarea value={text} style={{ backgroundColor: prop.mode === "dark" ? "#6F8FAF" : "white", color: prop.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} className="form-control" id="myBox" cols="30" rows="10"></textarea>

            </div>

            <button disabled= {text.length === 0} className='btn btn-primary mr- 2 my-2' onClick={handleOnClick1} >Make text Uppercase</button>
            <button  disabled= {text.length === 0} className='btn btn-primary mx-2' onClick={handleOnClick2} >Make text Lowercase</button>
            <button  disabled= {text.length === 0} className='btn btn-primary mx-2' onClick={handleOnClick3} >Clear text</button>
            <button  disabled= {text.length === 0} className='btn btn-primary mx-2' onClick={handleMakeRed} >{btnText}</button>
            <button  disabled= {text.length === 0} className='btn btn-primary mx-2' onClick={handleCopy} >copy text</button>

        </div>

        <div className="container my-4" style={{ backgroundColor: prop.mode === "light" ? "white" : "#6082B6", color: prop.mode === "dark" ? "white" : "black" }} >
            <h2  >
                Your text Analysis
            </h2>

            <p>{text.length} characters</p>
            <p> {text.split("").filter((element) => {return element.length !== 0}).length} words </p>

        </div>


    </>
    )
}

// TextForm.propTypes = {
//     title: PropTypes.string,
    // subTitle: PropTypes.string,
    // sub: PropTypes.string,
//     mode : PropTypes.string

// }