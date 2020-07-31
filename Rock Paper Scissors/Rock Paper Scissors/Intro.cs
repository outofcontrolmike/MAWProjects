using System;
using System.Collections.Generic;
using System.Text;

namespace Rock_Paper_Scissors
{
    class Intro
    {
        public static string pName = "";
        public static string name = "";
        /// <summary>
        /// Goes through initial menu
        /// </summary>
        public static void FirstQuestion()
        {
            string choice = "";

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
        public static void AskName()
        {
            string name = "Rob";
            Console.WriteLine("Please enter your name!");
            pName = Console.ReadLine();
            Console.WriteLine("Okay " + pName + "!  Do you want to name your opponent?\n" +
                "type yes or no");
            string choice = Console.ReadLine();
            if (choice != "yes")
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
        public static void PrintRules()
        {
            Console.WriteLine("No rules yet");
            Console.ReadKey();
        }
    }
}
