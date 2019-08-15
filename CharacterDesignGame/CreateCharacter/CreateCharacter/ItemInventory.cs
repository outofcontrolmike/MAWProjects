using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace CreateCharacterMain
{
    /// <summary>
    /// Purpose is to store an array for instantiated items
    /// 
    /// </summary>
    class ItemInventory
    {
        Item smallKnive = new Item();
        Item fNt = new Item();
        Item potion = new Item();

        
        /// <summary>
        /// Intanstiate three items
        /// </summary>
        public static void startingItems()
        {

            Item smallKnive = new Item();

            smallKnive.ItemName = "Dagger";
            smallKnive.Healchar = 0;
            smallKnive.Idamage = 20;
            smallKnive.GoldValue = 50;
            smallKnive.ItemDesc = "A small knife that can help in tricky situations\n and cause major damage if used stealthly.";

            smallKnive.ToString();

            Item fNt = new Item();

            fNt.ItemName = "Flint n Tender";
            fNt.Healchar = 0;
            fNt.Idamage = 0;
            fNt.GoldValue = 0;
            fNt.ItemDesc = "Great for starting fires.";

            fNt.ToString();

            Item potion = new Item();

            potion.ItemName = "Potion";
            potion.Healchar = 30;
            potion.Idamage = 0;
            potion.GoldValue = 50;
            potion.ItemDesc = "Heals 30 hitpoints in times of need.";

            potion.ToString();


            //ItemInventory[] itemInventoryArray = new ItemInventory[3];
            //itemInventoryArray[0] = smallKnive]
            //itemInventoryArray[1] = fNt;
            //itemInventoryArray[2] = potion;



            WriteLine(smallKnive);
            WriteLine(fNt);
            WriteLine(potion);

            WriteLine(smallKnive.ToString());

           

            





        }

        /// <summary>
        /// Add items from starting items to array
        /// Be sure to only insert them as objects
        /// </summary>
        public static void itemInventoryArrayMethod()
        {
            startingItems();

          

        }

     
    }
}
