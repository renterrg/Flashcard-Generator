function ClozeCard(fullText, cloze){
	this.fullText = fullText;	
	this.cloze = cloze;
}

ClozeCard.prototype.makeFlashcard = function (partial) {
	this.partial = this.fullText.split(this.cloze).join('...');

	var partialWord = this.fullText.indexOf(this.cloze);

	if (partialWord == -1) {
		console.log("Oops, this doesn't work");
	} else {
		console.log(this.cloze);
		console.log(this.partial);
		console.log(this.fullText);
	}

}

var firstPresidentCloze = new ClozeCard(
	"The guy George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.makeFlashcard(); 

module.exports = ClozeCard;




