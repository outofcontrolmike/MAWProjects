using System;
using System.Collections.Generic;
using System.Text;

namespace Rock_Paper_Scissors
{
    class Checker : Scenarios
    {
        /// <summary>
        /// Checks to see who won the match
        /// </summary>
        ///

        public static void GameChecker()
        {
            Draw();
            LoseMatch();
            WinMatch();
        }

        public static void game()
        {
            while (pWin < 3 || cWin < 3)
            {
                Console.WriteLine("The match begins!");
                Console.ReadKey();
                Console.Clear();
                CMove();
                PMove();
                GameChecker();
                Console.ReadKey();
            }// end while


                }

        public static void credits()
        {
            Console.WriteLine("Game is over!");
            int pDifference = pWin - cWin;
            int cDifference = cWin - pWin;

            if (pWin > cWin)
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
        }//end credits
    }
}
