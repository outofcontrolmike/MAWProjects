/*
 * Developers:  Michael Wilson, James Horton, Jay Allen
 * Date:        04/30/2019
 * Project:     Subway Style Menu
 */

/**
 *
 * @author jh0375800
 */
public class SandwichObject {
    protected String breadType;   // type of bread
    protected String breadSize;   // bread size
    protected String cheese;      // which cheeses they want
    protected String meat;        // type of meat on sandwich
    protected String sauce;       // which sauce/condiment they want
    protected String sNp;         // salt and pepper
    protected String veggies;     // which veggies added
    
        // begin getters....
    public String getBreadType() {
        return breadType;
    }

    public String getBreadSize() {
        return breadSize;
    }

    public String getCheese() {
        if (cheese == null){
            return "\t\tNone";
        }
        return cheese;
    }

    public String getMeat() {
        if (meat == null){
            return "\t\tNone";
        }
        return meat;
    }

    public String getSauce() {
        if (sauce == null){
            return "\tNone";
        }
        return sauce;
    }

    public String getsNp() {
        if (sNp == null){
            return "\tNone";
        }
        return sNp;
    }

    public String getVeggies() {
        if (veggies == null){
            return "\tNone";
        }
        return veggies;
    }

        // begin setters
    public void setBreadType(String breadType) {
        this.breadType = breadType;
    }

    public void setBreadSize(String breadSize) {
        this.breadSize = breadSize;
    }

    public void setCheese(String cheese) {
        this.cheese = cheese;
    }

    public void setMeat(String meat) {
        this.meat = meat;
    }

    public void setSauce(String sauce) {
        this.sauce = sauce;
    }

    public void setsNp(String sNp) {
        this.sNp = sNp;
    }

    public void setVeggies(String veggies) {
        this.veggies = veggies;
    }
    
        // for testing the build of the sandwich
        // not intended for actual output to textArea
    public void display(){
        System.out.printf("Sandwich:  \nSize:  %s \nBread:  %s \nMeat:  %s \nCheese:  %s \nVeggies:  %s \nCondiments:  %s \nSalt/Pepper: %s",
                    breadSize, breadType, meat, cheese, veggies, sauce, sNp );

    } // end of display
    
        // resets sandwich object to start over
    public void clearSandwich(){
        breadSize = null;
        breadType = null;
        meat = null;
        cheese = null;
        veggies = null;
        sauce = null;
        sNp = null;
    } // end of clearSandwich
    
} // end of class sandwich
