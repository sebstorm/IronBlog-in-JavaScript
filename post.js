var Post = function(postings){
	console.log(postings);
}

Post.prototype.display = function(poste){
	for(var i = 0; i < poste.length; i++){
	console.log("Title:           \n\n" + poste[i].title + "\n");
	console.log("Description:     \n\n" + poste[i].description + "\n");
	console.log("Date:            \n\n" + poste[i].date + "\n");
	console.log("---------------------------------\n\n");
	}
}



module.exports = Post;




























