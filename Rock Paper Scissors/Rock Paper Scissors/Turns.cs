using System;
using System.Collections.Generic;
using System.Text;
namespace Rock_Paper_Scissors
{
    
    class Turns : Intro
    {
        public static string cChoice { get; private set; }

        /// <summary>
        ///Decides Player's move
        /// </summary>
        public static void CMove()
        {
            int num = 0;
            while (num != 1 || num != 2 || num != 3)
            {
                System.Random random = new System.Random();

                num = random.Next(1, 3);
                if (num == 1)
                {
                    cChoice = "Rock";
                    break;

                }
                if (num == 2)
                {
                    cChoice = "Paper";
                    break;
                }
                if (num == 3)
                {
                    cChoice = "Scissors";
                    break;
                }
               
            }//end while
            Console.WriteLine("Computer Chose: " + cChoice);
            Console.ReadKey();
        }

        /// <summary>
        /// Players turn
        /// </summary>
        public static void PMove()
        {
            string num = "";
            string pChoice = "";
            while (num != "1" || num != "2" | num != "3")
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


            }
            Console.WriteLine("\nyou chose: " + pChoice);
        }
    }
}
