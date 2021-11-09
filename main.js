var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Data = "";
var Box = "";

function start() {
    recognition.start();
    recognition.onresult = function(event) {
        console.log(event);
        Data = event.results[0][0].transcript;
        document.getElementById("box").innerHTML = Data;
        Box = document.getElementById("box").value;
        
       
    
    }
}


