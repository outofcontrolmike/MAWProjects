using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

/// <summary>
/// Project:        Final Exam
/// Dev:            Michael Wilson
/// Date:           06/15/19
/// Purpose:        This is a GUI that allow's users to enter information about their catch of the day
///                 They will be generating a list of the fish they caught and they'll be able to Delete and update the list
///                 There's a menu bar at the top that allows users to open/save/edit files and a Help option
/// </summary>
namespace Final_Project
{

    /// <summary>
    /// This class is the basis of our form's control - controls what happen when the user interacts with the form
    /// </summary>
    public partial class CatchForm : Form
    { // class field
        string fileName = "";
        int listIndex = -1;     // Shows up as no value
        Load loadInstance;      // Declare a load
        /// <summary>
        /// No Arg Constructor for class, calls Initialize Component. 
        /// </summary>
        public CatchForm()
        {
            InitializeComponent();
        }// end catchform

        /// <summary>
        /// Open and read each file
        /// </summary>
        private void ReadOurFile()
        {
            string inRecord;
            try
            {
                StreamReader inFile = new StreamReader(fileName);
                inRecord = inFile.ReadLine();
                while (inRecord != null)
                {
                    ProcessRecord(inRecord);
                    inRecord = inFile.ReadLine();
                }
                inFile.Close();
            }
            catch (Exception exc)
            {
                lblMessage.Text = exc.Message;
            }
        }//end ReadOurFile


        /// <summary>
        /// Process each record in the file
        /// </summary>
        /// <param name="input"></param>
        private void ProcessRecord(string input)
        {
            string[] splitFields;
            ///char gravelType;
            splitFields = input.Split();    // This will split the array
            loadInstance = new Load();
            loadInstance.Name = splitFields[0];
            loadInstance.TypeOfFish = splitFields[1];
            loadInstance.WeightLbs = Convert.ToInt32(splitFields[2]);
            loadInstance.WeightOzs = Convert.ToInt32(splitFields[3]);
            loadInstance.Location = splitFields[4];
            lstBxCatch.Items.Add(loadInstance);
            lstBxCatch.Enabled = true;
            mnuUpdate.Enabled = true;
            toolUpdate.Enabled = true;
        }//end ProcessRecord

        /// <summary>
        /// Happens on load - events to disble certain tools
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void CatchForm_Load(object sender, EventArgs e)
        {
            mnuUpdate.Enabled = false;
            toolUpdate.Enabled = false;
        }// end CatchForm

        /// <summary>
        /// Checks to see if File open is checked and sets what happens after a file is opened.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void FileOpen(object sender, EventArgs e)
        {
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                fileName = openFileDialog1.FileName;
            }
            ReadOurFile();
            lblMessage.Text = string.Format("File open - {0}",
                 fileName);
        }//end File Open

        /// <summary>
        /// Control of clicking File Save
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void FileSave(object sender, EventArgs e)
        {
            if (fileName == "")
                CallSaveDialog();
            SaveData();
            lblMessage.Text = string.Format("Data saved in file {0}", fileName);
        }// end File Save

        /// <summary>
        /// Control for File Save As
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void FileSaveAs(object sender, EventArgs e)
        {
            CallSaveDialog();
            SaveData();
            lblMessage.Text = string.Format("Data saved in file {0}", fileName);
        }// end FileSaveAs



        /// <summary>
        /// Call the common dialog control to choose to save a file
        /// </summary>
        private void CallSaveDialog()
        {
            if (saveFileDialog1.ShowDialog() == DialogResult.OK)
            {
                fileName = saveFileDialog1.FileName;
            }
        }//Call Save

        /// <summary>
        /// Process ea row in the list box and output as recod in file
        /// </summary>
        private void SaveData()
        {
            try
            {
                StreamWriter outFile = new StreamWriter(fileName);  // allocate rider
                foreach (var load in lstBxCatch.Items)
                {
                    Load myLoad = (Load)load;
                    outFile.WriteLine(myLoad);
                }
                outFile.Close();
            }
            catch (Exception exc)
            {
                lblMessage.Text = exc.Message;
            }//end of try catch
        }//end Save Data

        /// <summary>
        /// Control for Closing App
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ExitApp(object sender, EventArgs e)
        {
            Application.Exit();
        }//end exit App

        /// <summary>
        /// Control for AddNew Option
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void AddNew(object sender, EventArgs e)
        {
            btnOkay.Enabled = true;
            //if somoene clicks AddNew item
            listIndex = -1;     //indicates that an add is occuring
            Clearform();        // call our clear form
            EnableDisable(true);
            txtBxName.Focus();
            lblMessage.Text = "Enter a new Catch!";
        }// end AddNew


        /// <summary>
        /// Controling text and Form Properties when list updates
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Update(object sender, EventArgs e)
        {
            lblMessage.Text = "Update";
            EnableDisable(true);        // enabling all prop fields
            txtBxName.Focus();


        }//end Update

        /// <summary>
        /// Controls for Delete
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Delete(object sender, EventArgs e)
        {
            lblMessage.Text = " Deleted ";
            if (lstBxCatch.Items.Count > 0)

                lstBxCatch.Items.RemoveAt(lstBxCatch.SelectedIndex);
            EnableDisable(false);
            btnOkay.Enabled = (false);
            toolUpdate.Enabled = false;
            mnuUpdate.Enabled = false;
        }//End Delete

        /// <summary>
        /// Make shift method to Clear form contents
        /// </summary>
        private void Clearform()
        {
            txtBxName.Clear();
            txtBxLbs.Clear();
            TxtBxOzs.Clear();
            txtBxLocation.Clear();
            cmboBxTypes.SelectedIndex = -1;
        }//ClearForm

