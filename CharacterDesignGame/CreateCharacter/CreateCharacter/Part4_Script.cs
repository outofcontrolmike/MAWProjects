using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace CreateCharacterMain
{
    class Part4_Script : Part3_Script
    {
        /// <summary>
        /// Call everything here
        /// </summary>
        public static void WrapUp()
        {
            AfterBattle();
        }

        public static void AfterBattle()
        {
            Clear();
            WriteLine("After you are through with the bandit, you notice" +
                " all of the other bandits are defeated as well.");
            WriteLine("You notice the Tavern owner is safe and sound behind the bar " +
                " and the group of humans in the tavern don't seem harmed, they must be" +
                " highly experienced fighters.");
            WriteLine("You watch as the fighters cary the boddies out the door and throw them" +
                " on next to the road.");
            ReadKey(false);
            TavernOwner();

        }

        public static void TavernOwner()
        {
            Clear();
            WriteLine("Hey, my name is 'Desarah', I'd like to thank you for helping fight off the bandits." +
                "\nYou watch as Desarah digs into a special part of the bar and pulls out some gold.");
            WriteLine("Desarah drops 100 gold on the table and offers it to you.");
            WriteLine("\nYou gladly walk over to the gold and take it.");
            ReadKey(false);
            Clear();
            playerSheet.Gold += 100;

            WriteLine("YOU: 'I'm not used to this town at all.  What do you reccomend" +
                " that I do from here?'");
            WriteLine("\nDESARAH: 'I reccomened that you go out into the village and take a walk around." +
                " So that you'll be familiar with what this town has to offer. Good luck on your" +
                " journey and maybe we'll see you back at the bar tonight.");
            WriteLine("\nYou grin at the Tavern Owner and head your way to the door.");
            ReadKey(false);
            Clear();
            WriteLine("This has been a test application and I really hope to build on to this idea." +
                " I want to try using a windows form app for this and maybe" +
                " even a game engine such as Unity.");


            WriteLine("\nThank you very much for playing!!!");

        }
    }
}
