/*
 * Developers: Michael Wilson, Jim Horton, James 
 * Date: 04/20 - 04/30
 * Program:  Group Project - Subway sandwich menu build
 */

import java.util.HashSet;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextArea;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleGroup;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import javax.swing.JOptionPane;

/**
 *
 * @author Michael Wilson
 */
public class Sandwich extends Application {
// class level variables

    SandwichObject sammich = new SandwichObject();
    // Sauce related
    private static CheckBox sauce = new CheckBox("Italian");
    private static CheckBox sauce2 = new CheckBox("Ranch");
    private static CheckBox sauce3 = new CheckBox("Buffalo");
    private static Label sauceType = new Label("Type of Sauce    ");

    // salt and pepper
    private static RadioButton sp = new RadioButton("Salt and pepper?");

    // meat related
    private static Label meat = new Label("             Choose One meat   ");
    private static ToggleGroup meatToggle = new ToggleGroup();
    private static RadioButton ham = new RadioButton("ham");
    private static RadioButton turkey = new RadioButton("Turkey");
    private static RadioButton roastBeef = new RadioButton("Roast Beef");

    // cheese related
    private static Label cheeseChoice = new Label("Choose One Cheese");
    private static RadioButton american = new RadioButton("American");
    private static RadioButton prov = new RadioButton("Provolone");
    private static RadioButton swiss = new RadioButton("Swiss");
    private static ToggleGroup cheeseToggle = new ToggleGroup();

    // veggie related
    private static Label veggies = new Label("Select Three Veggies           ");
    private static CheckBox blackOlives = new CheckBox("Black Olives");
    private static CheckBox tomatoes = new CheckBox("Tomatoes");
    private static CheckBox redOnion = new CheckBox("Red Onion");

    // buttons
    private static Button btClear = new Button("Erase Order");
    private static Button btBuild = new Button("Build Sandwich");

    // size of sandwich
    private static ToggleGroup sizeToggle = new ToggleGroup();
    private static Label sizeOfSandwich = new Label("Size of Sandwich");
    private static RadioButton bSize = new RadioButton("6 inch");
    private static RadioButton bSize2 = new RadioButton("12 inch");

    // type of bread
    private static Label typeOfBread = new Label("Type of Bread     ");
    private static RadioButton white = new RadioButton("White");
    private static RadioButton wheat = new RadioButton("Wheat");
    private static ToggleGroup TypeToggle = new ToggleGroup();

    // summary
    public static TextArea summary = new TextArea ("Summary will dispay Here" );

