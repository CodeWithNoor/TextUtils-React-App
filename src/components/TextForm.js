// **************** useState *****************
// some values enter the text and equal to setText
// text update help with the help of setText
// useState help to make a some variables


// **************** onChange Event *****************
// How to use onChange in React?

// Add an onChange Handler to an Input
// Pass an Input Value to a Function in a React Component
// Storing an Input Value Inside of State
// onchange event handler is the same, but used in camel-cased

import React, {useState} from 'react';


export default function TextForm(props) {
    
    // Here Below we Convert String to UpperCase.
    // We Get text value through textarea 'value' attribute,
    // and then convert string to UpperCase

    // ****** toUpperCase **********
    const handleUpperClick = ()=>{
        // console.log("you clicked me" + text);
        setText(text.toUpperCase()); // Here we set text
        props.showAlert("Conert to Upper Case", "success");
    };
    
    // ****** toLowerCase **********
    const handleLowerClick = ()=>{
        // console.log("you clicked me" + text);
        setText(text.toLowerCase()); // Here we set text
        props.showAlert("Conert to Lower Case", "success");
    }; 
    
    // ****** Submit **********
    const handleSubmitClick = ()=>{
        // console.log("you clicked me" + text);
        setText(`Submitted your form successfully:     ${new Date().toLocaleTimeString()}  -  ${new Date().toLocaleDateString()}`);
        props.showAlert("Form has been submitted", "success");
    };    
    
    // ****** Clear **********
    const handleClearClick = ()=>{
        // console.log("you clicked me" + text);
        setText("");
    }  
    
    // ****** onChange **********
    const handleonClick = (event)=>{
        console.log("OnChange");
        // Here We set the onChange value through target which is provided by Event 
        // And event is provided by onChange
        setText(event.target.value);
    };
    
    // ****** Remove whits spaces **********
    const handlerRemoveSpaces = () => {
        const Text = text.split(/[ ]+/);
        setText(Text.join(" "));
        props.showAlert("Remove extra spaces", "success");
      };
    

    // ****** Copy Text **********
    const handleCopy = ()=>{
        var text = document.getElementById("textArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");

    };

    // Declare a New State variable, Which we will call 'Text' 
    // 1st variable is By Default set which is write in useState
    // 2nd variable is Update and Set value which we get in handleUpperCaseClick Function  

    let [text, setText] = useState("State of components....");
    // text = 'new text'; // wrong way to change the state
    // setText=("Enter you text here...") // correct way to change the state
    
    return (
        <>
        <div className='container my-4' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-4" />
            <textarea className="form-control my-3" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleonClick} id="textArea" rows="6"></textarea>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light " onClick={handleUpperClick} >Convert to Upper Case</button>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light" onClick={handleLowerClick} >Convert to Lower Case</button>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light" onClick={handleSubmitClick} >Submit</button>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light" onClick={handleClearClick} >Clear Text</button>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-dark btn-sm mx-2 text-light" onClick={handlerRemoveSpaces}>Remove Extra Spaces</button>
        </div>

        {/* ************************************** Add more logics ***************************************** */}
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary...</h3>
        <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.069 * text.split(" ").length}</b> minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview its here..."}</p>
        </div>
        </>
    );
}

