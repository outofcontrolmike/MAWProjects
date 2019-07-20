using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/// <summary>
/// Creating our object that creates the fish to be caught
/// </summary>
namespace Final_Project
{
    /// <summary>
    /// Enums 
    /// </summary>
    public enum FishType  // list of types
    {
        Grouper,
        RainbowTrout,
        BlueGill,
        Snook,
        Tarpon
    }
    /// <summary>
    /// This will define the catch
    /// </summary>
    class Load
    {
        #region private - Class Fields & Getters + Setters
        // class level variables
        private string name;
        private string typeOfFish;
        private int weightLbs;
        private int weightOzs;
        private string location;
        /// <summary>
        /// Getters and Setters for our class - Generated the quick way
        /// </summary>
        public string Name { get => name; set => name = value; }
        public string TypeOfFish { get => typeOfFish; set => typeOfFish = value; }
        public int WeightLbs { get => weightLbs; set => weightLbs = value; }
        public int WeightOzs { get => weightOzs; set => weightOzs = value; }
        public string Location { get => location; set => location = value; }
        #endregion
        #region Constructors
        /// <summary>
        /// Constructor that expects every parameter
        /// </summary>
        /// <param name="name"></param>
        /// <param name="typeOfFish"></param>
        /// <param name="weightLbs"></param>
        /// <param name="weightOzs"></param>
        /// <param name="location"></param>
        public Load(string name, string typeOfFish, int weightLbs, int weightOzs, string location)
        {
            this.name = name;
            this.typeOfFish = typeOfFish;
            this.weightLbs = weightLbs;
            this.weightOzs = weightOzs;
            this.location = location;
        }
        /// <summary>
        /// No arg constructor - doesn't expect anything
        /// </summary>
        public Load()
        {

        }
        #endregion
        #region ToString method
        /// <summary>
        /// Builds an output to show to user
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            string returnValue;
            returnValue = name + " " +
                    typeOfFish + " " +
                    weightLbs + " " +
                    weightOzs + " " +
                    location + " ";
            return returnValue;
        }
        #endregion
    }// end Class
}// end Solution
