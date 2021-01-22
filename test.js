const { reddit } = require("@kindl3d/reddit.js")
 
reddit("entitledparents").then(data =>{
    console.log(data);
})