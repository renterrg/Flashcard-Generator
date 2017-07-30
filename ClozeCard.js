function ClozeCard(fullText, cloze){
	this.fullText = fullText;	
	this.cloze = cloze;
}

ClozeCard.prototype.partialText = function (partial) {
	this.partial = this.fullText.split(this.cloze).pop();
	console.log("..." + this.partial);
}


var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);
firstPresidentCloze.partialText(); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;




