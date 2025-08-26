import {useState} from "react";

type TextFormProps = {
  heading:string;
mode: "light" | "dark";
showAlert: (message: string, type: string) => void;
};

export default function TextForm(props: TextFormProps ) {
  const [text, setText] = useState("");

    const handleClick = () => {
//console.log('Submit was clicked' +text)
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to uperCase", "success")
    }

     const handlebutton = () => {
//console.log('Submit was clicked' +text)
let newText = text.toLowerCase();
setText(newText)
props.showAlert("Converted to lowerCase", "success")
    }

    const handleClear = () => {
//console.log('Submit was clicked' +text)
let newText = " ";
setText(newText)
props.showAlert("Clear", "success")
    }

      const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
//console.log('on change')
setText(event.target.value);
      };

  return (
    <>
<div className="textForm-container" style={{ backgroundColor: "white"}}>
    <h3 className="textform-heading">{props.heading}</h3>
  <textarea className="textform-textarea" value= {text} onChange={handleOnChange} id="myBox" rows={8}></textarea>

<div className="button-group">
<button className="btn btn-dark"  onClick={handleClick}> 
    Convert to UperCase
</button>
<button className="btn btn-primary"  onClick={handlebutton}> 
    Convert to LowerCase
</button>
<button className="btn btn-danger"  onClick={handleClear}> 
    Clear Text
</button>
</div>
</div>
 <div className="container my-3" >
    <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary</h3>
    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(" ").length} Words and {text.length} Chracters</p>
    <h4 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h4>
    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text}</p>
  </div>
  
  </>
  );
 }

