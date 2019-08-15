using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace AdventureGUI
{
    class Enemies
    {
        //What should an enemy have?
        private string name = "";
        private int health = 0;
        private int tempHealth = 0;
        private int mana = 0;
        private int tempMana = 0;
        private int attackPower = 0;
        private int defense = 0;
        private int gainedExp = 0;
        private int gainedGold = 0;

        /// <summary>
        /// no arg constructor
        /// </summary>
        public Enemies()
        {

        }
        /// <summary>
        /// Expects every field
        /// </summary>
        /// <param name="name"></param>
        /// <param name="health"></param>
        /// <param name="tempHealth"></param>
        /// <param name="mana"></param>
        /// <param name="tempMana"></param>
        /// <param name="attackPower"></param>
        /// <param name="defense"></param>
        /// <param name="gainedExp"></param>
        /// <param name="gainedGold"></param>
        public Enemies(string name, int health, int tempHealth, int mana, int tempMana, int attackPower, int defense, int gainedExp, int gainedGold)
        {
            this.name = name;
            this.health = health;
            this.tempHealth = tempHealth;
            this.mana = mana;
            this.tempMana = tempMana;
            this.attackPower = attackPower;
            this.defense = defense;
            this.gainedExp = gainedExp;
            this.gainedGold = gainedGold;
        }
        #region getters & setters
        public string Name { get => name; set => name = value; }
        public int Health { get => health; set => health = value; }
        public int TempHealth { get => tempHealth; set => tempHealth = value; }
        public int Mana { get => mana; set => mana = value; }
        public int TempMana { get => tempMana; set => tempMana = value; }
        public int AttackPower { get => attackPower; set => attackPower = value; }
        public int Defense { get => defense; set => defense = value; }
        public int GainedExp { get => gainedExp; set => gainedExp = value; }
        public int GainedGold { get => gainedGold; set => gainedGold = value; }
        #endregion

        public override string ToString()
        {
            Console.WriteLine();
            return null;
        }
    }
}
