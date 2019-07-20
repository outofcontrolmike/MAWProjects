// This class Builds the Card object itself
// Card has a Suit and a Rank which has values
// This class will build a value to send to GUI
// Will also build an image to print out values onto


package BlackJack;

import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Text;
import javafx.scene.Parent;
import javafx.scene.image.Image;
import javafx.scene.text.Font;

/**
 *
 * @author Michael Wilson
 */


// Game Card
public class Card extends Parent {
    
   // Decalares our suit types - constant types
    enum Suit {
        HEARTS, DIAMONDS, CLUBS, SPADES
    };

    // declares Rank type and assigns values
    enum Rank {
        TW0(2), THREE(3), FOUR(4), FIVE(5), SIX(6), SEVEN(7), EIGHT(8), NINE(9),
        TEN(10), JACK(10), QUEEN(10), KING(10), ACE(11);

        // enum that has a field called value. constants and values of them
        final int value;

        // constructor of Rank enum - returns value
        private Rank(int value) {   // constructor
            this.value = value;

        }
    }

    // Defiintion of class card properties - Implement Card image
    public final Suit suit;
    public final Rank rank;
    public final int value;

    // Constructor
    public Card(Suit suit, Rank rank) {
        this.suit = suit;
        this.rank = rank;
        this.value = rank.value;
        
        // graphics for card - draws an actual image for card to hold values
        Rectangle bg = new Rectangle(80, 100);
        bg.setArcWidth(20);
        bg.setArcHeight(20);
        bg.setFill(Color.PALETURQUOISE);
        
        // text of the card - passed to string
        Text text = new Text(toString());
        text.setWrappingWidth(70);
        
        // Grab the children of the Parent, and add these new nodes to StackPane
        getChildren().add(new StackPane(bg, text));
    }

    //Override this will the exact format of the values
    public String toString() {
        return rank.toString() + " of " + suit.toString();
    }

}

