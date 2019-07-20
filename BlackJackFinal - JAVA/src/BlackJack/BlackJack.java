/*
 * Dev:        Michael Wilson
 * Project:    BlackJack GUI
 * Purppose:   Lets the user Play a visual game of Black Jack by pressing Buttons to Hit or stay.
 * Date:        05/14/19
 */
package BlackJack;

import javafx.animation.PathTransition;
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.scene.layout.Region;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.shape.Line;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import javafx.util.Duration;

/**
 *
 * @author Michael Wilson
 */
// This class will control the logic of the game and also handle setting up the GUI
public class BlackJack extends Application {

    // Variables created to display rounds won from user and player
    private static int pRoundsWon = 0;
    private static int dRoundsWon = 0;

    // Create the Deck
    private Deck deck = new Deck();
    // creates hands of dealer and player
    private Hand dealer, player;
    // Show's what's going on in game
    private Text message = new Text();

    // Text that will have a scored added to it.
    private Text pScore = new Text("Player Score: ");
    private Text dScore = new Text("Dealer Score: ");

    // Image to be used in Gui
    private ImageView deckImage = new ImageView(new Image("Images/b1fv.png"));

    // control variable to bindTo
    private SimpleBooleanProperty playable = new SimpleBooleanProperty(false);

    // Create two HBoxs to show Playing Field
    private HBox dealerField = new HBox(20);
    private HBox playerField = new HBox(20);

    // Method for creating our GUI - Uses Parent class
    private Parent createContent() {

        // Card Image will shuffle when the applicaiton is launched
        shuffleImg();

        // Create Hand Objects to add cards to
        dealer = new Hand(dealerField.getChildren());
        player = new Hand(playerField.getChildren());

        // Create a Pane to place our GUI
        //Pane is a layout that has no layout, can be manipulated easily
        Pane root = new Pane();
        root.setPrefSize(800, 600);

        // BottomClass for setting a background
        Region background = new Region();
        background.setPrefSize(800, 600);
        background.setStyle("-fx-background-color: BLACK");

        // Pane to be placed into mainPane
        HBox rootLayout = new HBox(5);
        rootLayout.setPadding(new Insets(5, 5, 5, 5));
        // Create a left menu for the playing field

        Rectangle leftBG = new Rectangle(550, 560);
        leftBG.setArcWidth(50);
        leftBG.setArcHeight(50);
        leftBG.setFill(Color.GREEN);

        // Create right windwow for button options and Rounds won
        Rectangle rightBG = new Rectangle(230, 560);
        rightBG.setArcWidth(50);
        rightBG.setArcHeight(50);
        rightBG.setFill(Color.LIGHTSALMON);

        // LEFT
        // Making a VBox to display Hand Values
        VBox leftVBox = new VBox(50);
        leftVBox.setAlignment(Pos.TOP_CENTER);

        //Text's to display hand values
        Text dHandValue = new Text("Dealer: ");
        dHandValue.setFont(Font.font(20));
        Text pHandValue = new Text("Player: ");
        pHandValue.setFont(Font.font(20));
        message.setFont(Font.font(20));

        // Add the Texts, playing fields along with their message
        leftVBox.getChildren().addAll(dHandValue, dealerField, message, playerField, pHandValue);

        // RIGHT Vertical Box to set Buttons and display swinenr scores
        VBox rightVBox = new VBox(20);
        rightVBox.setAlignment(Pos.CENTER);

        // Buttons for Action Events for Games
        Button btnPlay = new Button("PLAY");
        Button btnHit = new Button("HIT");
        Button btnStand = new Button("STAND");

        // Place an HBox to add buttons
        HBox buttonsHBox = new HBox(15, btnHit, btnStand);
        buttonsHBox.setAlignment(Pos.CENTER);

        // Add play button and the buttonsHBox to the vertical box
        rightVBox.getChildren().addAll(pScore, dScore, btnPlay, buttonsHBox, deckImage);

        // Add Values to the main HBox and mainPane
        rootLayout.getChildren().addAll(new StackPane(leftBG, leftVBox), new StackPane(rightBG, rightVBox));
        root.getChildren().addAll(background, rootLayout);

        // This will bind properties.  
        // while the game is running, btn play won't work
        btnPlay.disableProperty().bind(playable);
        btnHit.disableProperty().bind(playable.not());
        btnStand.disableProperty().bind(playable.not());

        //Binds
        pHandValue.textProperty().bind(new SimpleStringProperty("Player: ").concat(player.valueProperty().asString()));
        dHandValue.textProperty().bind(new SimpleStringProperty("Dealer: ").concat(dealer.valueProperty().asString()));

        // logic for checking to see if player is over 21
        player.valueProperty().addListener((obs, old, newValue) -> {
            if (newValue.intValue() >= 21) {
                endGame();
            }
        });

        // Check to see if dealier is over 21
        dealer.valueProperty().addListener((obs, old, newValue) -> {
            if (newValue.intValue() >= 21) {
                endGame();
            }
        });

        // Button Action Events
        // calls the startNewGameMethod when buttonPlay is clicked
        // three listners.. may as well use my initials as the variables.. MAW
        btnPlay.setOnAction(m -> {
            startNewGame();

        });

        // Calls the takeCard method for the player and draws a card
        btnHit.setOnAction(a -> {
            player.takeCard(deck.drawCard());
        });

        // Makes the dealer draw a card if player choses not to draw, ends the game eventually
        btnStand.setOnAction(w -> {
            while (dealer.valueProperty().get() < 17) {
                dealer.takeCard(deck.drawCard());
            }

            endGame();
        });

        // Return root
        return root;
    }// End of Create Content Method

