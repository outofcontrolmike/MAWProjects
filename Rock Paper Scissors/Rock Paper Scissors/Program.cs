using System;

namespace Rock_Paper_Scissors
{
    class Program
    {
        static string name = "Rob";
        static bool one_two = true;
        static int choice = 0;
        static void Main(string[] args)
        {
            
                intro();
            Console.ReadKey();
        }

        public static void intro()
        {
            firstQuestion();
            while (one_two)
            {

                if (choice == 1)
                {
                    askName();
                    choice = 3;
                }
                if (choice == 2)
                {
                    printRules();
                    askName();
                    choice = 3;
                }
            }


            }//end intro
            public static void firstQuestion()
            {
                Console.WriteLine("Welcome to the Rock Paper Scissors!\n\n" +
                    "Press 1 to start the game.\n" +
                    "Press 2 for the rules\n");
                choice = Convert.ToInt32(Console.ReadLine());
                if (choice == 1 || choice == 2)
                {
                    one_two = true;
                }
                else
                {
                    one_two = false;
                }
        }
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
            }
            else
            {
                Console.WriteLine("Please enter the computers name");
                name = Console.ReadLine();
                Console.WriteLine("You decided to name the computer: " + name);
                Console.WriteLine("\n Press any key to continue");
                Console.ReadKey();
                
            }


        }

        public static void printRules()
        {
            Console.WriteLine("No rules yet");
            Console.ReadKey();
        }
    }
}
