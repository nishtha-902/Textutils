import React,{useState} from 'react'   //rfc(shorthand for writing full func format of textform)
//usestate is a hook in react
export default function Textform(props) {
  
  const handleUpClick=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!","secondary")
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!","secondary")
  }
  const handleExtra=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!","success")
  }
  const handleOnChange=(event)=>{      //to type in textarea
    setText(event.target.value)
  }
  const [text,setText]=useState('')    //text is a variable which is in a state of showing this msg and to update this 
                                                             //variable you have to use func "setText" defined in [ ]
//   text="new";      wrong way to set 
//   setText("new");  correct                                                           
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#011110':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-10" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary my-3 mx-5" onClick={handleLowClick} >Convert to lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleExtra} >Remove Extra Spaces</button>
        <button className="btn btn-success my-3 mx-5" onClick={handleCopy} >Copy Text</button>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h6>Your text has {text.split(" ").length} words and {text.length} characters</h6>
          <h6>Average time to read your text must be {0.008*text.split(" ").length} minutes</h6>
          <h3 className="p my-3">Preview</h3>
          <p>{text}</p>
        </div>
    </div>
    </>
  )
}