        /// <summary>
        /// This turns off or on form fields
        /// </summary>
        /// <param name="status"></param>
        private void EnableDisable(bool status)
        {
            txtBxName.Enabled = status;
            txtBxLbs.Enabled = status;
            TxtBxOzs.Enabled = status;
            txtBxLocation.Enabled = status;
            cmboBxTypes.Enabled = status;
        }//end EndDisable

        /// <summary>
        /// Dispalys a pop up message when user clicks Help
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void HelpAbout(object sender, EventArgs e)
        {
            string msgString = "";
            msgString = "Catch of the Day Load Manager App \n" +
            "\n\t V1.1\n" +
            "\t Developed by: Michael Wilson\n" +
            "\t Date:  6/18/2019";
            MessageBox.Show(msgString, "Help About Catch of the Day", MessageBoxButtons.OK);
        }// end HelpAbout

        /// <summary>
        /// Action for when the player choses btnOkay
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnOkay_Click(object sender, EventArgs e)
        {
            if (txtBxName.Text != "")
            {
                if (listIndex == -1)    // if
                {
                    lblMessage.Text = "Display Catch";
                    AddToList();
                    checkUpdate();
                }
                else
                {
                    UpdateList();
                    lblMessage.Text = "Please fill out the whole form";
                }//end if
            }//end btnOkay


        }//end btnOkay

        /// <summary>
        /// Action for update List
        /// </summary>
        private void UpdateList()
        {
            loadInstance.Name = txtBxName.Text;
            loadInstance.TypeOfFish = cmboBxTypes.Text;
            loadInstance.Location = txtBxLocation.Text;
            loadInstance.WeightLbs = Convert.ToInt32(txtBxLbs.Text);
            loadInstance.WeightOzs = Convert.ToInt32(TxtBxOzs.Text);


            lstBxCatch.Items[listIndex] = loadInstance;


            lblMessage.Text = "New Updates Made";
            txtBxName.Text = loadInstance.Name;
            cmboBxTypes.Text = loadInstance.TypeOfFish;
            txtBxLocation.Text = loadInstance.Location;
            txtBxLbs.Text = loadInstance.WeightLbs.ToString();
            TxtBxOzs.Text = loadInstance.WeightOzs.ToString();
        }//End UpdateList

        /// <summary>
        /// Action for AddToList
        /// </summary>
        private void AddToList()
        {

            Load thisLoad = new Load();     // instance of class
            thisLoad.Name = txtBxName.Text;
            thisLoad.TypeOfFish = cmboBxTypes.SelectedItem.ToString();
            thisLoad.WeightLbs = Convert.ToInt32(txtBxLbs.Text);    // had to convert to an Int
            thisLoad.WeightOzs = Convert.ToInt32(TxtBxOzs.Text);    // data entered on form is a string, conver to Int
            thisLoad.Location = txtBxLocation.Text;
            lstBxCatch.Items.Add(thisLoad);
            lblMessage.Text = "Fish Caught Added";
            lstBxCatch.Focus();
            listIndex = -99;            //
            Clearform();
            EnableDisable(false);

        }//end AddToList

        /// <summary>
        /// This enables some tools when listbxText is empty
        /// </summary>
        private void checkUpdate()
        {
            if (lstBxCatch.Text == "")
            {
                toolUpdate.Enabled = true;
                mnuUpdate.Enabled = true;
            }
        }// end check update




        private void LstBxCatch_SelectedIndexChanged(object sender, EventArgs e)
        {


        }

        /// <summary>
        /// Checks to see if user typed in correct data in Weight and Ozs
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void WeightKeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar);    // if key is digit - will return true
            if (!char.IsDigit(e.KeyChar))
                MessageBox.Show("Please enter a numeric weight");
        }//end Weight Press

        /// <summary>
        /// Clear button
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnClear_Click(object sender, EventArgs e)
        {
            lblMessage.Text = " Deleted ";
            if (lstBxCatch.Items.Count > 0)

                lstBxCatch.Items.RemoveAt(lstBxCatch.SelectedIndex);
            EnableDisable(false);
            btnOkay.Enabled = (false);
            toolUpdate.Enabled = false;
            mnuUpdate.Enabled = false;
        }//end btn clear

        /// <summary>
        /// 2nd Add to list button
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void Button1_Click(object sender, EventArgs e)
        {
            btnOkay.Enabled = true;
            //if somoene clicks AddNew item
            listIndex = -1;     //indicates that an add is occuring
            Clearform();        // call our clear form
            EnableDisable(true);
            txtBxName.Focus();
            lblMessage.Text = "Enter a new Catch!";
            btnOkay.Enabled = true;
        }// end button1_click

        /// <summary>
        /// Controls what happens when a user clicks on list item
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void LstBxCatch_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            if (listIndex < 0)
            {
                listIndex = lstBxCatch.SelectedIndex;

                loadInstance = (Load)lstBxCatch.Items[listIndex];  // grab index selected and pull the data out


                txtBxName.Text = loadInstance.Name;
                cmboBxTypes.Text = loadInstance.TypeOfFish;
                txtBxLocation.Text = loadInstance.Location;
                txtBxLbs.Text = loadInstance.WeightLbs.ToString();
                TxtBxOzs.Text = loadInstance.WeightOzs.ToString();
                EnableDisable(false);
                lblMessage.Text = "Catch Information Displayed";

                toolUpdate.Enabled = true;
                mnuUpdate.Enabled = true;
            }// end of if
        }// end of lstBxCatch
    }// end of Class
}// end of Solution
