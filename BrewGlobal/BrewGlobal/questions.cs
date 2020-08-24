using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


namespace BrewGlobal
{
    class questions

    {
       
     
        //Company Questions

        // create our company object
        static CompanyInfo c1 = new CompanyInfo();
        //1.  Ask for name and company info
        public static void AskCompName()
        {
            string name;
            string num;
            do
            {
                WriteLine("Please enter your compaines name:\n");
                name = ReadLine();
                if (name == "")
                {
                    name = "You didn't give us a name.";
                }
                WriteLine("Does '" + name + "' look correct for your company name?\n");
                WriteLine("Enter 1 to continue, enter any other key to rename.");
                num = ReadLine();
            } while (num != "1");
            c1.CompanyName = name;
            WriteLine("\nsuccess to your company name: " + c1.CompanyName);
            ReadKey();
        }

        /// <summary>
        /// Ask for Owners Name
        /// </summary>
        public static void OwnerName()
        {
            string cName;
            string num;
            do {
            Clear();
            WriteLine("Please enter the full name of the owner of your company:\n");
            cName = ReadLine();
            if (cName == "")
            {
                cName = "You didn't give us the owners name.";
            }
            WriteLine("Does '" + cName + "' look correct for your company name?\n");
            WriteLine("Enter 1 to continue, enter any other key to rename.");
            num = ReadLine();
        } while (num != "1" );
            c1.FullName = cName;
            WriteLine("\nYou set your company name to: " + c1.FullName);
            ReadKey();
    }

        //Grab street
        public static void GrabStreet()
        {
            string street;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the street address of your company:\n");
                street = ReadLine();
                if (street == "")
                {
                    street = "You didn't provide a street address!";
                }
                WriteLine("Does '" + street + "' fit your street description?\n");
                WriteLine("Enter 1 to continue, enter any other key to reenter.");
                num = ReadLine();
            } while (num != "1");
            c1.StreetAddress = street;
            WriteLine("\nYou set your street address to: " + c1.StreetAddress);
            ReadKey();
        }

        public static void GrabCity()
        {
            string city;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the city your company resides in:\n");
                city = ReadLine();
                if (city == "")
                {
                    city = "You didn't give us the city you are located in";
                }
                WriteLine("Is '" + city + "' the name of your city?\n");
                WriteLine("Enter 1 to continue, enter any other key to rename.");
                num = ReadLine();
            } while (num != "1");
            c1.City = city;
            WriteLine("\nYou set your city address to: " + c1.City);
            ReadKey();
        }

        public static void GrabZip()
        {
            string zip;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the zipcode your company resides in:\n");
                zip = ReadLine();
                if (zip == "")
                {
                    zip = "You didn't give us the zipcode you are located in";
                }
                WriteLine("Is '" + zip + "' the correct zip code?\n");
                WriteLine("Enter 1 to continue, enter any other key re enter zip.");
                num = ReadLine();
            } while (num != "1");
            c1.Zipcode = zip;
            WriteLine("\nYou set your Zip code to " + c1.Zipcode);
            ReadKey();
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

        public static void IntroBeverage()
        {
            WriteLine("Okay, we have you set up in our system as a supplier.  Press any key to continue to the Beverage upload.");
            ReadKey();
            Clear();
            WriteLine("We carry three types of products:  Beer, Wine And Mead.\n\n");

        }

        public static void AddingBeverages()
        {
            WriteLine("Press 1 to enter a Beer\n" +
                "Press 2 to enter a Wine\n" +
                "Press 3 to enter a Mead\n" +
                "Press 9 to exit product adding");
                ReadKey();
            Clear();

            //logic for entries
            string choice = ReadLine();
            do
            {
                if (choice == "1")
                {
                    EnterBeer();
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

        public static void EnterBeer()
        {
            int beerCount = 0;
            string choice;

            do
            {
                string[] beers;

                WriteLine("Press 1 to enter a Beer. Press any other key to exit\n");
                choice = ReadLine();
                if (choice == "1")
                {
                    // instantiate a new beer object each time a beer is entered
                    Beer beer = new Beer();
                    string decision;
                    Clear();

                    //name
                    ShortCutQuestion("What is the name of this beer?",beer.Title);
                    //Type
                    ShortCutQuestion("What type of beer is this? ", beer.Type);
                    //ABV
                    ShortCutQuestion("How much alcohol content will this beer contain?", beer.Abv.ToString());
                    //Pairngs
                    ShortCutQuestion("What food does this beer compliment?  (Pairngs)", beer.Parings);
                    //Sizes
                    ShortCutQuestion("What sizes will this beer be avaialbe in? List in values seperated by commas please. ", beer.Size.ToString());
                    //Color
                    ShortCutQuestion("What color does this beer appear to be?", beer.Color);
                    //Ingredients
                    ShortCutQuestion("What are the ingredients of this craft?", beer.Ingredients);
                    //Price
                    ShortCutQuestion("What will the pricing be for this beer?  List in values seperated by commas please", beer.Price.ToString());

                    //beers.Add[beer[i]];
                                                                   
                    ReadKey();
                    Clear();
                    
                    beerCount++;
                    Clear();
                }
             //end of outer loop
            } while (choice == "1");
            WriteLine("you've entered " + beerCount + " beers");
            //display list of beers? 
            ReadKey();
            }
        //
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
        public static void CompanyQuestions()
        {
            AskCompName();
            OwnerName();
            GrabStreet();
            GrabCity();
            GrabZip();
            c1.ToString();
            CompanyDetails();
            IntroBeverage();
            AddingBeverages();
        }
    }

        //    Verify that it's all correct

        //2.  Ask User if they want to enter a beer in

        //    Ask for info and verify

        //3.  Keep in a loop and continue asking, until user types exit

        //4.  Print all the types

        //5.  **Bonus - make this downloadable**

        //6
    }

