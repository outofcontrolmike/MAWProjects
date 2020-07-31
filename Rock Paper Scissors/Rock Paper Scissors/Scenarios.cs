using System;
using System.Collections.Generic;
using System.Text;

namespace Rock_Paper_Scissors
{
    class Scenarios : Turns
    {
        public static string pChoice { get; private set; }
        public static int cWin { get; private set; }
        public static int pWin { get; private set; }

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
            if (pChoice == "Rock" && cChoice == "Paper")
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
    }
}
