///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package BlackJack;
//
//import javafx.scene.Parent;
//import javafx.scene.image.Image;
//import javafx.scene.image.ImageView;
//import javafx.scene.paint.Color;
//import javafx.scene.shape.Rectangle;
//import javafx.scene.text.Font;
//import javafx.scene.text.Text;
//
///**
// *
// * @author mw0415436
// */
//public class Card2_NotFinished {
//  
///**
// *
// * @author Michael Wilson
// */
//// Game Card
//public class Card extends Parent {
//
//    // creating the card's card height & width
//    private static final int CARD_WIDTH = 71;
//    private static final int CARD_HEIGHT = 96;
//
//    // Decalares our suit types - constant types
//    enum Suit {
//
//        HEARTS, DIAMONDS, CLUBS, SPADES;
//
//        final Image image;
//
//        Suit() {
//            this.image = new Image(Card.class.getResourceAsStream("Images".concat(name().toLowerCase()).concat(".png")),
//                    32, 32, true, true);
//        }
//    }
//
//    // declares Rank type and assigns values
//    enum Rank {
//
//        TW0(2), THREE(3), FOUR(4), FIVE(5), SIX(6), SEVEN(7), EIGHT(8), NINE(9),
//        TEN(10), JACK(10), QUEEN(10), KING(10), ACE(11);
//
//        // enum that has a field called value. constants and values of them
//        final int value;
//
//        Rank(int value) {
//            this.value = value;
//        }
//
//        String displayName() {
//            return ordinal() < 9 ? String.valueOf(value) : name().substring(0, 1);
//        }
//    }
//
//    // Defiintion of class card properties - Implement Card image
//    public final Suit suit;
//    public final Rank rank;
//    public final int value;
//
//    // Constructor
//    public Card(Suit suit, Rank rank) {
//        this.suit = suit;
//        this.rank = rank;
//        this.value = rank.value;
//
//        // graphics for card - draws an actual image for card to hold values
//        Rectangle bg = new Rectangle(CARD_WIDTH, CARD_HEIGHT);
//        bg.setArcWidth(20);
//        bg.setArcHeight(20);
//        bg.setFill(Color.FLORALWHITE);
//
//        // text of the card - passed to string
//        Text text1 = new Text(rank.displayName());
//        text1.setFont(Font.font(18));
//        text1.setX(CARD_WIDTH - text1.getLayoutBounds().getWidth() - 10);
//        text1.setY(text1.getLayoutBounds().getHeight());
//
//        Text text2 = new Text(text1.getText());
//        text2.setFont(Font.font(18));
//        text2.setX(10);
//        text2.setY(CARD_HEIGHT);
//
//        ImageView view = new ImageView(suit.image);
//        view.setRotate(180);
//        view.setX(CARD_WIDTH - 32);
//        view.setY(CARD_HEIGHT - 32);
//
//        // Grab the children of the Parent, and add these new nodes to StackPane
//        getChildren().addAll(bg, new ImageView(suit.image), view, text1, text2);
//    }
//
//    //Override this will the exact format of the values
//    public String toString() {
//        return rank.toString() + " of " + suit.toString();
//    }
//
//}
//
//}
