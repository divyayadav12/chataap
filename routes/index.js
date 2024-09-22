const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.render("index")
    
})
// router.get("/chat",function(req,res){
//     res.render("chat");
// })
// module.exports=router;
// index.js or your route file
 

router.get('/chat',(req, res) => {
  const messages = [
    { type: 'message-user', text: 'Hello!' },
    { type: 'message-system', text: 'Welcome to the chat!' }
  ]
  res.render('chat', { messages });
});

module.exports = router;


 