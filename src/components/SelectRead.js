import React from 'react';
import Popup from 'reactjs-popup';
import "./SelectRead.css"

const synth=window.speechSynthesis;
const botReply=[
            "Please select a text for me to read",
            "Beep bop beep bop, did not find any text to read",
            "Use mouse to select text for me to read",
            "I can't read minds yet please select text for me to read",
            "Zippity Zoppity can't find the selected property",
            "Calculating, Calculating, Calculating, Calculating,Calculating, Nope didn't find anything"
        ];
// let buttonText=<span><i className="ri-play-line"></i>Read</span>;
var voices = synth.getVoices();
console.log(voices.map(({ value, label }, index) =>console.log(value,label,index)));
// console.log(voices[0].name);
function startReading() {
    var readText=getSelectionText();
    if (readText!=="") {
        // let readerButton=document.getElementById("readerButton");
        // readerButton.setAttribute("onClick",{stopReading});
        // readerButton.innerHTML='<i class="ri-stop-line"></i>Pause';
        var utterThis = new SpeechSynthesisUtterance(readText);
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }else{
        utterThis = new SpeechSynthesisUtterance(botReply[Math.floor(Math.random()*botReply.length)]);
        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }
    
}
function stopReading() {
    if (synth.speaking) {
        synth.pause();
        // let stopButton=document.getElementById("readerButton");
        // stopButton.setAttribute("onClick",{startReading});
        // stopButton.innerHTML='<i className="ri-play-line"></i>Read';
        
    }
   else{
       alert("nothing");
   }
}
//stackoverflow code
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function SelectRead() {
    return (
        <div>
            <ul className="list-container">
                <li className="list-item">{
                    synth.speaking 
                    ? <button onClick={stopReading}><i className="ri-stop-line"></i>Pause</button>
                    :<button onClick={startReading}><i className="ri-play-line"></i>Read</button>
                    }
                   
                </li>
                <Popup trigger={<li className="list-item"><button><i className="ri-settings-3-line"></i>Settings</button></li>} position="top right">
                    <div> 
                        <select>
                            {voices.map(({ value, label }, index) => <option value={value} key={index}>{label}</option>)}
                        </select> 
                    </div>
                    
                </Popup>
            </ul>
           
        </div>
    );
}

export default SelectRead