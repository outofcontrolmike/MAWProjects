using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

/// <summary>
/// Developer:  Michael Wilson
/// Date:       08/12/2019
/// Purpose:    Represents a GUI that Creates a character and Plays a bit of a story
/// </summary>
namespace AdventureGUI
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());

 
        }
    }
}
