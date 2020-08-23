using System;
using System.Collections.Generic;
using System.Text;

namespace BrewGlobal
{
    class Wine: ICraftBeverage
    {
        //main constructor for a Wine
        public Wine(string name, string type, double abv, string parings, double size, string color, string ingredients, double price)
        {
            name = name;
            Type = type;
            Abv = abv;
            Parings = parings;
            Size = size;
            Color = color;
            Ingredients = ingredients;
            Price = price;
        }

        public string name
        {
            get;
            set;
        }

        public string Type
        {
            get;
            set;
        }

        public double Abv
        {
            get;
            set;
        }

        public string Parings
        {
            get;
            set;
        }

        public double Size
        {
            get;
            set;
        }

        public string Color
        {
            get;
            set;
        }

        public string Ingredients
        {
            get;
            set;
        }

        public double Price
        {
            get;
            set;
        }
    }
}
