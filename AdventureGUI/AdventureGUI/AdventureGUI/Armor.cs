using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace AdventureGUI
{
    class Armor
    {
        // What will Armor have?
        private string armorName = "";
        private int armorDefense = 0;
        private string armorDesc = "";
        private int goldValue = 0;

        // Constructor for Armor Objec

        // no arg constructor - so we can instantiate
        public Armor()
        {

        }

        //Constructor Expecting all fields
        public Armor(string armorname, int armordefense, string armordesc, int goldvalue)
        {
            this.armorName = armorname;
            this.armorDefense = armordefense;
            this.armorDesc = armordesc;
            this.goldValue = goldvalue;

        }

        // Getters and Setter methods

        // Work like a constructor

        // Get returns a value - Gets it
        // Set sets a value - sets a value

        public string ArmorName
        {
            get
            {
                return armorName;
            }
            set
            {
                armorName = value;
            }
        }// end ArmorName

        public int ArmorDefense
        {
            get
            {
                return armorDefense;
            }
            set
            {
                armorDefense = value;
            }
        }// end Armor Defense

        // build getter and setter for armor desc

        public string ArmorDesc
        {
            get
            {
                return armorDesc;
            }

            set
            {
                armorDesc = value;
            }
        }// end Armor Description

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
        public override string ToString()
        {
            WriteLine("\nArmor Name: " + armorName);
            WriteLine("\nArmor Defense: " + armorDefense);
            WriteLine("\nArmor Gold Value: " + goldValue);
            WriteLine("\nDescription : " + armorDesc);

            return null;

        }

    }
}
