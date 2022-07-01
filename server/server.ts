// start server with `npm run server`

declare var require: any;
const io = require(`socket.io`)(8000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket: any) => {

  socket.on("send-message", (sender: any, message: string, chatId: string) => {
      socket.to(chatId).emit("receive-message", sender, message, chatId);
      console.log("sender : " + sender + "/ message : " + message + "/ chatId : " + chatId);
  });

  socket.on("create-contact", (phone: string, newUsername: string, newPhone: string) => {
    socket.to(phone).emit("create-contact-response", newUsername, newPhone);
    console.log("create-contact-response");
  });

  socket.on("create-chat", (recipients: any, chatId: string) => {
    if (chatId) {
      recipients.map((recipient: any) => {
        socket.to(recipient.phone).emit("create-chat-response", recipients, chatId);
        console.log("creating-chat-to : phone : " + recipient.phone + "/ recipients : " + recipients);
      });
    }
  });

  socket.on("join-chat",(sender:any,chatId:string)=>{
    socket.join(chatId)
    console.log(sender.phone+" - joined-chat - "+chatId);
  })

  socket.on("join-server", (phone: string) => {
    socket.join(phone);
    console.log(phone + " - joined-server");
  });
});
