using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace AdventureGUI
{
    class MagicSpell
    {
        private string name = "";
        private int magicCost = 0;
        private string mDesc = "";

        private int mDamage = 0;
        private int mHeal = 0;
        private int requiredLevel = 0;


        //Build a couple constructors for this

        /// <summary>
        /// No arg constructor
        /// </summary>
        public MagicSpell()
        {

        }

        //Constructor that expects all paramters

        public MagicSpell(string name, int magiccost, string mdesc, int mdamage, int mheal, int requiredlevel)
        {
            this.name = name;
            this.magicCost = magiccost;
            this.mDesc = mdesc;
            this.mDamage = mdamage;
            this.mHeal = mheal;
            this.requiredLevel = requiredlevel;

        }

        //Getters and Setters for each variable

        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }// end name

        public int MagicCost
        {
            get
            {
                return magicCost;
            }
            set
            {
                magicCost = value;
            }
        }// end magicCost

        public string MDesc
        {
            get
            {
                return mDesc;
            }
            set
            {
                mDesc = value;
            }
        }// end magic description

        public int MagicDamage
        {
            get
            {
                return mDamage;
            }
            set
            {
                mDamage = value;
            }
        }// end magic damage

        public int MHeal
        {
            get
            {
                return mHeal;
            }

            set
            {
                mHeal = value;
            }
        }// end mHeal;

        public int RequiredLevel
        {
            get
            {
                return requiredLevel;
            }
            set
            {
                requiredLevel = value;
            }
        }// required level

        /// <summary>
        /// To string method from 
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            WriteLine("-----------------------------------------------------------------------------");
            WriteLine("\nSpell Name: " + name);
            WriteLine("\nCost to use: " + magicCost);
            WriteLine("\nSpell description: " + mDesc);
            if (mDamage > 0)
            {
                WriteLine("\nSpell Damage: " + mDamage);
            }
            if (mHeal > 0)
            {
                WriteLine("\nSpell Heal: " + mHeal);
            }
            WriteLine("\nLevel Required to use: " + requiredLevel);
            return null;
            WriteLine("-----------------------------------------------------------------------------");
        }
    }
}
