using System;

namespace Rock_Paper_Scissors
{
    class Program
    {
        static string name = "Rob";
        static bool one_two = true;
        static string choice = "0";
        static int pWin = 0;
        static int cWin = 0;
        static string pChoice = "0";
        static string cChoice = "0";
        static void Main(string[] args)
        {
            getChoice();
            Console.WriteLine("Testing");

        }

        /// <summary>
        /// Goes through intro and set's up name
        /// </summary>
        public static void getChoice()
        {
            firstQuestion();
            askName();
        }

        public static void game()
        {

        }
        /// <summary>
        ///Decides Player's move
        /// </summary>
        public static void pMove()
        {
            string num = "0";
            while (num!= "1" || num != "2" || num != "3")
            {
                Console.WriteLine("Press 1 for Rock" +
             "Press 2 for Paper" +
             "Press 3 for Scissors");
                num = Console.ReadLine();
                if (num == "1")
                {
                    pChoice = "Rock";
                    
                }
                if(num == "2")
                {
                    pChoice = "Paper";
                    pChoice = "Paper";
                }
                if(num == "3")
                {
                    pChoice = "Scissors";
                }
                else
                {
                    Console.WriteLine("Please enter 1, 2 or 3 as an option");
                }
            }
            Console.WriteLine("You chose: " + pChoice);
           
        }

        /// <summary>
        /// Will auto generate the computer's decision
        /// </summary>
        public static void cMove()
        {

        }

       
        public static void gameChecker()
        {
            //check all scenarios of rock paper scissors
            //rock rock  = draw
            //scis scis  = draw
            //pap  pap   = draw
            //rock paper = win
            //paper rock = win
            //scis paper = win
            //rock paper = lose
            //scis rock  = lose
            //paper scis = lose

            // if Choice

        }

      
        /// <summary>
        /// Goes through initial menu
        /// </summary>
        public static void firstQuestion()
        {
            while (choice != "1" || choice != "2")
            {
                Console.WriteLine("Welcome to the Rock Paper Scissors!\n\n" +
                    "Press 1 to start the game.\n" +
                    "Press 2 for the rules\n");
                choice = Console.ReadLine();
                if (choice == "1")
                {
                    Console.WriteLine("Let's begin the game!");
                    Console.ReadKey();
                    Console.Clear();
                    break;
                    
                }
                if (choice == "2")
                {
                    Console.WriteLine("No rules yet!");
                    Console.ReadKey();
                    Console.Clear();
                    break;
                }
                else
                {
                    Console.WriteLine("Enter a correct option");
                    Console.ReadLine();
                    Console.ReadKey();
                    Console.Clear();
                }
            }//end while
        }
        /// <summary>
        /// Asks's user and computer name
        /// </summary>
        public static void askName()
        {
            Console.WriteLine("Please enter your name!");
            string pName = Console.ReadLine();
            Console.WriteLine("Okay " + pName + "!  Do you want to name your opponent?\n" +
                "type yes or no");
            string choice = Console.ReadLine();
            if(choice != "yes")
            {
                Console.WriteLine("The computer's name will be: " + name);
                Console.Beep(120, 2000);
            }
            else
            {
                Console.WriteLine("Please enter the computers name\n");
                name = Console.ReadLine();
                Console.WriteLine("You decided to name the computer: " + name);
                Console.WriteLine("\n Press any key to continue");
                Console.ReadKey();
                
            }


        }

        /// <summary>
        /// Prints rules
        /// </summary>
        public static void printRules()
        {
            Console.WriteLine("No rules yet");
            Console.ReadKey();
        }
    }
}
