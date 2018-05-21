const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Se crea un array cartas en parejas .

const getCardList = () => {
  const listcard = ['1', '2', '3', '4'];
  let cards = [];
  let card;
  for (let i of listcard) {
    card = {
      image: i
    };
    cards.push(card);
    cards.push({ ...card });
  }
  return shuffle(cards);
};

export default getCardList;