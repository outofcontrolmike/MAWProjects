using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace AdventureGUI
{
    class CharacterSheet
    {
        #region properties
        private string name;
        private string race;
        private string charClass;
        private int age;
        private int level;
        private int experience;
        private int nextLevel;
        private int gold;
        private int health;
        private int tempHealth;
        private int magicPoints;
        private int tempMana;
        private int attackPower;
        private int defense;
        private int magicPower;
        private int strength;
        private int dexterity;
        private int intelligence;
        private int constitution;
        private int wisdom;
        private int charisma;
        private string equipedWeapon;
        private string equipedArmor;
        #endregion

        public CharacterSheet()
        {

        }

        public CharacterSheet(string name)
        {
            this.Name = name;
        }

        public CharacterSheet(string name, string race, string charClass, int age, int level, int experience,
            int nextLevel, int gold, int health, int magicPoints,  int attackPower, int defense, int magicPower, int strength, int dexterity, int intelligence,
            int constitution, int wisdom, int charisma, string equipedWeapon, string equipedArmor)
        {
            this.Name = name;
            this.Race = race;
            this.CharClass = charClass;
            this.Age = age;
            this.Level = level;
            this.Experience = experience;
            this.NextLevel = nextLevel;
            this.Gold = gold;
            this.Health = health;
      
            this.MagicPoints = magicPoints;
            this.AttackPower = attackPower;
            this.Defense = defense;
            this.MagicPower = magicPower;
            this.Strength = strength;
            this.Dexterity = dexterity;
            this.Intelligence = intelligence;
            this.Constitution = constitution;
            this.Wisdom = wisdom;
            this.Charisma = charisma;
            this.EquipedWeapon = equipedWeapon;
            this.EquipedArmor = equipedArmor;
        }

        public string Name { get => name; set => name = value; }
        public string Race { get => race; set => race = value; }
        public string CharClass { get => charClass; set => charClass = value; }
        public int Age { get => age; set => age = value; }
        public int Level { get => level; set => level = value; }
        public int Experience { get => experience; set => experience = value; }
        public int NextLevel { get => nextLevel; set => nextLevel = value; }
        public int Gold { get => gold; set => gold = value; }
        public int Health { get => health; set => health = value; }

        public int MagicPoints { get => magicPoints; set => magicPoints = value; }
        public int AttackPower { get => attackPower; set => attackPower = value; }
        public int Defense { get => defense; set => defense = value; }
        public int MagicPower { get => magicPower; set => magicPower = value; }
        public int Strength { get => strength; set => strength = value; }
        public int Dexterity { get => dexterity; set => dexterity = value; }
        public int Intelligence { get => intelligence; set => intelligence = value; }
        public int Constitution { get => constitution; set => constitution = value; }
        public int Wisdom { get => wisdom; set => wisdom = value; }
        public int Charisma { get => charisma; set => charisma = value; }
        public string EquipedWeapon { get => equipedWeapon; set => equipedWeapon = value; }
        public string EquipedArmor { get => equipedArmor; set => equipedArmor = value; }
        public int TempHealth { get => tempHealth; set => tempHealth = value; }
        public int TempMana { get => tempMana; set => tempMana = value; }

        public override string ToString()
        {
            
            WriteLine(charClass.ToUpper());

            WriteLine("\nName: " + name);
            WriteLine("race: " + race);
            WriteLine("Class: " + charClass);
            WriteLine("Age:   " + age);
            WriteLine("Level: " + level + "\nExeperience: " + Experience);
            WriteLine("Next Level Up: " + nextLevel);
            WriteLine("Gold: " + gold);
            WriteLine("\n");
            WriteLine("Health: " + health + "/" + tempHealth);
            WriteLine("Mana: " + magicPoints + "/" + TempMana + ("\n"));
            WriteLine("-----------------------------------------------------------------------------");
            WriteLine("Press Enter for more stats");
           

            WriteLine("\nAttack Power: " + attackPower);
            WriteLine("Magic Attack: " + magicPower);
            WriteLine("Defense: " + defense);

            WriteLine("Strength: " + strength);
            WriteLine("Dexterity: " + dexterity);
            WriteLine("Intelligence: " + intelligence);
            WriteLine("Constitution: " + constitution);
            WriteLine("Wisdom: " + wisdom);
            WriteLine("Charimsa: " + charisma + "\n");
            WriteLine("Weapon Equiped: " + equipedWeapon);
            WriteLine("Armor Equiped: " + equipedArmor);

            WriteLine("-----------------------------------------------------------------------------");
            WriteLine("Press Enter to continue");

            return null;




        }




    }
}

