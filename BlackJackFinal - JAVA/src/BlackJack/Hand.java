//Class Builds a Hand object
// Creates a list to place cards into
// Knows what to do with Aces
// Has a way to pull cards from the Deck
// Has the abillity to empty hand.

package BlackJack;
import BlackJack.Card.Rank;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.collections.ObservableList;
import javafx.scene.Node;

/**
 *
 * @author Michael Wilson
 */

// Players Hand
public class Hand {
    
    // List from user Interface to add cards to
    private ObservableList<Node> cards;
    
    //This can be binded later on
    private SimpleIntegerProperty value = new SimpleIntegerProperty(0);
    
    // Decrement value of hand if the hand is over 21, when there's an ace
    private int aces = 0;
    
    //Assign the list cards
    public Hand(ObservableList<Node> cards) {
        this.cards = cards;
    }
    
    // Pull cards from deck and adds to hand
    public void takeCard(Card card) {
        cards.add(card);
        
        // increments ace
        if(card.rank == Rank.ACE) {
            aces++;
        }
        
        // making sure there is correct value for ace
        if(value.get() + card.value > 21 && aces > 0) {
            value.set(value.get() + card.value - 10);
            aces--;
        }
        // Setting the normal hands value without ace
        else {
            value.set(value.get() + card.value);
        }
    }
    
    
    // Resets the hand, clars card, sets value to 0, sets aces to 0
    public void reset() {
        cards.clear();
        value.set(0);
        aces = 0;
    }
    
    // returns value and binds it to the interface
    public SimpleIntegerProperty valueProperty() {
        return value;
    }
}//end of Hand class