    @Override
    public void start(Stage primaryStage) {

        // *****  Create a border pane 
        BorderPane pane = new BorderPane();

        // create a pane for the left border, throw three hbxes into it
        Pane leftMain = new Pane();

        // ***** Top Border
        // v box to hold main header and menu guide
        VBox header = new VBox(20);
        Text title = new Text(3, 200, "Subway Eat Fresh");
        title.setFont(Font.font("Times New Roman", 22));
        Text about = new Text("Use this helpful menu to build your favorite sandwich!");
        about.setFont(Font.font("Times New Roman", 14));
        header.setStyle("-fx-border-color: black");
        header.getChildren().addAll(title, about);
        header.setAlignment(Pos.CENTER);
        pane.setTop(header);

        // ***** Left Border 
        // vbox1 - holds size of bread
        Image sandwhichSize = new Image("sandwichsize.jpg");
        ImageView sandwhichView = new ImageView(sandwhichSize);
        VBox left1 = new VBox(10);
        bSize.setToggleGroup(sizeToggle);
        bSize2.setToggleGroup(sizeToggle);

        // adds fields and sets layout
        left1.getChildren().addAll(sandwhichView, sizeOfSandwich, bSize, bSize2);
        left1.setLayoutY(10);
        left1.setLayoutX(100);

        // hbox2 - will hold type of bread
        VBox left2 = new VBox(10);
        Image breadColor = new Image("bread.jpg");
        ImageView breadView = new ImageView(breadColor);
        left2.getChildren().addAll(breadView, typeOfBread, white, wheat);
        left2.setLayoutY(200);
        left2.setLayoutX(100);
        white.setToggleGroup(TypeToggle);
        wheat.setToggleGroup(TypeToggle);

        // adds both v-boxes to the left pane, inside of the left border pane
        leftMain.getChildren().addAll(left1, left2);
        pane.setLeft(leftMain);

        //***** Bottom Border
        HBox bottom = new HBox(20);
        bottom.getChildren().addAll(summary, btBuild, btClear);
        bottom.setAlignment(Pos.CENTER);
        pane.setBottom(bottom);
        bottom.setLayoutX(400);

        //***** Right Border
        Pane rightPane = new Pane();

        // Vertical Box for sauce
        VBox sauceBox = new VBox(30);
        Image saucePic = new Image("sauce.jpg");
        ImageView sauceView = new ImageView(saucePic);
        sauceBox.getChildren().addAll(sauceView, sauceType, sauce, sauce2, sauce3);
        //sauce3.setFont(Font.font("Times New Roman"));
        sauceBox.setLayoutY(10);
        sauceBox.setLayoutX(10);       

        // Vertical Box for salt and pepper option
        VBox saltPepper = new VBox(30);
        Image salty = new Image("sp.jpg");
        ImageView saltPView = new ImageView(salty);
        saltPepper.getChildren().addAll(saltPView, sp);
        saltPepper.setLayoutY(300);
        saltPepper.setLayoutX(10);

        // add both of these to the right pane, inside of right border
        rightPane.getChildren().addAll(sauceBox, saltPepper);
        pane.setRight(rightPane);

        // ***** Center Area
        Pane centerPane = new Pane();

        // hbox for meat
        HBox meatBox = new HBox(10);
        Image meatSel = new Image("meat.jpg");
        ImageView meatView = new ImageView(meatSel);
        meatBox.getChildren().addAll(meatView, meat, ham, turkey, roastBeef);
        meatBox.setLayoutX(200);
        meatBox.setLayoutY(10);
        ham.setToggleGroup(meatToggle);
        turkey.setToggleGroup(meatToggle);
        roastBeef.setToggleGroup(meatToggle);

        // hbox for cheese
        HBox cheeseBox = new HBox(10);
        Image cheeseSel = new Image("cheese.jpg");
        ImageView cheeseView = new ImageView(cheeseSel);
        cheeseBox.getChildren().addAll(cheeseView, cheeseChoice, american, prov, swiss);
        cheeseBox.setLayoutY(150);
        cheeseBox.setLayoutX(200);
        american.setToggleGroup(cheeseToggle);
        prov.setToggleGroup(cheeseToggle);
        swiss.setToggleGroup(cheeseToggle);

        // hbox for veggies
        HBox vegBox = new HBox(10);
        Image vegSel = new Image("veg.jpg");
        ImageView vegView = new ImageView(vegSel);
        vegBox.getChildren().addAll(vegView, veggies, blackOlives, tomatoes, redOnion);
        vegBox.setLayoutY(300);
        vegBox.setLayoutX(200);

        // add the three hboxes to the center pane
        centerPane.getChildren().addAll(meatBox, cheeseBox, vegBox);
        pane.setCenter(centerPane);

        // ***** extra formating and Special attributes
        summary.setEditable(false);
        summary.setFont(Font.font(10));
        summary.isMouseTransparent();   // this fixes a bug of the text area becomming huge     

        // Create a scene and place it in the stage
        Scene scene = new Scene(pane, 1200, 600);
        primaryStage.setTitle("Subway Eat Fresh"); // Set the stage title
        primaryStage.setScene(scene); // Place the scene in the stage
        primaryStage.show(); // Display the stage
        
         // Action Event Listeners
        btBuild.setOnAction(e -> {
            if(sammich.getBreadSize() == null || sammich.getBreadType() == null)
                JOptionPane.showMessageDialog(null,
                    "You Must Select a Sandwich Size and Bread Type",
                    "Sandwich Size or Bread Type Not Selected",
                    JOptionPane.ERROR_MESSAGE);
            else{                
                    displayOrder(sammich);
            } // end of else
        });

        btClear.setOnAction(e -> {
            eraseOrder();
//            sammich.display();
        });
        
            // begin radio buttons ******************
        ham.setOnAction(e -> {
            if (ham.isSelected()) {
            sammich.setMeat("\t\tHam");
            } // end of if
        });
        
        turkey.setOnAction(e -> {
            if (turkey.isSelected()) {
            sammich.setMeat("\t\tTurkey");
            } // end of if
        });

        roastBeef.setOnAction(e -> {
            if (roastBeef.isSelected()) {
            sammich.setMeat("\t\tRoast Beef");
            } // end of if
        });

        american.setOnAction(e -> {
            if (american.isSelected()) {
            sammich.setCheese("\t\tAmerican");
            } // end of if
        });

        prov.setOnAction(e -> {
            if (prov.isSelected()) {
            sammich.setCheese("\t\tProvolone");
            } // end of if
        });

        swiss.setOnAction(e -> {
            if (swiss.isSelected()) {
            sammich.setCheese("\t\tSwiss");
            } // end of if
        });

        sp.setOnAction(e -> {
            if (sp.isSelected()) {
            sammich.setsNp("\tSalt and Pepper");
            } // end of if
        });

        bSize.setOnAction(e -> {
            if (bSize.isSelected()) {
            sammich.setBreadSize("\t\t6 inch");
            } // end of if
        });

        bSize2.setOnAction(e -> {
            if (bSize2.isSelected()) {
            sammich.setBreadSize("\t\t12 inch");
            } // end of if
        });

        white.setOnAction(e -> {
            if (white.isSelected()) {
            sammich.setBreadType("\t\tWhite");
            } // end of if
        });

        wheat.setOnAction(e -> {
            if (wheat.isSelected()) {
            sammich.setBreadType("\t\tWheat");
            } // end of if
        });
                // end of radio buttons ***************
                
            // begin check boxes ************************
        blackOlives.setOnAction(e ->{

            if (blackOlives.isSelected()){
                if (blackOlives.isSelected() && tomatoes.isSelected() && redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives, Tomatoes, and Red Onions");                
                } // end of if
                else if (blackOlives.isSelected() && tomatoes.isSelected()){
                    sammich.setVeggies("\tBlack Olives and Tomatoes");
                } // end of else if
                else if (blackOlives.isSelected() &&  redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives and Red Onions"); 
                } // end of else if
                else {
                    sammich.setVeggies("\tBlack Olives");
                } // end of else
            } // end of if true
            else{
                if (tomatoes.isSelected() && redOnion.isSelected()){
                    sammich.setVeggies("\tTomatoes and Red Onions");
                } // end of if 
                else if (tomatoes.isSelected()){
                    sammich.setVeggies("\tTomatoes");
                } // end of else if
                else if (redOnion.isSelected()){
                    sammich.setVeggies("\tRed Onion");
                } // end of if else
            } // end of not true            
        });

        tomatoes.setOnAction(e ->{
            if (tomatoes.isSelected()){
                if (blackOlives.isSelected() && tomatoes.isSelected() && redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives, Tomatoes, and Red Onions");                
                } // end of if
                else if (blackOlives.isSelected() && tomatoes.isSelected()){
                    sammich.setVeggies("\tBlack Olives and Tomatoes");
                } // end of else if
                else if (tomatoes.isSelected() &&  redOnion.isSelected()){
                    sammich.setVeggies("\tTomatoes and Red Onions"); 
                } // end of else if
                else {
                    sammich.setVeggies("\tTomatoes");
                } // end of else
            } // end of if true
            else{
                if (blackOlives.isSelected() && redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives and Red Onion");
                } // end of if 
                else if (blackOlives.isSelected()){
                    sammich.setVeggies("\tBlack Olives");
                } // end of else if
                else if (redOnion.isSelected()){
                    sammich.setVeggies("\tRed Onion");
                } // end of if else
            } // end of not true            
        });

        redOnion.setOnAction(e ->{
            if (redOnion.isSelected()){
                if (blackOlives.isSelected() && tomatoes.isSelected() && redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives, Tomatoes, and Red Onions");                
                } // end of if
                else if (redOnion.isSelected() && tomatoes.isSelected()){
                    sammich.setVeggies("\tRed Onion and Tomatoes");
                } // end of else if
                else if (blackOlives.isSelected() &&  redOnion.isSelected()){
                    sammich.setVeggies("\tBlack Olives and Red Onion"); 
                } // end of else if
                else {
                    sammich.setVeggies("\tRed Onion");
                } // end of else
            } // end of if true
            else{
                if (tomatoes.isSelected() && blackOlives.isSelected()){
                    sammich.setVeggies("\tTomatoes and Black Olives");
                } // end of if 
                else if (tomatoes.isSelected()){
                    sammich.setVeggies("\tTomatoes");
                } // end of else if
                else if (blackOlives.isSelected()){
                    sammich.setVeggies("\tBlack Olives");
                } // end of if else
            } // end of not true
        });

        sauce.setOnAction(e ->{
            if (sauce.isSelected()){
                if (sauce.isSelected() && sauce2.isSelected() && sauce3.isSelected()){
                    sammich.setSauce("\tItalian, Ranch and Buffalo");                
                } // end of if
                else if (sauce.isSelected() && sauce2.isSelected()){
                    sammich.setSauce("\tItalian and Ranch");
                } // end of else if
                else if (sauce.isSelected() &&  sauce3.isSelected()){
                    sammich.setSauce("\tItalian and Buffalo"); 
                } // end of else if
                else {
                    sammich.setSauce("\tItalian");
                } // end of else                
            } // end of if true
             else {
                if (sauce2.isSelected() && sauce3.isSelected()) {
                    sammich.setSauce("\tRanch and Buffalo");
                   
                } // end of if
                else if (sauce2.isSelected()){
                    sammich.setSauce("\tRanch");
                } // end of else if
                else if (sauce3.isSelected()){
                    sammich.setSauce("\tBuffalo");
                } // end of else if
                else
                    System.out.println("erase sandwich and statr over!!");
            } // end of else            
        });
        
        sauce2.setOnAction(e ->{
            if (sauce2.isSelected()){
                if (sauce.isSelected() && sauce3.isSelected()){
                    sammich.setSauce("\tItalian, Ranch and Buffalo");                
                } // end of if
                else if (sauce.isSelected()){
                    sammich.setSauce("\tItalian and Ranch");
                } // end of else if
                else if (sauce3.isSelected()){
                    sammich.setSauce("\tRanch and Buffalo"); 
                } // end of else if     
                else {
                    sammich.setSauce("\tRanch");
                } // end of else
            } // end of if selected
             else {
                if (sauce.isSelected() && sauce3.isSelected()) {
                    sammich.setSauce("\tItalian and Buffalo");
                   
                } // end of if
                else if (sauce.isSelected()){
                    sammich.setSauce("\tItalian");
                } // end of else if
                else if (sauce3.isSelected()){
                    sammich.setSauce("\tBuffalo");
                } // end of else if
                else
                    System.out.println("erase sandwich and statr over!!");
            } // end of else
            
        });
        
        sauce3.setOnAction(e ->{
            // if isSelected is true then compare the others
            if (sauce3.isSelected()){
                if (sauce.isSelected() && sauce2.isSelected()){
                    sammich.setSauce("\tItalian, Ranch and Buffalo");                
                } // end of if
                else if (sauce.isSelected()){
                    sammich.setSauce("\tItalian and Buffalo");
                } // end of else if
                else if (sauce2.isSelected()){
                    sammich.setSauce("\tRanch and Buffalo"); 
                } // end of else if
                else{
                    sammich.setSauce("\tBuffalo");
                }
            } // end of if true selected
            

            else {
                if (sauce.isSelected() && sauce2.isSelected()) {
                    sammich.setSauce("\tItalian and Ranch");
                   
                } // end of if
                else if (sauce.isSelected()){
                    sammich.setSauce("\tItalian");
                } // end of else if
                else if (sauce2.isSelected()){
                    sammich.setSauce("\tRanch");
                } // end of else if
                else
                    System.out.println("erase sandwich and statr over!!");
            } // end of else
        });     
                // end of check boxes *********************    
        
    }// end of GUI 

    
    // start of methods ******************************
    
