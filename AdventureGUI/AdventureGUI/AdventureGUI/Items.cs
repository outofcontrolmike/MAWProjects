using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace AdventureGUI
{
    class Items
    {
        private string itemName = "";
        private int healChar = 0;
        private int iDamage = 0;
        private int goldValue = 0;
        private string itemDesc = "";


        // no arg constructor
        public Items()
        {

        }

        // Constructor for two fields
        public Items(string itemname, int healchar, int idamage, int goldvalue, string itemdesc)
        {
            this.itemName = itemname;
            this.healChar = healchar;
            this.iDamage = idamage;
            this.goldValue = goldvalue;
            this.itemDesc = itemdesc;
        }

        //Getters and setters

        public string ItemName
        {
            get
            {
                return itemName;
            }
            set
            {
                itemName = value;
            }
        }// end ItemName

        public int Healchar
        {
            get
            {
                return healChar;
            }
            set
            {
                healChar = value;
            }
        }// get heal

        public int Idamage
        {
            get
            {
                return iDamage;
            }
            set
            {
                iDamage = value;
            }
        }// end iDamage

        public int GoldValue
        {
            get
            {
                return goldValue;
            }
            set
            {
                goldValue = value;
            }
        }

        public string ItemDesc
        {
            get
            {
                return itemDesc;
            }
            set
            {
                itemDesc = value;
            }
        }// end itemDesc

        public override string ToString()
        {
            if (healChar > 0)
            {
                WriteLine("\nItem Name: " + itemName);
                WriteLine("\nItem Restores: " + healChar + " Health Points");
                WriteLine("\nItem Gold Value: " + goldValue);
                WriteLine("\nItem Description: " + ItemDesc);


            }
            if (iDamage > 0)
            {
                WriteLine("\nItem Name: " + itemName);
                WriteLine("\nItem Deals: " + iDamage + " points of damage");
                WriteLine("\nItem Gold Value: " + goldValue);
                WriteLine("\nItem Description: " + ItemDesc);
            }

            if (healChar == 0 && iDamage == 0)
            {
                WriteLine("\nItem Name: " + itemName);
                WriteLine("\nItem Gold Value: " + goldValue);
                WriteLine("\nItem Description: " + ItemDesc);
            }
            return null;
        }

        //

        public static void healCharacter(string itemName, int healChar)
        {
            WriteLine("You used " + itemName + " to heal yourself by " + healChar + " points");
        }// heal character

        public static void damageEnemy(string itemName, int iDamage)
        {
            WriteLine("You used " + itemName + " to damage the enemy by " + iDamage + " points");
        }// end damage enemy

        public static void itemWorth(string itemName, int itemValue)
        {
            WriteLine(itemName + " is worth " + itemValue + " gold");

        }//end item worth
    }
}
