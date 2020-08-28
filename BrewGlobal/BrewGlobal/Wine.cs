using System;
using System.Collections.Generic;
using System.Text;

namespace BrewGlobal
{
    class Wine: ICraftBeverage
    {
        //main constructor for a Wine
        public Wine(string title, string type, double abv, string parings, string size, string color, string ingredients, double price)
        {
            Title = title;
            Type = type;
            Abv = abv;
            Parings = parings;
            Size = size;
            Color = color;
            Ingredients = ingredients;
            Price = price;
        }

        public string Title
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

        public string Size
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
