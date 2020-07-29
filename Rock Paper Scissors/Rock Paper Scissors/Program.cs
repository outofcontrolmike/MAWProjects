using System;

namespace Rock_Paper_Scissors
{
    class Program
    {
        static string pName = "Hank Hill";
        static string name = "Rob";
        static string choice = "0";
        static int pWin = 0;
        static int cWin = 0;
        static string pChoice = "0";
        static string cChoice = "0";
        static void Main(string[] args)
        {
            getChoice();
            game();
        }

        /// <summary>
        /// Goes through intro and set's up name
        /// </summary>
        public static void getChoice()
        {
            FirstQuestion();
            AskName();
        }

        public static void game()
        {
            while(pWin < 3 || cWin < 3)
            {
                Console.WriteLine("The match begins!");
                Console.ReadKey();
                Console.Clear();
                PMove();
                CMove();
                GameChecker();
                Console.ReadKey();
            }
            Console.WriteLine("Game is over!");
            int pDifference = pWin - cWin;
            int cDifference = cWin - pWin;

            if(pWin > cWin)
            {
                Console.WriteLine("Congratulations, you won by " + pDifference + "!");
                Console.WriteLine("Final score:" +
                    pName + ": " + pWin + "\n" +
                   name + ": " + cWin);
                Console.WriteLine("\nEnd of game");
                Console.WriteLine("\n****************************************************");
                
               
            }
            if (cWin > pWin)
            {
                Console.WriteLine("Too Bad!!! the computer won by " + cDifference + "!");
                Console.WriteLine("Final score:" +
                    name + ": " + cWin + "\n" +
                   pName + ": " + pWin);
                Console.WriteLine("\nEnd of game");
                Console.WriteLine("\n****************************************************");

            }
        }
        /// <summary>
        ///Decides Player's move
        /// </summary>
        public static void CMove()
        {
            int num = 0;
            while (num!= 1 || num != 2 || num != 3)
            {
                System.Random random = new System.Random();

                num = random.Next(1, 4);
                if (num == 1)
                {
                    cChoice = "Rock";
                    
                }
                if(num == 2)
                {
                    cChoice = "Paper";
                }
                if(num == 3)
                {
                    cChoice = "Scissors";
                }
                else
                {
                    Console.WriteLine("Please enter 1, 2 or 3 as an option");
                }
            }
            Console.WriteLine("Computer Chose: " + cChoice);
            Console.ReadKey();
        }

        /// <summary>
        /// Will auto generate the computer's decision
        /// </summary>
        public static void PMove()
        {
            string num = "0";
            while (num != "1" || num != "2" || num != "3")
            {
                Console.WriteLine("Press 1 for Rock\n" +
             "Press 2 for Paper\n" +
             "Press 3 for Scissors");
                num = Console.ReadLine();
                if (num == "1")
                {
                    pChoice = "Rock";
                    break;

                }
                if (num == "2")
                {
                    pChoice = "Paper";
                    break;
                }
                if (num == "3")
                {
                    pChoice = "Scissors";
                    break;
                }
                else
                {
                    Console.WriteLine("Please enter 1, 2 or 3 as an option");
                }
            }
            Console.WriteLine("\nyou chose: " + pChoice);
        }

       public static void Draw()
        {
            //rock rock  = draw
            //pap  pap   = draw
            //scis scis  = draw
            if (cChoice == "Rock" && pChoice == "Rock" || cChoice == "Paper" && pChoice == "Paper" || cChoice == "Scissors" && pChoice == "")
            {
                Console.WriteLine("Draw between you and the oponnet\n");
                Console.ReadKey();
            }// end draw
          
        }

        /// <summary>
        /// Players loss scenarios
        /// </summary>
        public static void LoseMatch()
        {
            if(pChoice == "Rock" && cChoice == "Paper")
            {
                Console.WriteLine("Paper covers rock\n" +
                    "You lose this match");
                cWin++;
                Console.ReadKey();
            }
            if (pChoice == "Paper" && cChoice == "Scissors")
            {
                Console.WriteLine("Sissors cuts paper\n" +
                    "You lose this match");
                cWin++;
                Console.ReadKey();
            }
            if (pChoice == "Scissors" && cChoice == "Rock")
            {
                Console.WriteLine("Rock beats paper down\n" +
                    "You lose this match");
                cWin++;
                Console.ReadKey();

            }
            Console.Clear();

        }

        /// <summary>
        /// Players Win scenarios
        /// </summary>
        public static void WinMatch()
        {
            if (cChoice == "Rock" && pChoice == "Paper")
            {
                Console.WriteLine("Paper covers rock\n" +
                    "You win the match!");
                Console.ReadKey();
                pWin++;
            }
            if (cChoice == "Paper" && pChoice == "Scissors")
            {
                Console.WriteLine("Sissors cuts paper\n" +
                    "You win the match!");
                Console.ReadKey();
                pWin++;
            }
            if (cChoice == "Scissors" && pChoice == "Rock")
            {
                Console.WriteLine("Rock beats paper down\n" +
                    "You win the match!");
                Console.ReadKey();
                pWin++;
            }
            Console.Clear();


        }
        /// <summary>
        /// Checks to see who won the match
        /// </summary>
        public static void GameChecker()
        {
            Draw();
            LoseMatch();
            WinMatch();
        }

      
        /// <summary>
        /// Goes through initial menu
        /// </summary>
        public static void FirstQuestion()
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
        public static void AskName()
        {
            Console.WriteLine("Please enter your name!");
            pName = Console.ReadLine();
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
        public static void PrintRules()
        {
            Console.WriteLine("No rules yet");
            Console.ReadKey();
        }
    }
}
