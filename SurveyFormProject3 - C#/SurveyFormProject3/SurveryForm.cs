using System;
using System.Windows.Forms;
/// <summary>
/// Project:        Unit 3 Hands on Survey Form
/// Dev    :        Michael Wilson
/// Date   :        06/13/2019
/// Purpose:        Create a simple Survey Form with a Windows Form Template - Have some fun with it
///                 Make sure to mess around a bit with formatting and design
/// </summary>
namespace SurveyFormProject3
{
    /// <summary>
    /// Purpose of this class is to set up action events for when our user clicks sumbit and clear form
    /// </summary>
    public partial class SurveryForm : Form
    {
        public SurveryForm()
        {
            InitializeComponent();
        }// end SurveryorForm

        private void SurveryForm_Load(object sender, EventArgs e)
        {
            Calendar.MaxSelectionCount = 1;                     // sets this on FormLoad
        }// End SurveryForm_Load

        /// <summary>
        /// Method that will fire our code on the click of action event.  
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void SubmitBt_Click(object sender, EventArgs e)
        {
            // set text into summary

            // allocate our variables for the print out
            string name = txtBxName.Text;               // creates a varible and set's it equal to the value of the TextBxName.Text
            string hello = "Hello " + name;
            string yearsOfExp = "";                     // Will be later used to place which Radio Circle was selected
            decimal rating = numUpDown.Value;           // This keeps track of the value of the UpDown Value of the control
            string boxChecked = "";                     // Place holder for boxes checked 
 
            // if statements that check to see what boxes are checked.  Quite a few scenarios
            if (ckBxPython.Checked)
            {
                boxChecked = "You know Python";
            }
            if (ckBxCSharp.Checked)
            {
                boxChecked = "You know C #" ;
            }
            if (ckBxJavaScript.Checked)
            {
                boxChecked = "You know Java Script ";
            }
            if (ckBxPython.Checked && ckBxCSharp.Checked)
            {
                boxChecked = "You know both Python and C# ";
            }
            if (ckBxPython.Checked && ckBxJavaScript.Checked)
            {
                boxChecked = "You know both Python and JavaScript ";
            }
            if (ckBxCSharp.Checked && ckBxJavaScript.Checked)
            {
                boxChecked = "You know both C# and JavaScript ";
            }
            if (ckBxCSharp.Checked && ckBxJavaScript.Checked && ckBxPython.Checked)
            {
                boxChecked = "You are knowledgeable in:  C#, JavaScript & Python ";
            }
            if (!ckBxCSharp.Checked && !ckBxJavaScript.Checked && !ckBxPython.Checked)
            {
                boxChecked = "We must not have your lanugage of preference";
            }
            // end of if statments checking boxes

            // start of RadioButton Checking - Only one can be selected
            if (radNovice.Checked)
            {
                yearsOfExp = "You're a beginner Programmer";
            }// end if
                else if(radIntermediate.Checked)
            {
                yearsOfExp = "You've got your feet wet in Programming";
            }// end else if
            else
            {
                yearsOfExp = "You're advanced in Programming!";
            }// end else

            //end of radio button checking

            // Listen for Date Selected and create the event
        
            string selectedDate = Calendar.SelectionRange.Start.ToString();

            // final output - grabs our values of our logic and sets in the Summary box on GUI
            richTxtBx.Text = hello + "\n"
                + boxChecked  + "\n"
                + yearsOfExp  + "\n"
                + "You decided to rate yourself at " + rating + "\n" 
                + "Date you became a Programmer:  " + selectedDate;
            

        }// end of SubmitBt

        /// <summary>
        /// The action of the Clear Form will set all the values back to original
        /// There is also a Application.Rest option but it closes out of the app 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ClearBt_Click(object sender, EventArgs e)
        {
            richTxtBx.Text = "";
            txtBxName.Text = "";
            ckBxCSharp.Checked = false;
            ckBxJavaScript.Checked = false;
            ckBxPython.Checked = false;
            radIntermediate.Checked = false;
            radNovice.Checked = true;
            radPro.Checked = false;
            numUpDown.Value = 0;

        }// end of clear Button
        /// <summary>
        /// Extra fun for when a person clicks the image
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void PictureBox1_Click(object sender, EventArgs e)
        {
            txtBxName.Text = "Ninja Gaiden";
        }// end of PicutreBox1_Click

      
    }// end of class
}// end of namespace
