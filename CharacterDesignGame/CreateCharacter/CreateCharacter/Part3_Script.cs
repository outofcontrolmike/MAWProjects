using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace CreateCharacterMain
{
    class Part3_Script : Part2_Script
    {

        private static Enemies Bandit = new Enemies();
        private static int tip;

        /// <summary>
        /// Method that controls the chapter
        /// </summary>
        public static void Battle()
        {
            //Testing
            
          
            SetEnemy();
            StoryBeforeBattle();

        }//end Battle



        /// <summary>
        /// Sets the enemy up
        /// </summary>
        public static void SetEnemy()
        {

            Bandit.Name = "Jamahl";
            Bandit.Health = 50;
            Bandit.TempHealth = 50;
            Bandit.Mana = 10;
            Bandit.TempMana = 20;
            Bandit.AttackPower = 10;
            Bandit.Defense = 30;
            Bandit.GainedExp = 1400;
            Bandit.GainedGold = 100;

        }//end setEnemy

        /// <summary>
        /// Preludes into battle
        /// </summary>
        public static void StoryBeforeBattle()
        {
            Clear();
            WriteLine("As you walk downstairs you see that this tavern also does well" +
                " as a breakfast place, there are many groups of people participating in breakfast.");
            WriteLine("\nYou take a seat at the bar and a young waitress comes to your attention right away.");
            WriteLine("\n'Hey, you stayed here over night, breakfast is included in your stay." +
                "\nDoes a country skillet and coffee sound good for you.?'");
            WriteLine("" +
                "\nYou sit there with a grin on your face and defintiley agree with" +
                " the breakfast option.");
            ReadKey(false);
            Clear();
            WriteLine("Over some time you go over a few cups of coffee." +
                "\nYou learn that the town is named Desolation and that there" +
                " are a lot of options for work to be done and even a wanted job list" +
                " that's posted on one of the tavern walls.");
            WriteLine("\nEventually your breakfast comes out and it smells so good." +
                " It's got: " +
                "\n" +
                "________" +
                "\nPotatoes" +
                "\nPeppers" +
                "\nOnions" +
                "\nWildMushrooms" +
                "\nTomatoes" +
                "\nSausage" +
                "\nEggs");
            WriteLine("\nYou savor the food for as long as you can and you greatly appreciate the breakfast." +
                " It's just want you needed.");
            ReadKey(false);
            Clear();
            WriteLine("You finish your plate the the waitress takes cleans up after you." +
                " Your service was so good, maybe you should leave a tip...");
            LeaveTip();
            Clear();
            WriteLine("You see that there's only one other group left so it's almost scarce at the tavern.");
            WriteLine("You decide to go back up to your room to gather your things and start" +
                " on your adventure to see town.");
            WriteLine("\nRight as your about to leave you hear yelling from downstairs.");
            ReadKey(false);

            //Test - 

            UpOrDown();
            ReadKey(false);
            BanditFight();


        }//end StoryBeforeBattle

        /// <summary>
        /// Option to leave tip
        /// </summary>
        public static void LeaveTip()
        {

            int counter = 1;

            while (counter == 1)
            {
                try
                {
                    Clear();
                    WriteLine("You currently have " + playerSheet.Gold + "  gold.");
                    WriteLine("\nEnter the amount of gold that you want to tip.");
                    tip = Convert.ToInt32(ReadLine());

                    if (playerSheet.Gold > tip)
                    {
                        if (tip > 0)
                        {
                            WriteLine("\nYou decided to leave " + tip + " gold for a tip.");
                            playerSheet.Gold -= tip;



                        }// Tipped

                        if (tip == 0)
                        {
                            WriteLine("\nYou didn't want to leave a tip.");

                        }

                    }// end if
                    if (tip > playerSheet.Gold)
                    {
                        WriteLine("\nYou don't have enough money to tip. Missed your chance.");

                    }
                    counter++;
                }// end while

                catch (System.FormatException)
                {
                    WriteLine("\nEnter actual numbers!");
                }

                ReadKey(false);
            }// end LeaveTip


        }//end Part3

        /// <summary>
        /// Option for upstaris or downstairs
        /// </summary>
        public static void UpOrDown()
        {

            WriteLine("You can either go downstairs and get involved or you can stay" +
                       " upstairs and hide out.");
            int counter = 0;
            while (counter == 0)
            {
                try
                {

                    Clear();

                    WriteLine("\nEnter 'D' for Downstairs" +
                       "       \nEnter 'U' for Upstairs\n");

                    string choice = ReadLine();
                    if (choice.ToUpper() == "D")
                    {
                        counter++;
                        
                        Down();
                    }
                    if (choice.ToUpper() == "U")
                    {
                        Up();
                        counter++;
                       
                    }
                }

                catch (FormatException)
                {
                    WriteLine("Wrong choice bub");

                }

            }// end while

        }//end UpOrDown

        /// <summary>
        /// Scenario for down
        /// </summary>
        public static void Down()
        {
            Clear();
            WriteLine("\nYou decided to run downstairs.");
            WriteLine("You slam open your door, run down the hall to the stairway and pounce down the stairs.");
            WriteLine("\nOn the main floor you see the remaining group of guests fighting off a group of bandits.");
            WriteLine("\nYou hear something behind you, and you realize it's a bandit coming down the" +
                " stairs, looking for a fight.");
            ReadKey(false);
        }

        /// <summary>
        /// Scenario for Up
        /// </summary>
        public static void Up()
        {
            Clear();
            WriteLine("\nYou decided to stay upstairs.");
            WriteLine("After a few minutes of hearing more yelling and slamming you hear foot steps pounding up the stairs.");
            WriteLine("\nBefore you know it a Bandit swings your room door open and charges at you" +
                " with fierce eyes.");
            ReadKey(false);

            

        }//End UP

        /// <summary>
        /// The Fight Logic
        /// </summary>
        public static void BanditFight()
        {


            int compDext = 10;


            if (playerSheet.Dexterity >= compDext)
            {
                WriteLine("\nYou're in your first battle!");
                int count = 1;
                while (count == 1)
                {
                    if (playerSheet.TempHealth > 0)
                    {
                        PlayerAttack();
                    }

                    if (Bandit.TempHealth > 0)
                    {
                        BanditAttack();
                    }
                    if (playerSheet.TempHealth <= 0)
                    {
                        count++;
                        WriteLine("Gameover...");
                        ReadKey(false);
                    }
                    

                    if(Bandit.TempHealth <= 0)
                    {
                        count++;
                        Beep();
                        WriteLine("\nYou deafeated the Bandit!");
                        ReadKey(false);
                        WriteLine("\nYou gained " + Bandit.GainedExp + " Experience");
                        WriteLine("\nYou gained " + Bandit.GainedGold + " Gold");
                        playerSheet.Experience += Bandit.GainedExp;
                        playerSheet.Gold += Bandit.GainedGold;
                        ReadKey(false);

                        for (int i = 0; i <= 100; i++)
                        {
                            levelUpTracker.Checklevel();
                        }
                    }
                }// end while
            }
         
            //Logic for If computer first strike
            if (playerSheet.Dexterity < compDext)
            {
                int count = 1;
                while (count == 1)
                {
                    if (Bandit.TempHealth > 0)
                    {
                        BanditAttack();
                    }

                    if (playerSheet.TempHealth > 0)
                    {
                        PlayerAttack();
                    }

                  
                    if (playerSheet.TempHealth <= 0)
                    {
                        count++;
                        WriteLine("Gameover...");
                        ReadKey(false);
                    }


                    if (Bandit.TempHealth <= 0)
                    {
                        count++;
                        WriteLine("You deafeated the Bandit!");
                        ReadKey(false);
                    }
                }// end while
            }

        }// end BanditFight

        /// <summary>
        /// Default attack
        /// </summary>
        public static void Attack()
        {
            WriteLine("\nPlayer Remanining Health " + playerSheet.TempHealth + "/" + playerSheet.Health);
            WriteLine("\nPlayer Remaining Mana: " + playerSheet.TempMana + "/" + playerSheet.MagicPoints);

            int damageDeltToComputer = Bandit.Defense - playerSheet.AttackPower;
            Bandit.TempHealth -= Math.Abs(damageDeltToComputer);

            
            Clear();
            WriteLine("Player deals " + Math.Abs(damageDeltToComputer) + " of damage to Bandit.");

            if (Bandit.TempHealth > 0)
            {
                WriteLine("\nBandit remaining Health " + Bandit.TempHealth + "/" + Bandit.Health);
            }
            ReadKey(false);
        }
        /// <summary>
        /// Mage Attack
        /// </summary>
        public static void MageAction()
        {
            Clear();
            playerSheet.TempMana -= mageSpell.MagicCost;
            int magicDamage = Bandit.Defense - (playerSheet.MagicPower + mageSpell.MagicDamage);
            Bandit.TempHealth -= Math.Abs(magicDamage);
            WriteLine("Player casts " + mageSpell.Name + " " + Math.Abs(magicDamage) + " of damage to Bandit.");
            WriteLine("\nBandit remaining Health " + Bandit.TempHealth + "/" + Bandit.Health);
            ReadKey(false);

        }
        /// <summary>
        /// Attack Decision
        /// </summary>
        /// 
        public static void ClericMagic()
        {
            Clear();
            playerSheet.TempMana -= mageSpell.MagicCost;
            int magicHeal = cure.MHeal;
            playerSheet.TempHealth += Math.Abs(magicHeal);
            WriteLine("Player casts " + cure.Name + " to heal " + Math.Abs(magicHeal) + " points of health.");
            WriteLine("\nPlayer Health = " + playerSheet.TempHealth + "/" + playerSheet.Health);
            ReadKey(false);
        }
        public static void PlayerAttack()
        {
            //Mage
            if(playerSheet.CharClass == "Mage")
            {
                Clear();
                WriteLine("\nPlayer Remanining Health " + playerSheet.TempHealth + "/" + playerSheet.Health);
                WriteLine("\nMage Remaining Mana: " + playerSheet.TempMana + "/" + playerSheet.MagicPoints);
                WriteLine("\nChoose one option from below: ");
                WriteLine("\nPress any key (besides 2) for physical attack:" +
                        "\nPress 2 to use a spell");
                string choice = ReadLine();
                
                    if (choice == "1")
                    {
                    Attack();
                    }// end choice 1

                    //magic
                    if (choice == "2")
                    {

                    MageAction();
                        
                    }

                else
                {
                    Attack();
                }
                    
                    
               

            }// end if mage

            //Mage
            if (playerSheet.CharClass == "Cleric")
            {
                
                Clear();
                WriteLine("\nPlayer Remanining Health " + playerSheet.TempHealth + "/" + playerSheet.Health);
                WriteLine("\nCleric Remaining Mana: " + playerSheet.TempMana + "/" + playerSheet.MagicPoints);
                WriteLine("\nChoose one option from below: ");
                WriteLine("\nPress 1 for physical attack:" +
                        "\nPress 2 to use a  healing spell");
                string choice = ReadLine();

                if (choice == "1")
                {
                    Attack();
                }// end choice 1

                //magic
                if (choice == "2")
                {
                    ClericMagic();
                }
                else
                {
                    Attack();
                }

            }// end if Cleric

            else
            { 
                Attack();
            }

        }
        public static void BanditAttack()
        {

            int damageDeltToPlayer = playerSheet.Defense - Bandit.AttackPower;
          

            Clear();
            playerSheet.TempHealth -= Math.Abs(damageDeltToPlayer);
            WriteLine("Bandit Deals " + Math.Abs(damageDeltToPlayer) + " to Player.");
            WriteLine("\nPlayer Remanining Health " + playerSheet.TempHealth + "/" + playerSheet.Health);
            ReadKey(false);
        }// end BanditAttack
        
        /// <summary>
        /// Testing method
        /// </summary>
        public static void SetPlayer()
        {
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
            int intelligence = 15;
            int constitution = 12;
            int wisdom = 10;
            int charisma = 13;

           
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
            playerSheet.AttackPower = (strength * 4) + wStWeapon.AttackPower;
            playerSheet.Defense = Convert.ToInt32(Math.Ceiling(2.1 * dexterity) + wStArmor.ArmorDefense);
            playerSheet.MagicPower = Convert.ToInt32(Math.Ceiling(1.5 * intelligence));
        }
    }

}
