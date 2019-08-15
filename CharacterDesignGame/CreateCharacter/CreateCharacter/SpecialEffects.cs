using System;
using System.Collections.Generic;
using System.Text;

namespace CreateCharacterMain
{
    class SpecialEffects
    {
        public static void ChangeTerminalColor()
        {
            Console.BackgroundColor = ConsoleColor.Blue;
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.White;
            Console.ReadKey(false);
           
        }

        public static void ChangeTerminalBack()
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.Clear();
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}
