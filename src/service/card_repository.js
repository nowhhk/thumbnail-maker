import firebaseApp from "./firebase";

class CardRepository {
  save(userId, card){
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  remove(userId, card){
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;