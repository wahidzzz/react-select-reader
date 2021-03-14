import React from 'react';
import "./SelectRead.css"

const synth=window.speechSynthesis;

// let buttonText=<span><i className="ri-play-line"></i>Read</span>;
// var voices=[];
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
        alert("Please Select Text To Read");
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
                <li className="list-item"><button><i className="ri-settings-3-line"></i>Settings</button></li>
            </ul>
        </div>
    );
}

export default SelectRead