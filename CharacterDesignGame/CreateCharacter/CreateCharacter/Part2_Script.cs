using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


namespace CreateCharacterMain
{
    class Part2_Script : Part1_Script
    {

        private static int counter = 0;
        private static int drinkCount;
        // Make ideas for the Tavern
        // Player should sit down
        // Player should look at menu
        // Menu should print Names and Descriptions from an array
        // Name
        // Description
        // Price

        // Player should be able to buy drinks
        //Limit 10

        //Three Dimensional Array's
        //Name String array
        //Desc String
        //Price long

        // should be a for loop that iterates the names
        // Also a for loop that itterates a ToString Method

      
        /// <summary>
        /// Where the main plot of chapter gets called to
        /// </summary>
        public static void Tavern()
        {
            BarDesc();
            DrinkTime();
        }

        /// <summary>
        /// Description of bar/Sit down
        /// </summary>
        public static void BarDesc()
        {
            //Start from outside
            Clear();
            WriteLine("\nAfter a little bit of a walk you finally reach the foundation of the tavern." +
                "\nThe building seems to be made by the inspiration of a log cabin, it's two stories tall." +
                "\n\nThere is a logo that displays two hands each holding a mug and they are bumping together to" +
                "simulate a cheers for good times.\n" +
                "Under the logo the name of the tavern is displayed -- " +
                "\n\nFRIENDS INN");
            WriteLine("\nYou push the heavy oak doors open and make your entrance into the bar.");
            ReadKey(false);
            OpenDoors();
    

            ReadKey(false);
        }// end BarDesc

        public static void OpenDoors()
        {
            Clear();
            //Testing
            //CharacterSheet.playerSheet.Race = "Hobbit";
            
            string caseSwitch = CharacterSheet.playerSheet.Race;

            switch (caseSwitch)
            {
                case "Human":
                    WriteLine("Everyone raises their mugs to your entrance." +
                        " You confidently stride over to the main seating and take a seat down.");
                    break;
                case "Elf":
                    WriteLine("Most of the people in the tavern are giving you a weird look." +
                        " You notice that there are no other elves in the tavern." +
                        "\nYou awkwardly walk over to the main seating of the bar and take a seat.");
                    break;
                case "Dwarf":
                    WriteLine("As you bounce your way in everyone in the tavern gives you a nice wave" +
                        " seems like your race is respected around here. You notice there are other dwarves" +
                        " having a good time at a table, however you decide to go to the bar to figure out" +
                        " what the tavern has to offer.");
                    break;
                case "Hobbit":
                    WriteLine("Right when you walk in everyone seems to be happy that you're around." +
                        " People love the hospitallity and friendliness of Hobbits. You walk up to the main bar" +
                        " to see what what drinks are offered, you're in need of one.");
                        break;

            }
        }//End BartenderIntro

        /// <summary>
        /// This is where a menu will be called to
        /// </summary>
        public static void DrinkTime()
        {
            // One method should be called here that populates a list
            WriteLine("Would you like to view the simple menu or the the detailed menu?\n" +
                "--The simple menu is one page and shows everything but the descriptions." +
                "\n--The Detailed menu shows each beverage one page at a time.");

            BeverageString();
        }// end DrinkTime

        /// <summary>
        /// This will take from the 3 array's below and form an ouput menu
        /// </summary>
        public static void BeverageString()
        {
            string[] bNames = new string[] { "Water", "Lager", "Mead", "Eldberberry Wine", "Red Wine", "Old Town IPA" };

            int[] bPrices = new int[] { 3, 10, 20, 30, 50, 40 };

            int[] bABV = new int[] { 0, 4, 7, 11, 14, 8 };

            string[] bDesc = new string[] {"Delicious Well Water", "A fine well bodied lager", "Sweet Honey mead made locally",
            "Healthy wine made from local berries", "Imported Red Wine", "India Pale Ale - You've never heard of such a thing"};

            Clear();
            WriteLine("Drink Menu".ToUpper());
           // CharacterSheet.playerSheet.Gold = 200;

            if (playerSheet.Gold >=120)
            {
                //Somehow incorporate a for loop that access each elements in array
                for (int i = 0; i < bNames.Length; i++)
                {
                    WriteLine("-------------------------------------------------------------");
                    WriteLine(bNames[i].ToUpper() + "\t%" + bABV[i] + "\t$" + bPrices[i] +
                        "\n\nDescription: " + bDesc[i]);

                }
                WriteLine("-------------------------------------------------------------");
                WriteLine("Press Enter to go to choose a selection.".ToUpper());
                ReadKey(false);

            }// over 100 if

          

            Clear();

            while (counter == 0)
            {



                WriteLine("Drink Selection Menu".ToUpper());
                WriteLine("____________________");
                WriteLine("\nType '1' for Lager (counts as 1)" +
                           "\nType '2' for Mead (counts as 2)" +
                            "\nType '3' for Elderberry Wine (counts as 3)" +
                            "\nType '4' for Red Wine (counts as 3)" +
                            "\nType '5' for Old Town IPA (counts as 2)" +
                            "\nType '6' for Water (-1, helps you sober up.");
                WriteLine("\nNumber of drinks = " + drinkCount);
                WriteLine("\nSomething bad might happen if your drink count is more than 12.");



                ChooseBeverage();
                

                if (playerSheet.Gold <= 90)
                {
                    WriteLine("\nBartender: 'You're gonna blow all your money here, you've had too much!'");
                    counter++;

                }

                if(playerSheet.Gold >= 100)
                WriteLine("\nType quit if you want to exit the menu and quit drinking." +
                    " Otherwise we assume you want more.\n");
                string quit = ReadLine();
                Clear();

                if (quit.ToUpper() == "QUIT")
                {
                    counter++;
                }// end quit

            }// end while

            //How drunk is the character?

            HowDrunk();

            

        }//end BeverageString

