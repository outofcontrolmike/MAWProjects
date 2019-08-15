using System;
using static System.Console;

namespace CreateCharacterMain
{

    /// <summary>
    /// Project:    Character Builder
    /// Dev:        Michael Wilson
    /// Date:       07/24/2019
    /// Purpose:    Simulates a beginning of a game where user creates a character.  -- Text based.  Version 1.0
    /// </summary>
    /// 
        // Test making changes - Checkin to see if Github works

    class Program
    {
       
       

        static void Main(string[] args)
        {


            // Setting up Character


            IntroWalkthough.AskForName();
            IntroWalkthough.GetRace();
            IntroWalkthough.GetClass();
            IntroWalkthough.GetStats();
            IntroPlot.TheWakeUp();
           











        }// end of main

        /// <summary>
        /// Changes color of background and forecolor
        /// </summary>
        public static void changeColor()
        {
            BackgroundColor = ConsoleColor.Yellow;
            Clear();
            ForegroundColor = ConsoleColor.Black;
            Write("Press any key to continue");
            ReadKey();
        }




    }



}


