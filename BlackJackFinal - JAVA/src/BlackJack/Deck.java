// Class builds an actual Deck of Cards object - Will use Rank and Suit from Card class
// There will be a way to randomly draw cards from it and also place cards back into it

package BlackJack;

import BlackJack.Card.Rank;
import BlackJack.Card.Suit;

/**
 *
 * @author Michael Wilson
 */


public class Deck {
    
    // Array of cards
    private Card[] cards = new Card[52];
    
    // constructor
    public Deck() {
        refill();
    }
    
    // This places cards back into deck
    public final void refill() {
        int i = 0; 
        for (Suit suit : Suit.values()) {
            for(Rank rank : Rank.values()) {
            cards[i++] = new Card(suit, rank);
        }}// end of Refill
    }
    
    // This will pull a random card out of deck
    public Card drawCard() {
        Card card = null;
        while (card == null) {
            int index = (int)(Math.random()*cards.length);
            card = cards[index];
            cards[index] = null;
        }
        return card;
    }//end of drawCard
}// end of Deck
