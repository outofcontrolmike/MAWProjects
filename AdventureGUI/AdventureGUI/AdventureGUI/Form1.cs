using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using static System.Console;

namespace AdventureGUI
{

    /// <summary>
    /// A character set up Class
    /// </summary>
    public partial class Form1 : Form
    {


         Weapon wStWeapon = new Weapon();
        private static MagicSpell cure = new MagicSpell();
        private static Armor wStArmor = new Armor();
        private static Items startingItem = new Items();

        MagicSpell fireSpell = new MagicSpell();

        CharacterSheet playerSheet = new CharacterSheet();


        public Form1()
        {
            InitializeComponent();
          

        }//End Initilize

        /// <summary>
        /// What happens when form loads
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Form1_Load(object sender, EventArgs e)
        {
            cmboBxClass.Enabled = false;
            btnSubmit.Enabled = false;
            cmboBxRace.Enabled = false;
            tbAge.Enabled = false;
            btnView.Enabled = false;
            btnNext.Enabled = false;
            btnViewSpell.Enabled = false;


        }//End FormLoad

        /// <summary>
        /// This Binds the name and Text area together for fun
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void TextBox1_TextChanged(object sender, EventArgs e)
        {
          string name = txtbxName.Text;

            txtArea.Text = "Hello, " + name + "!";
            playerSheet.Name = name;
            cmboBxRace.Enabled = true;

            if( name == "")
            {
                cmboBxRace.Enabled = false;
            }
        }

        /// <summary>
        /// Action event for submit button
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Button1_Click(object sender, EventArgs e)
        {
            
            txtbxName.Enabled = false;
            
            cmboBxRace.Enabled = false;
            btnSubmit.Enabled = false;
            tbAge.Enabled = false;
            btnView.Enabled = true;
            btnViewSpell.Enabled = true;
            btnSubmit.Name = "Submit";
            
            if(cmboBxClass.Text == "Cleric")
            {
                btnSubmit.Enabled = true;
                string charclass = cmboBxClass.Text;

                playerSheet.CharClass = charclass;

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

                playerSheet.CharClass = cmboBxClass.SelectedText;
                playerSheet.Age = Convert.ToInt32(tbAge.Value);
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

                
            }// End cleric

            if(cmboBxClass.Text == "Theif")
            {
                btnSubmit.Enabled = true;
                string charclass = cmboBxClass.Text;

                playerSheet.CharClass = charclass;

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

                playerSheet.CharClass = cmboBxClass.SelectedText;
                playerSheet.Age = Convert.ToInt32(tbAge.Value);
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
            }// end Theif

            if (cmboBxClass.Text == "Mage")
            {
                btnSubmit.Enabled = true;
                string charclass = cmboBxClass.Text;

                playerSheet.CharClass = charclass;

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


                playerSheet.CharClass = cmboBxClass.SelectedText;
                playerSheet.Age = Convert.ToInt32(tbAge.Value);
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

            }//end Mage

            if (cmboBxClass.Text == "Warrior")
            {
                btnSubmit.Enabled = true;
                string charclass = cmboBxClass.Text;

                playerSheet.CharClass = charclass;


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


                playerSheet.CharClass = cmboBxClass.SelectedText;
                playerSheet.Age = Convert.ToInt32(tbAge.Value);
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

                


            }// End Warrior

            string charClass = cmboBxClass.Text;
            playerSheet.CharClass = charClass;

            //Text Area Like a to string
            txtArea.Text = "Name: " + playerSheet.Name +
                          "\nRace: " + playerSheet.Race +
                          "\nClass: " + playerSheet.CharClass +
                          "\nAge: " + playerSheet.Age +
                          "\nLevel: " + playerSheet.Level + 
                          "\nExperience: " + playerSheet.Experience +
                           "\nNext Level: " + playerSheet.NextLevel +
                           "\nGold : " + playerSheet.Gold +
                           "\nHealth: " + playerSheet.TempHealth + "/" + playerSheet.Health +
                           "\nMana: " + playerSheet.MagicPoints + "/" + playerSheet.TempMana +
                           "\n\nAttack Power: " + playerSheet.AttackPower +
                           "\nMagic Attack: " + playerSheet.MagicPower +
                           "\nDefense: " + playerSheet.Defense +
                           "\n\nStrength: " + playerSheet.Strength +
                           "\nDexterity: " + playerSheet.Dexterity +
                           "\nIntelligence: " + playerSheet.Intelligence +
                           "\nWisdom: " + playerSheet.Wisdom +
                           "\nConstitution: " + playerSheet.Constitution +
                           "\nCharisma: " + playerSheet.Charisma +
                           "\n\nWeapon Equiped " + playerSheet.EquipedWeapon +
                           "\nArmor Equiped " + playerSheet.EquipedArmor;


        }//End On Click

        
        
        private void ComboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            
            tbAge.Enabled = true;
           if(cmboBxRace.Text == "Human")
            {
                tbAge.SetRange(15, 70);
              
            }
           if(cmboBxRace.Text == "Elf")
            {
                tbAge.SetRange(300, 700);
               
            }
           if(cmboBxRace.Text == "Dwarf")
            {
                tbAge.SetRange(100, 300);
                
            }
           if(cmboBxRace.Text == "Hobbit")
            {
                tbAge.SetRange(22, 90);
             
            }

            string race = cmboBxRace.Text;
            playerSheet.Race = race;

