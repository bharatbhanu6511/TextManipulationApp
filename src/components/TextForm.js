import React, {useState} from 'react'

// console.log(useState('egg'));

function TextForm(props) {
    const [text, setText] = useState(`Enter text here`)
    const Upcase=()=>{
        // console.log(`upcase button was clicked`);
        setText(text.toUpperCase())
        props.showAlert(`converted to uppercase`,`warning`)
    }
    const handleOnChange=(event)=>{
        // console.log(`onchange fired`);
        setText(event.target.value)
    }
    const clearAll=(event)=>{
        // console.log(`onchange fired`);
        setText(``)
        props.showAlert(`cleared all text`,`danger`)
    }
    return (
        <>
        <div className='container' style={{color:props.mode===`light`?`black`:`white`}}>
            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div> */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className={`form-control`} style={{backgroundColor:props.mode===`light`?`white`:`gray`,color:props.mode===`light`?`black`:`white`}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={Upcase}>Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={clearAll}>Clear All</button>
        </div>
        <div className="container my-4" style={{color:props.mode===`light`?`black`:`white`}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words</p>
            <p>{text.length} characters</p>
        </div>
        </>
    )
}

export default TextForm
