import { firebaseDatabase } from "./firebase";

class CardRepository {
sync(userId, onUpdate){
  const ref = firebaseDatabase.ref(`${userId}/cards`);
  ref.on('value', snapshot => {
    const value = snapshot.val()
    value && onUpdate(value)
  });
  return () => ref.off();
}

  save(userId, card){
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  remove(userId, card){
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;