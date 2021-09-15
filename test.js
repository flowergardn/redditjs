const { getPost } = require("@kindl3d/reddit.js")
 
getPost("entitledparents").then(data =>{
    console.log(data);
})