        public static void HowDrunk()
        {
            Clear();
            if(drinkCount <3)
            {
            
                WriteLine("\nYou've decided your ready to turn in for the day, you ask the bartender about" +
                    " renting a room upstairs.");
                WriteLine("\nBartender: 'That's gonna be 30 gold for tonight!'");
                WriteLine("\nYou place the gold on the bar while he gets out your key." +
                   "\nYou get up  and then you walk up the creaky stairs" +
                   " and find your loft - room 202");
                WriteLine("\nYou enter the room and make yourself at home, finally comfrotable for once." +
                    "\nTomorrow will be a new day.");
                WriteLine("\nNext thing you know you're in bed and closing your eyes.");
                playerSheet.Gold -= 30;

            }

            if (drinkCount <= 12 && drinkCount >= 3)
            {
                WriteLine("You're Feeling pretty good.");
                WriteLine("\nYou've decided your ready to turn in for the day, you ask the bartender about" +
                    " renting a room upstairs.");
                WriteLine("\nBartender: 'That's gonna be 30 gold for tonight!'");
                playerSheet.Gold -= 30;
                WriteLine("\nYou have " + playerSheet.Gold + "gold");
                WriteLine("\nYou place the gold on the bar while he gets out your key." +
                    "\nYou get up slowely to brace your balance and then you walk up the creaky stairs" +
                    " and find your loft - room 202");
                WriteLine("\nYou enter the room and make yourself at home, finally comfrotable for once." +
                    "\nTomorrow will be a new day.");
                WriteLine("\nNext thing you know you're in bed and closing your eyes.");
                ReadKey(false);
                Clear();
                WriteLine("You awake in the morning with sun blinding your eyes through the window." +
               " Your stomach is also rumbiling.");
                WriteLine("\nYou decide to go downstairs to retrieve some breakfast and coffee.");
                ReadKey(false);
                

            }
            if(drinkCount > 12)
            {
                Random rnd = new Random();

                int drunkRandom = 8 * ( rnd.Next(4, 8));
                playerSheet.Gold -= drunkRandom;

                WriteLine("You're a mess, you need help getting up stairs.");
                WriteLine("You pull out some gold out your pockets and you don't care" +
                    " about how much your paying.");
                WriteLine("\nYou hear the bartender count out " + drunkRandom + " gold.");
                WriteLine("\nA couple of regulars from the bar grab you and that's the last thing you remember.");
                WriteLine("\nGood night for now.");
                ReadKey(false);
                SpecialEffects.ChangeTerminalColor();
                
                WriteLine("\nYou wake up in the morning with a killer headache. You roll out of bed to go downstairs" +
                    " to get some breakfast and hopefully some coffee.");
                SpecialEffects.ChangeTerminalBack();
                
            }
           
        }// end HowDrunk

        public static void ChooseBeverage()
        {
            

            string caseSwitch = ReadLine();
          

            int[] bPrices = new int[] { 3, 10, 20, 30, 50, 40 };

            WriteLine("__________________________________________________________________\n");
            switch (caseSwitch)
            {
                case "1":
                    WriteLine("You purchased a Lager, that cost you " + bPrices[1] + " gold.");
                    playerSheet.Gold -= bPrices[1];
                    drinkCount++;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    ReadKey(false);
                    break;

                case "2":
                    WriteLine("You purchased some Honey Mead, that costs you " + bPrices[2] + " gold.");
                    playerSheet.Gold -= bPrices[2];
                    drinkCount += 2;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    
                    break;

                case "3":
                    WriteLine("You purchased Elder Berry Wine, that costs you " + bPrices[2] + " gold.");
                    playerSheet.Gold -= bPrices[2];
                    drinkCount += 3;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    break;

                case "4":
                    WriteLine("You purchased Red Wine, that costs you " + bPrices[3] + " gold.");
                    playerSheet.Gold -= bPrices[3];
                    drinkCount += 4;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    break;

                case "5":
                    WriteLine("You purchased some skunnky smelling OLD Town IPA, that costs you " + bPrices[4] + " gold.");
                    playerSheet.Gold -= bPrices[4];
                    drinkCount += 2;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    break;

                case "6":
                    WriteLine("You purchased Well Water, that costs you " + bPrices[0] + " gold.");
                    playerSheet.Gold -= bPrices[0];
                    drinkCount -= 1;
                    WriteLine("\nYour remaining gold balance is: " + playerSheet.Gold);
                    break;

                default: WriteLine("You must have not wanted a drink. Press any key to bring up the menu.");
                    break;
            }

           
        }


    }

   
}
