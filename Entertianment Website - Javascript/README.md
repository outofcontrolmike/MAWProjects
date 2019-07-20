# The Great Race

This program is meant to show knowledge of Javascript and CSS (Hide, Show, position properties).  
It's literally Mario and Yoshi racing randomly based on On click events of an star.  

## Example Output

![Sample Output](README.jpg)

## Analysis Steps
Create a visual version of the card game 21 though a GUI.

1) Create a wireframe to base GUI off of
2) Create the GUI
3) Work on the actual game Logic;
    * Enum Class for Suit of cards
    * Enum Class for Value of cards
    * Class that constructs the card; value and suit
    * Class for building a Deck based on values and suits
    * Class sets the script of the game, controls the game

    * Features: 
        Draw cards at Random(like shuffling)
        Shuffling Image
        Tracking Victory's

4) Make a folder for Images

5) pair up the Images to the the actual values and suits of the cards * Did not Finish
    Find a way to create an image that holds values

6) Update the GUI -
    
    * When Player clicks Start Game, Two cards should appear on the table and a value
    * Player should be able to click hitMe or stay and the game should carry on.
    * After Every Win, scores should be updated




### Design

How did you approach your program design? Did you use multiple classes to define various objects?

There were multiple classes used in this program.  
    Some arrays were defined as objects and used in the Game Logic.
```
/ Game Card
public class Card extends Parent {
    
 
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




```

### Testing

A step by step series of examples that you developed to properly test the program. 

Look at GUI and see if it's completely connected to Game Logic

```
GUI works fine, Scores update accordingly, Random cards are being drawn, Player can't crash program

Hit & Stand work correctly.  

```

## Notes

Explain any issues or testing instructions.

I was never able to actually pull images from the card image folder I planned to use.  The logic was beyond my eyes and I found it easier to create a 
substitute image to place values onto. 

## Do not change content below this line
## Adapted from a README Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
