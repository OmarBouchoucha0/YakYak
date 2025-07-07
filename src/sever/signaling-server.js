const WebSocket = require("ws");

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });
console.log("Signaling server running on ws://localhost:8080");

// Track connected clients
let connectionCount = 0;

wss.on("connection", (ws) => {
  connectionCount++;
  const clientId = connectionCount;
  console.log(`User ${clientId} connected (Total: ${connectionCount})`);

  // When client disconnects
  ws.on("close", () => {
    connectionCount--;
    console.log(
      `User ${clientId} disconnected (Remaining: ${connectionCount})`,
    );
  });
});
