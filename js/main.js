var cards = ["queen", "queen", "king", "king"];
var cardsInPLay = [];
var cardOne = cards[0];
cardsInPLay.push(cardOne[0]);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPLay.push(cardOne[2]);
console.log("User flipped " + cardTwo);
if (cardsInPlay <= 2) {
	console.log(cardsInPlay.length);
}