    // method for building order - this is a sample
     public static void displayOrder(SandwichObject sam) {

        String disp = "Sandwich:  \nSize:  " + sam.getBreadSize() + "\nBread:  " + sam.getBreadType() 
                + "\nMeat:  " +sam.getMeat() + "\nCheese: " + sam.getCheese() + "\nVeggies:  " 
                + sam.getVeggies() + "\nCondiments:  " +sam.getSauce() + "\nSalt/Pepper: " 
                + sam.getsNp();
        
        summary.setText(disp);        
         
//        String textOutput = "You have ordered a sample sandwich with some delicious options. ";
//        summary.setText(textOutput);
        summary.setFont(new Font("Times New Roman",14));
        summary.setWrapText(true);
        summary.isMouseTransparent();
   
    } // end of displayOrder

     // method for clearing the text out of the box
    public void eraseOrder() {
        String eraseText = "";
        sammich.clearSandwich();
        summary.setText(eraseText);
        summary.isMouseTransparent();
        ham.setSelected(false);
        turkey.setSelected(false);
        roastBeef.setSelected(false);
        american.setSelected(false);
        prov.setSelected(false);
        sp.setSelected(false);
        bSize.setSelected(false);
        bSize2.setSelected(false);
        white.setSelected(false);
        wheat.setSelected(false);
        blackOlives.setSelected(false);
        tomatoes.setSelected(false);
        redOnion.setSelected(false);
        sauce.setSelected(false);
        sauce2.setSelected(false);
        sauce3.setSelected(false);
    } // end of eraseOrder
    
        // end of methods ********************
    
} // end of Sandwich
