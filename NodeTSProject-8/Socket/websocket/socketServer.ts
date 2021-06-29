import WebSocket from 'ws';


const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', function connection(ws) {
    ws.on('open', function open() {
        console.log('connected');
        ws.send("hello:"+Date.now());
    });
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
    ws.on('close', function close() {
        console.log('disconnected');
    });
});
