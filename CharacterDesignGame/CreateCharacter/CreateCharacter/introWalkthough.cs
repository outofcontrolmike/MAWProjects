using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace CreateCharacterMain
{
    class IntroWalkthough
    {
        #region variables;

        private static int age;
        private static string pClass = "";




        //control variables
        private static int ageHolder = 0;


        public static Weapon wStWeapon = new Weapon();
        public static Armor wStArmor = new Armor();
        public static Item startingItem = new Item();

        public static Weapon StWeapon = new Weapon();
        public static Armor StArmor = new Armor();

        public static MagicSpell mageSpell = new MagicSpell();
        public static MagicSpell cure = new MagicSpell();

        public static CharacterSheet playerSheet = new CharacterSheet();
        #endregion

        /// <summary>
        /// Asks user for Name
        /// </summary>
        public static void AskForName()
        {

            string charName;
            //Character Name
            WriteLine("Welcome to the create character part of the game!\n");
            WriteLine("First of all, What is your name? \n ");
            charName = ReadLine();
            Clear();
            while (charName == "")
            {

                if (charName == "")
                {
                    WriteLine("Enter a name for your charcter please.\n");
                    charName = ReadLine();
                    Clear();
                }

            }// end while

            WriteLine("Well done " + charName.ToUpper() + "!");
            Beep(10000 /2, 200);

            
            ReadKey(false);
            WriteLine("-----------------------------------------------------------------------------");
            WriteLine("\n\n\n");

            playerSheet.Name = charName.ToUpper();
            Clear();

        }// end GetName

        /// <summary>
        /// Asks user to choose Race and set AGE
        /// </summary>
        public static void GetRace()
        {
            int count = 1;  // control variable
            string pRace = "";  // empty place to place character race

            Clear();
            // Race
            WriteLine("There are four races you can choose from in this program: \n");
            WriteLine("Human\n" +
                  "Elf\n" +
                  "Dwarf\n" +
                  "Hobbit\n");

            while (count == 1)  // Testing to see if user choses a race and error handles it
            {


                WriteLine("What Race would you like to be?: \n");

                WriteLine("Type in H for Human\n" +
                       "type in E for Elf\n" +
                       "type in D for Dwarf\n" +
                       "type in HO for Hobbit\n");
                WriteLine("-----------------------------------------------------------------------------");

                pRace = ReadLine().ToUpper();

                WriteLine("\n");
                WriteLine("-----------------------------------------------------------------------------");

                Clear();
                // if user enters H
                if (pRace == "H")
                {
                    int ageCounter = 1;

                    pRace = "Human\n";
                    WriteLine("How old do you want to be as a Human?\n" +
                        "\nYou're allowed to be between 15-70.\n");

                    while (ageCounter == 1)
                    {

                        try
                        {
                            WriteLine("Enter an age between 15-70: \n");
                            ageHolder = Convert.ToInt32(ReadLine());
                            Clear();
                        

                            WriteLine("\n");

                            if (ageHolder < 15)
                            {
                                WriteLine("You're too young for this adventure!\n");


                            }
                            if (ageHolder > 70)
                            {
                                WriteLine("You're too old for this adventure!\n");

                            }
                            if (ageHolder >= 15 && ageHolder <= 70)
                            {
                                count++;
                                ageCounter++;
                                pRace = "Human";
                                age = ageHolder;



                            }// end if's
                            
                        }
                        
                        catch (System.FormatException)
                        {
                            WriteLine("Be sure to actually use numbers!\n");
                            ReadKey(false);

                        }// End Try Catch for age
                        Clear();
                    }//end While   
                }//end IF


                if (pRace == "E")
                {
                    int ageCounter = 1;


                    while (ageCounter == 1)
                    {

                        pRace = "Elf\n";
                        WriteLine("How old do you want to be as an Elf?\n");
                        try
                        {
                            WriteLine("Enter an age between 300-700: \n");
                            ageHolder = Convert.ToInt32(ReadLine());
                            WriteLine("\n");
                            if (ageHolder < 300)
                            {
                                WriteLine("You're too young for this adventure\n");


                            }
                            if (ageHolder > 700)
                            {
                                WriteLine("You're too old for this adventure\n");

                            }
                            if (ageHolder >= 300 && ageHolder <= 700)
                            {

                                ageCounter++;
                                count++;
                                pRace = "Elf";
                                age = ageHolder;

                            }
                        }
                        catch (System.FormatException)
                        {
                            WriteLine("Be sure to actually use numbers.\n");


                        }// End Try Catch for age

                      
                    }//end While   
                }//end IF
                if (pRace == "D")
                {
                    int ageCounter = 1;


                    while (ageCounter == 1)
                    {
                        
                        try
                        {
                            
                            WriteLine("Enter an age between 100-300: \n");
                            ageHolder = Convert.ToInt32(ReadLine());
                            WriteLine("\n");

                            if (ageHolder < 100)
                            {
                                WriteLine("You're too young for this adventure\n");


                            }
                            if (ageHolder > 300)
                            {
                                WriteLine("You're too old for this adventure\n");

                            }
                            if (ageHolder >= 100 && ageHolder <= 300)
                            {

                                ageCounter++;
                                count++;
                                pRace = "Dwarf";
                                age = ageHolder;

                            }
                        }
                        catch (System.FormatException)
                        {
                            WriteLine("Be sure to actually use numbers.\n");
                           


                        }// End Try Catch for age

                       
                    }//end While   
                }//end IF

                if (pRace == "HO")
                {
                    int ageCounter = 1;


                    while (ageCounter == 1)
                    {

                        try
                        {
                            
                            WriteLine("Enter an age between 22-90: \n");
                            ageHolder = Convert.ToInt32(ReadLine());
                            Clear();
                           
                            if (ageHolder < 22)
                            {
                                WriteLine("You're too young for this adventure\n");


                            }
                            if (ageHolder > 90)
                            {
                                WriteLine("You're too old for this adventure\n");

                            }
                            if (ageHolder >= 22 && ageHolder <= 90)
                            {

                                ageCounter++;
                                count++;
                                pRace = "Hobbit";
                                age = ageHolder;

                            }
                            



                        }
                        catch (System.FormatException)
                        {
                            
                            WriteLine("Be sure to actually use numbers.\n");
                            Clear();


                        }// End Try Catch for age

                       
                    }//end While   

                }//end IF
              

            }// end While

            WriteLine("You're a " + age + " Year old " + pRace + "!\n");
            playerSheet.Race = pRace;
            ReadKey(false);
            Clear();
            WriteLine("-----------------------------------------------------------------------------");




        }// end GetRace

        /// <summary>
        /// Gets Class from Character
        /// </summary>
        public static void GetClass()
        {

            // Class to choose from
            // Classes
            //Warrior
            //Mage
            //Theif
            //Cleric

            Clear();


            WriteLine("Here comes the tricky part.  What class would you like to choose from?\n"

                +
                "\nThere are Five different Classes to choose from and they have unique attributes: \n");

            ReadKey(false);
            Clear();
            WriteLine("\nThe Warrior has high Strength and Constitution. Makes a great close combat fighter.\n" +
            "\nThe Mage has high Intelligence and Wisdom. Can be very powerful later on. \n" +
            "\nThe Theif has high Dexterity and Charaisma. Accumlates gold very easily and can sneak around. \n" +
            "\nThe Cleric has high Constitution and Wisdom. Can bear high amounts of damage and cast white magic.\n ");


            WriteLine("Press Enter to bring up character select");
            ReadKey(false);
            Clear();
            

            WriteLine(
                    "\ntype in 1 for Warrior \n" +
                      "\ntype in 2 for Mage \n" +
                      "\ntype in 3 for Theif\n" +
                      "\ntype in 4 for Cleric \n");

            
            pClass = ReadLine();

            int counter = 1;
            while (counter == 1)
            {
  
                switch (pClass)
                {
                    case "1":
                        pClass = "Warrior";
                        counter++;
                        break;
                    case "2":
                        pClass = "Mage";
                        counter++;
                        break;
                    case "3":
                        pClass = "Theif";
                        counter++;
                        break;
                    case "4":
                        pClass = "Cleric";
                        counter++;
                        break;
                    default:
                        WriteLine("\nSince you didn't enter in a value, we assumed you wanted to be a Warrior.  If you're not happy about this, " +
                            "\nThere will be a chance to reset the intro");
                        pClass = "Warrior";
                        counter++;
                        break;
                }// end case statement



            }// end of while
            WriteLine("\nYou decided to choose the class of " + pClass);
            ReadKey(false);
        


        }// GetClass

        /// <summary>
        /// <summary>
        /// Displays Stats based on Class
        /// </summary>
        public static void GetStats()
        {
            WriteLine();
            WriteLine("Press Enter to view your stats for the " + pClass + "\n");

            BuildCharacter();
 
         

        }//end of get stats

        /// <summary>
        /// Get's Equipment Details 
        /// </summary>
        public static void GetEquipment()
        {
            Clear();
            WriteLine("\nWould you like to view your Weapons and Armor stats?");
            WriteLine("Enter y to check them out: \n");

            string choice = ReadLine();

            if (choice.ToUpper() == "Y")
            {
                wStWeapon.ToString();
                WriteLine("\n");
                WriteLine("-----------------------------------------------------------------------------");
                wStArmor.ToString();
                WriteLine("\n");
                ReadKey(false);
            }
        }// End GetEquipment
        public static void BuildCharacter()
        {


            if (pClass == "Warrior")
            {

                wStWeapon.Wname = "Broad Sword";
                wStWeapon.AttackPower = 20;
                wStWeapon.WDescription = "A nice broadsword to slay with";
                wStWeapon.Gvalue = 20;

                wStArmor.ArmorName = "Chain Mail";
                wStArmor.ArmorDefense = 10;
                wStArmor.ArmorDesc = "A specially crafteed suit of chain mail, passed on down by the warriors father";
                wStArmor.GoldValue = 100;

                // settings variables
                // 80 points

                int strength = 18;
                int dexterity = 14;
                int intelligence = 10;
                int wisdom = 9;
                int charisma = 14;
                int constitution = 15;
                

                playerSheet.CharClass = pClass;
                playerSheet.Age = age;
                playerSheet.Level = 1;
                playerSheet.Experience = 0;
                playerSheet.NextLevel = 1000;
                playerSheet.Strength = strength;
                playerSheet.Dexterity = dexterity;
                playerSheet.Intelligence = intelligence;
                playerSheet.Constitution = constitution;
                playerSheet.Wisdom = wisdom;
                playerSheet.Charisma = charisma;
                playerSheet.EquipedWeapon = wStWeapon.Wname;
                playerSheet.EquipedArmor = wStArmor.ArmorName;
                playerSheet.Gold = charisma * 100;
                playerSheet.Health = Convert.ToInt32(Math.Ceiling(8.2 * constitution));
                playerSheet.TempHealth = playerSheet.Health;
                playerSheet.MagicPoints = Convert.ToInt32(Math.Ceiling(3.5 * wisdom));
                playerSheet.TempMana = playerSheet.MagicPoints;
                playerSheet.AttackPower = Convert.ToInt32(Math.Ceiling(5.2 * strength) + wStWeapon.AttackPower);
                playerSheet.Defense = Convert.ToInt32(Math.Ceiling(2.1 * dexterity) + wStArmor.ArmorDefense);
                playerSheet.MagicPower = Convert.ToInt32(Math.Ceiling(1.5 * intelligence));

                playerSheet.ToString();
                GetEquipment();


            }// end Warrior

            if (pClass == "Mage")
            {

                wStWeapon.Wname = "Wooden Stalve";
                wStWeapon.AttackPower = 4;
                wStWeapon.WDescription = "A makeshift wooden stick.";
                wStWeapon.Gvalue = 4;


                wStArmor.ArmorName = "Leather Robe";
                wStArmor.ArmorDefense = 5;
                wStArmor.ArmorDesc = "An lightweight armor.";
                wStArmor.GoldValue = 40;


                int strength = 10;
                int dexterity = 12;
                int intelligence = 18;
                int constitution = 10;
                int wisdom = 18;
                int charisma = 12;


                playerSheet.CharClass = pClass;
                playerSheet.Age = age;
                playerSheet.Level = 1;
                playerSheet.Experience = 0;
                playerSheet.NextLevel = 1200;
                playerSheet.Strength = strength;
                playerSheet.Dexterity = dexterity;
                playerSheet.Intelligence = intelligence;
                playerSheet.Constitution = constitution;
                playerSheet.Wisdom = wisdom;
                playerSheet.Charisma = charisma;
                playerSheet.EquipedWeapon = wStWeapon.Wname;
                playerSheet.EquipedArmor = wStArmor.ArmorName;
                playerSheet.Gold = charisma * 100;
                playerSheet.Health = Convert.ToInt32(Math.Ceiling(6.2 * constitution));
                playerSheet.TempHealth = playerSheet.Health;
                playerSheet.MagicPoints = Convert.ToInt32(Math.Ceiling(3.5 * wisdom));
                playerSheet.TempMana = playerSheet.MagicPoints;
                playerSheet.AttackPower = Convert.ToInt32(Math.Ceiling(4.2 * strength) + wStWeapon.AttackPower);
                playerSheet.Defense = Convert.ToInt32(Math.Ceiling(2.1 * dexterity) + wStArmor.ArmorDefense);
                playerSheet.MagicPower = Convert.ToInt32(Math.Ceiling(2.5 * intelligence));

                playerSheet.ToString();
                GetEquipment();
                BuildFireBall();
               
            }// end Mage

            if (pClass == "Theif")
            {

                //Instantiate Weapon and Armor for start

                wStWeapon.Wname = "Dirk";
                wStWeapon.AttackPower = 15;
                wStWeapon.WDescription = "A stealhty light weight knife";
                wStWeapon.Gvalue = 40;

                wStArmor.ArmorName = "Cloak";
                wStArmor.ArmorDefense = 8;
                wStArmor.ArmorDesc = "A mysterious cloak, looks like it was stolen.";
                wStArmor.GoldValue = 300;


                int strength = 13;
                int dexterity = 18;
                int intelligence = 14;
                int constitution = 12;
                int wisdom = 10;
                int charisma = 13;

                playerSheet.CharClass = pClass;
                playerSheet.Age = age;
                playerSheet.Level = 1;
                playerSheet.Experience = 0;
                playerSheet.NextLevel = 1000;
                playerSheet.Strength = strength;
                playerSheet.Dexterity = dexterity;
                playerSheet.Intelligence = intelligence;
                playerSheet.Constitution = constitution;
                playerSheet.Wisdom = wisdom;
                playerSheet.Charisma = charisma;
                playerSheet.EquipedWeapon = wStWeapon.Wname;
                playerSheet.EquipedArmor = wStArmor.ArmorName;
                playerSheet.Gold = charisma * 100;
                playerSheet.Health = Convert.ToInt32(Math.Ceiling(8.2 * constitution));
                playerSheet.TempHealth = playerSheet.Health;
                playerSheet.MagicPoints = Convert.ToInt32(Math.Ceiling(3.5 * wisdom));
                playerSheet.TempMana = playerSheet.MagicPoints;
                playerSheet.AttackPower = Convert.ToInt32(Math.Ceiling(4.2 * strength) + wStWeapon.AttackPower);
                playerSheet.Defense = Convert.ToInt32(Math.Ceiling(2.1 * dexterity) + wStArmor.ArmorDefense);
                playerSheet.MagicPower = Convert.ToInt32(Math.Ceiling(2.5 * intelligence));

                playerSheet.ToString();
                GetEquipment();
             

            }// end Theif

            if (pClass == "Cleric")
            {
 
                wStWeapon.Wname = "Mace";
                wStWeapon.AttackPower = 18;
                wStWeapon.WDescription = "Spiked Mace used to detone with";
                wStWeapon.Gvalue = 40;

                wStArmor.ArmorName = "Plated Armor";
                wStArmor.ArmorDefense = 30;
                wStArmor.ArmorDesc = "Armor made to withstand the strongest blows.";
                wStArmor.GoldValue = 300;

                int strength = 12;
                int dexterity = 10;
                int intelligence = 12;
                int constitution = 18;
                int wisdom = 14;
                int charisma = 14;

                playerSheet.CharClass = pClass;
                playerSheet.Age = age;
                playerSheet.Level = 1;
                playerSheet.Experience = 0;
                playerSheet.NextLevel = 1000;
                playerSheet.Strength = strength;
                playerSheet.Dexterity = dexterity;
                playerSheet.Intelligence = intelligence;
                playerSheet.Constitution = constitution;
                playerSheet.Wisdom = wisdom;
                playerSheet.Charisma = charisma;
                playerSheet.EquipedWeapon = wStWeapon.Wname;
                playerSheet.EquipedArmor = wStArmor.ArmorName;
                playerSheet.Gold = charisma * 100;
                playerSheet.Health = Convert.ToInt32(Math.Ceiling(8.9 * constitution));
                playerSheet.TempHealth = playerSheet.Health;
                playerSheet.MagicPoints = Convert.ToInt32(Math.Ceiling(3.5 * wisdom));
                playerSheet.TempMana = playerSheet.MagicPoints;
                playerSheet.AttackPower = Convert.ToInt32(Math.Ceiling(4.2 * strength) + wStWeapon.AttackPower);
                playerSheet.Defense = Convert.ToInt32(Math.Ceiling(2.1 * dexterity) + wStArmor.ArmorDefense);
                playerSheet.MagicPower = Convert.ToInt32(Math.Ceiling(4.5 * intelligence));


                playerSheet.ToString();
                GetEquipment();
             
               
                BuildCure();
           

            }// end Cleric
        }// end BuildCharacter

        /// <summary>
        /// sets the mage's build stuff
        /// </summary>
        private static void BuildFireBall()
        {
            mageSpell.Name = "Fire Ball";
            mageSpell.MagicCost = 20;
            mageSpell.MDesc = "A scrorching ball of fire that can incenerate enenmies.";
            mageSpell.MagicDamage = 20;
            mageSpell.MHeal = 0;
            mageSpell.RequiredLevel = 1;

            Clear();
            mageSpell.ToString();


        }

        public static void BuildCure()
        {

       
           

            cure.Name = "Cure";
            cure.MagicCost = 10;
            cure.MDesc = "A basic spell that can heal minor wounds and stop bleeding";
            cure.MHeal = Convert.ToInt32(Math.Ceiling(2.5 * playerSheet.Wisdom));
            cure.MagicDamage = 0;
            cure.RequiredLevel = 0;

            Clear();
            cure.ToString();
        }

   

    
    }//end of class

    }// end of namespace
       


