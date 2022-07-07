import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLowClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleClearClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!", "success")
    }
    
    //remove all the symbols
    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert("Text is extracted!", "success")
    }

    //to extract only the numbers in the text:
    const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join('');
    setText(res)
    props.showAlert("Number is extracted!", "success")
    };

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

  const [text, setText] = useState('');
  //text='new Text'; // wrong way to set text
  //setText=("new text"); //correct way to set text
  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#160841'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#160841'}}  id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick= {handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick= {handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick= {handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick= {handletextExtract}>Extract Text</button>
      <button className="btn btn-primary mx-1" onClick= {handleNumExtract}>Extract Number</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#160841'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview it here"}</p>
    </div>
    </>
  )
}