                txtArea.Text = ("Hello ") + playerSheet.Name + ("!\nRace: "
                    + race);

            

        }// end Age

        /// <summary>
        ///handles what happens in age textbox
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void TextBox2_TextChanged(object sender, EventArgs e)
        {
          if(tbAge.Text != "")
            {
                cmboBxClass.Enabled = true;
            }
        }

        /// <summary>
        /// Action event for resetting the form
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnReset_Click(object sender, EventArgs e)
        {
            
            btnViewSpell.Visible = false;
            txtArea.Clear();
            txtbxName.Clear();   
            txtArea.Text = "You reset the character build.  Choose Wisley";
            cmboBxRace.Text = "";   

            cmboBxClass.SelectedIndex = -1;
            cmboBxRace.SelectedIndex = -1;
            tbAge.Text = "";

            tbAge.Enabled = false;
            cmboBxClass.Enabled = false;
            btnSubmit.Enabled = false;
            lblAgeReq.Text = "Age Limit";
            txtbxName.Enabled = true;
            lblAgeSlide.Text = "Age Meter";
            btnView.Enabled = false;

        }

        /// <summary>
        /// Action event for Selected index of Character Class
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void CmboBxClass_SelectedIndexChanged(object sender, EventArgs e)
        {

            btnNext.Enabled = true;
            btnSubmit.Enabled = true;
          
            //btnSubmit.PerformClick();

            if(cmboBxClass.Text == "Mage" || cmboBxClass.Text == "Cleric")
            {
                btnViewSpell.Visible = true;

            }

            if (cmboBxClass.Text == "Warrior" || cmboBxClass.Text == "Theif")
            {
                btnViewSpell.Visible = false;
            }

            txtArea.Text = ("Hello ") + playerSheet.Name + ("!\nRace: ")
                + playerSheet.Race + ("\nAge: ") + Convert.ToString(tbAge.Value) +
                ("\nClass: " + cmboBxClass.Text) + 
                "\n\nI'd suggest you View your stats before continuing.";

        }//end combo box for class

      
        /// <summary>
        /// Action Event for Age Scroll
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void TbAge_Scroll(object sender, EventArgs e)
        {
            lblAgeSlide.Text = Convert.ToString(tbAge.Value);
            cmboBxClass.Enabled = true;

            txtArea.Text = ("Hello ") + playerSheet.Name + ("!\nRace: ")
                + playerSheet.Race + ("\nAge: ") + Convert.ToString(tbAge.Value);
        }

        /// <summary>
        /// Action event for Character Stats
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Button1_Click_1(object sender, EventArgs e)
        {
            txtArea.Clear();



            txtArea.Text = "Weapon Name: " + wStWeapon.Wname +
                "\nAttack Power: " + wStWeapon.AttackPower +
                "\nGold Value: " + wStWeapon.Gvalue +
                "\nDescription: " + wStWeapon.WDescription +
                "\n\nArmor Name: " + wStArmor.ArmorName +
                "\nArmor Defense: " + wStArmor.ArmorDefense +
                "\nGold Value: " + wStArmor.GoldValue +
                "\nDescription: " + wStArmor.ArmorDesc;


         
            // Work on Armor
        }


        /// <summary>
        /// Action Event for clicking Spell View
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnViewSpell_Click(object sender, EventArgs e)
        {
            

            if (cmboBxClass.Text == "Cleric")
            {

               
            
                cure.Name = "Cure";
                cure.MagicCost = 10;
                cure.MDesc = "A basic spell that can heal minor wounds and stop bleeding";
                cure.MHeal = 30;
                cure.MagicDamage = 0;
                cure.RequiredLevel = 0;

                txtArea.Clear();
                txtArea.Text = "Spell Name: " + cure.Name +
                    "\nMagic Cost: " + cure.MagicCost +
                    "\nHeals : " + cure.MHeal +
                    "\nRequired Level: " + cure.RequiredLevel +
                    "\nDescription: " + cure.MDesc;
                    

            }//end if Cleric

            if(cmboBxClass.Text == "Mage")
            {
                fireSpell.Name = "Fire Ball";
                fireSpell.MagicCost = 20;
                fireSpell.MDesc = "A scrorching ball of fire that can incenerate enenmies.";
                fireSpell.MagicDamage = 20;
                fireSpell.MHeal = 0;
                fireSpell.RequiredLevel = 1;

                txtArea.Text = "Spell Name: " + fireSpell.Name +
                    "\nMagic Cost: " + fireSpell.MagicCost +
                    "\nDamage : " + fireSpell.MagicDamage +
                    "\nRequired Level: " + fireSpell.RequiredLevel +
                    "\nDescription: " + fireSpell.MDesc;
            }//end if Mage
        }//end Button View Spell

        /// <summary>
        /// Action event for Next Form, 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnNext_Click(object sender, EventArgs e)
        {
            lblTitle.Text = "Main Game";

            //Set controls
            
            //Controls.Remove(cmboBxClass);
            //Controls.Remove(cmboBxRace);
            //Controls.Remove(lblAgeReq);
            //Controls.Remove(lblAgeSlide);
            //Controls.Remove(lblClass);
           
            //Controls.Remove(txtbxName);
            //Controls.Remove(lblName);
            //Controls.Remove(lblRace);
            //Controls.Remove(tbAge);

            MessageBox.Show("This is supposed to continue on to another program." +
                "\nThis will be part 2 of the program. My text based version works.");

        }

   
    }// end Form

   
    }// end Namespace
