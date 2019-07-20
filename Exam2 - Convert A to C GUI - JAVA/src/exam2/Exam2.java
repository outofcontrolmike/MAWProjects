/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exam2;

/*
 * Deveolpers:   Michael Wilson
 * Date:        03/04/2019
 * Project:     Convert Us Dollars to Canadian Through a GUI
 * Program:     Exam 2 Hands on
 */
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.text.Font;
import javafx.stage.Stage;

public class Exam2 extends Application {

    //create variables/objects that will be involved in a method
    // generally if we're recieving/grabbing text from a different location, we'll want to delcare the varibles protected
    protected TextField usText = new TextField("1");
    protected TextField caText = new TextField("1.5");

    // the start of our GUI
    @Override
    public void start(Stage primaryStage) {

        // Gridpane seemed the most applicable to set textfields and a button onto
        GridPane pane = new GridPane();
        pane.setAlignment(Pos.CENTER); // Set center alignment
        pane.setPadding(new Insets(11.5, 12.5, 13.5, 14.5)); // padding around each grid
        pane.setHgap(10);   // space between nodes horiziontally 
        pane.setVgap(10); // space between noddes vertically

        // create Labels for text fields and format them
        Label usLabel = new Label("United States Currency");
        usLabel.setFont(Font.font("Times", 20));
        Label caLabel = new Label("Canadian Currency");
        caLabel.setFont(Font.font("Times", 20));

        // format the settings on the textfields
        usText.setAlignment(Pos.CENTER_RIGHT);
        usText.setFont(Font.font("Times", 20));
        caText.setEditable(false);
        caText.setAlignment(Pos.CENTER_RIGHT);
        caText.setFont(Font.font("Times", 20));

        // create a button for conversion
        Button btAdd = new Button("Convert Money");

        // add all of our objects to the Gridpane
        pane.add(btAdd, 1, 3);
        pane.add(usLabel, 0, 0);
        pane.add(caLabel, 0, 2);
        pane.add(usText, 1, 0);
        pane.add(caText, 1, 2);

        // set the alignment for the button
        GridPane.setHalignment(btAdd, HPos.RIGHT);

        // set up an action event for button
        btAdd.setOnAction(e -> {
            convertMoney();
        });

        //create a scene and place it in the stage
        Scene scene = new Scene(pane, 500, 170);
        primaryStage.setTitle("US Money Conversion to Canadian");
        primaryStage.setScene(scene);
        primaryStage.show();    //display the stage
    }

    //this method runs our program
    public static void main(String[] args) {
        launch(args);
    }

    //inner method that makes the conversion happen
    private void convertMoney() {

        //canadian rate
        double candianRate = 1.5;

        // creating an empty space to place the conversion into
        String output = "";

        // this declares the conversion and makes the variable equal to it as well
        output += Double.parseDouble(usText.getText()) * candianRate;

        // this prints to the terminal, as a test
        System.out.println(output);

        //This will replace the textField contetnt of the Canadian currency with the newer output variable
        caText.setText(output);
    }

}