    // METHODS
    //****************************************************************************//
    // Sets up a new came
    private void startNewGame() {
        playable.set(true); // lets the player choose the playButton
        message.setText("");    // Resets the text on the player fields

        deck.refill();  // Places cards back into deck

        dealer.reset(); // Empty's the dealers hand
        player.reset(); // Empty's the players hand

        // Draws to Random cards for Player and Dealer
        dealer.takeCard(deck.drawCard());
        dealer.takeCard(deck.drawCard());
        player.takeCard(deck.drawCard());
        player.takeCard(deck.drawCard());
    }// End of startNewGame

    // Method for ending game
    private void endGame() {

        playable.set(false);    // doesn't let user choose any of the buttons

        // Grabs Value of hands from both player and dealer
        int dealerValue = dealer.valueProperty().get();
        int playerValue = player.valueProperty().get();
        String winner = "Exceptional case: d: " + dealerValue + " p: " + playerValue;

        // Logic for checking for game winning match - Also score count
        if (dealerValue == 21 || playerValue > 21 || dealerValue == playerValue
                || (dealerValue < 21 && dealerValue > playerValue)) {
            winner = "DEALER";
            dRoundsWon++;
        } else if (playerValue == 21 || dealerValue > 21 || playerValue > dealerValue) {
            winner = "PLAYER";
            pRoundsWon++;
        }

        // Display who won and activate the shuffleImage
        message.setText(winner + " WON");
        pScore.setText("Player Score: " + pRoundsWon);
        dScore.setText("Dealer Score: " + dRoundsWon);
        shuffleImg();

    }

    // extra little method to remind myself programming isn't so bad.
    private void shuffleImg() {
        // Path Transition for shuffiling an image
        // Create a path transition 
        PathTransition pt = new PathTransition(Duration.millis(25),
                new Line(35, 50, 35, 40), deckImage);
        pt.setCycleCount(30);

        pt.play(); // Start animation 
    }

    @Override
    // Set everything into stage and customize the format
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setScene(new Scene(createContent()));
        primaryStage.setWidth(800);
        primaryStage.setHeight(600);
        primaryStage.setResizable(false);
        primaryStage.setTitle("BlackJackFinal");
        primaryStage.show();
    }

    // Launch the GUI
    public static void main(String[] args) {
        launch(args);
    }
}// End of BlackJack Class
