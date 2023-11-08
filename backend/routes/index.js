var express = require('express');
var router = express.Router();
var axios = require('axios');
const { sendToken } = require('../utils/provider');
const { isAuthenticated } = require('../auth/isAuthenticate');

/* GET home page. */
router.get('/', isAuthenticated, async function(req, res, next) {
  try {
   let data = await axios.get("https://jsonplaceholder.typicode.com/users")
   console.log(data)
    res.send(data.data)
  } catch (error) {
    res.json(error)
  }
});


router.get('/user/:id',isAuthenticated,async function(req,res,next){
  let userId = req.params.id
  try {
    let data = await axios.get("https://jsonplaceholder.typicode.com/todos")
    let sortedArray = data.data.filter((e)=>e.userId == userId)
    console.log(sortedArray)
    res.json(sortedArray)
  } catch (error) {
    res.json(error)
  }
})

router.post('/login', function(req, res, next) {
  const USERNAME = "admin";
  const PASSWORD = "admin123";

  const {username, password} = req.body;
 if(!username || !password) {
  return res.status(400).json({message: "Missing credentials"});
 }

  /// Now we are going to compare username and password

  if(USERNAME === username && PASSWORD === password){
    sendToken({username, password}, 200, res);
  }
  else{
    return res.status(401).json({message: "Invalid username or password"})
  }

});  

module.exports = router;

