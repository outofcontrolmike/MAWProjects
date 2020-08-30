using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace BrewGlobal
{
    //Creates a base that subtype beverages can inherit from.  In our case we'll be creating:
    // Beer, Wine & Meads
    interface ICraftBeverage
    {
        string Title
        {
            get;
            set;
        }

        string Type
        {
            get;
            set;
        }

        double Abv
        {
            get;
            set;
        }

        string Parings
        {
            get;
            set;
        }

        string Size
        {
            get;
            set;
        }

        string Color
        {
            get;
            set;
        }

        string Ingredients
        {
            get;
            set;
        }

        double Price
        {
            get;
            set;
        }

       
    }
}
