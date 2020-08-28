using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


namespace BrewGlobal
{
    /// <summary>
    /// Auth: Michael Wilson
    /// Date: 08/15/2020
    /// Purpose: Create a simple program that signs a user up and let's them add products to a list
    /// Theme: Hard Beverages
    /// </summary>

    class questions

    {
        // create our company object
        static CompanyInfo c1 = new CompanyInfo();


        //Building Questions
        public static void CompanyInfo(string q1, string noun, string objectProperty)
        {
            string num = "";
            string entry;
            do
            {
                WriteLine(q1 + "\n");
                entry = ReadLine();
                if (entry == "")
                {
                    entry = "You didn't give us " + noun + ".";
                    ReadKey();
                    Clear();
                }
                else
                {
                    Clear();
                    WriteLine("Does '" + entry + "' look correct for " + noun + "?\n");
                    WriteLine("Enter 1 to continue, enter any other key to re enter.");
                    num = ReadLine();
                    Clear();
                }
            } while (num != "1");
            objectProperty = entry;
            WriteLine("\nYou set your " + noun + " to " + entry);
            ReadKey();
            Clear();
            WriteLine("\nTesting Company object's property of " + noun + " = " + objectProperty);
            ReadKey();
        }//End co info
        public static void ShortCutQuestion(string first, string buildObject)
        {
            string decision;
            do
            {
                WriteLine("\n" + first);
                string noun = ReadLine();
                Clear();
                WriteLine("\n" + noun.ToUpper() + "\n\nIs this correct?\n");
                WriteLine("press 1 to continue, press 2 to edit your entry.\n");
                decision = ReadLine();
                Clear();
                buildObject = noun;
                Console.WriteLine("Testing printing object properties");
                Console.WriteLine(buildObject);
                ReadKey();
            } while (decision != "1");
            // beer[i].first = ;

            //after a beer is succcesfully entered somehow another object should be created and added to an array
        }


        //Actual Program
        public static void CompanyQuestions()
        {
            CompanyInfo("What is your compaines name?", "name", c1.CompanyName);
            CompanyInfo("What is full name of the owner of ?" + c1.CompanyName, "Owner's name", c1.FullName);
            CompanyInfo("What is the street address of " + c1.CompanyName, "Street Address", c1.StreetAddress);
            CompanyInfo("What is the City of " + c1.CompanyName, "City", c1.City);
            CompanyInfo("What is the Zip code of " + c1.CompanyName, "Zip Code", c1.Zipcode);

            //Call c1 toString method
            c1.ToString();
            WriteLine("Okay, we have you set up in our system as a supplier.  Press any key to continue to the Beverage upload.");
            ReadKey();
            Clear();
            WriteLine("We carry three types of products:  Beer, Wine And Mead.\n\n");
            AddingBeverages();
        }
        public static void CompanyDetails()
        {
            Clear();
            WriteLine("Company Name" + c1.CompanyName);
            WriteLine("Owner Name: " + c1.FullName);
            WriteLine("Address: " + c1.StreetAddress + " " + c1.City + ", " + c1.Zipcode);
            Beep(100, 400);
            Console.BackgroundColor = ConsoleColor.DarkYellow;
            ReadKey();
        }

        //Start Brew Questions
        public static void AddingBeverages()
        {
            WriteLine("Press 1 to enter a Beer\n" +
                "Press 2 to enter a Wine\n" +
                "Press 3 to enter a Mead\n" +
                "Press 9 to exit product adding");
            ReadKey();
            //logic for entries
            string choice = ReadLine();
            do
            {
                if (choice == "1")
                {
                    AddProduct("beer");
                }
                else if (choice == "2")
                {
                    EnterWine();
                }

                else if (choice == "3")
                {
                    EnterMead();
                }
            } while (choice != "9");

            //implement a count of the beverages added

        }//end adding beverages

        public static void EnterMead()
        {

        }

        public static void EnterWine()
        {

        }


        public static void AddProduct(string changeableProduct)
        {
            //example call RefactorProduct(beers,beer,Beer,
            int productCount = 0;
            string choice;
            int i = 0;
            List<string> productList = new List<string>();
            do
            {
                WriteLine("Press 1 to enter a " + changeableProduct + "  Press any other key to exit\n");
                choice = ReadLine();
                if (choice == "1")
                {
                    // instantiate a new product object each time an is entered
                    Beer product = new Beer();
                    Clear();
                    //name
                    ShortCutQuestion("What is the name of this " + changeableProduct + "?", product.Title);
                    string name = product.Title;
                    //Type
                    ShortCutQuestion("What type of " + changeableProduct + " is this? ", product.Type);
                    string type = product.Type;
                    //ABV
                    ShortCutQuestion("How much alcohol content will this " + changeableProduct + " contain?", product.Abv.ToString());
                    double abv = product.Abv;
                    //Pairngs
                    ShortCutQuestion("What food does this " + changeableProduct + " compliment?  (Pairngs)", product.Parings);
                    string parings = product.Parings;
                    //Sizes
                    ShortCutQuestion("What sizes will this" + changeableProduct + " be avaialbe in? List in values seperated by commas please. ", product.Size);
                    string size = product.Size;
                    ReadKey();
                    //Color
                    ShortCutQuestion("What color does this " + changeableProduct + " appear to be?", product.Color);
                    string color = product.Color;
                    //Ingredients
                    ShortCutQuestion("What are the ingredients of this craft?", product.Ingredients);
                    string ingredients = product.Ingredients;
                    //Price
                    ShortCutQuestion("What will the pricing be for this " + changeableProduct + "? " + "\n\n Here is a list of the sizes you listed earlier\n { " + product.Size +  " }\nList in values seperated by commas please", product.Price.ToString());
                    double price = product.Price;
                    ReadKey();

                    //Create object by instantiating a new beer and passing the parameters to constructor
                    Beer beerBuilder = new Beer(name, type, abv, parings, size, color, ingredients, price);
                    //add beerBuilder to an array
                    productList.Add(beerBuilder.ToString());

                    //object in array 
                    WriteLine(productList[0]);
                    //Use the classes to string method to make a print out of the details
                    ReadKey();
                    Clear();

                    productCount++;
                    Clear();
                }
                //end of outer loop
            } while (choice == "1");
            WriteLine("you've entered " + productCount + " " + changeableProduct + "s");
            WriteLine("Fetching amount of productList. in array " + productList.Count);
            ReadKey();


            foreach (string beer in productList)
            {
                WriteLine("Test");
                WriteLine(beer.ToString());
            }
            ReadKey();
        }
    }
        
}
