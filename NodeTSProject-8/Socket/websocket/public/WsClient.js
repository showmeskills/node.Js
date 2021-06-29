var ws = new WebSocket("ws://localhost:4000/");

ws.onopen=()=>{
    ws.send("大家好");
}

ws.onmessage = (msg)=>{
    const content = document.getElementById("content");
    content.innerHTML+=msg.data+"<br/>";
}

ws.onerror = (err)=>{
    console.log(err);
}

ws.onclose=()=>{
    console.log("close---")
}