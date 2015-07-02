
var Post = require('./post.js');

function fileActions(err, file){ 
    if (err) {
        console.log(err);
    }
    var postings = JSON.parse(file)
    var post = new Post();

    // postings.forEach(function (posting){
    
    	post.display(postings);
    // })
}



module.exports = fileActions