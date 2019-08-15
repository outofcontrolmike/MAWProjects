using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace CreateCharacterMain
{
    /// <summary>
    /// point of this class is to keep track of levels for character
    /// </summary>
    class levelUpTracker : Program
    {


      
        public static void Checklevel()
        {
            if (IntroWalkthough.playerSheet.Experience >= IntroWalkthough.playerSheet.NextLevel)
            {
                Clear();
                WriteLine("You made it to level " + (IntroWalkthough.playerSheet.Level + 1)+ "!\n");

                // Health
                // Mana
                // AttackPower
                // Defense
                // level

                Beep();

                int tMaxHealth = IntroWalkthough.playerSheet.Health;

                
                IntroWalkthough.playerSheet.Health += IntroWalkthough.playerSheet.Constitution * 1;
                IntroWalkthough.playerSheet.TempHealth = IntroWalkthough.playerSheet.Health;
                IntroWalkthough.playerSheet.MagicPoints += IntroWalkthough.playerSheet.Wisdom * 1;
                IntroWalkthough.playerSheet.TempMana = IntroWalkthough.playerSheet.MagicPoints;
                IntroWalkthough.playerSheet.AttackPower += IntroWalkthough.playerSheet.Strength * 1;
                IntroWalkthough.playerSheet.Defense += IntroWalkthough.playerSheet.Dexterity * 1;
                 
                IntroWalkthough.playerSheet.Level += 1;
                IntroWalkthough.playerSheet.NextLevel *= 2;

                ReadKey(false);

                WriteLine("Your health increased by: " + (IntroWalkthough.playerSheet.Constitution * 1));
                WriteLine("Your magic points increased by: " + (IntroWalkthough.playerSheet.Wisdom * 1));
                WriteLine("Your attack power increased by: " + (IntroWalkthough.playerSheet.Strength * 1));
                WriteLine("Your Defense Increased by: " + (IntroWalkthough.playerSheet.Dexterity * 1));
                WriteLine("\nYour next level is at " + IntroWalkthough.playerSheet.NextLevel * 2);
                WriteLine("Current Expereince: " + IntroWalkthough.playerSheet.Experience + " Experience");
                ReadKey(false);

              
            }
        }
    }
}
