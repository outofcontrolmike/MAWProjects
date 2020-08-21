using System;
using System.Collections.Generic;
using System.Text;

namespace BrewGlobal
{
    class CompanyInfo
    {
        // set up the company info class

        // variables / properties used

        string companyName;
        string fullName;
        string streetAddress;
        string city;
        string state;
        string zipcode;
        //constructor

        public CompanyInfo()
        {

        }
        public CompanyInfo(string cName, string fName, string streetAdd, string City, string State, string Zipcode)
        {
            companyName = cName;
            fullName = fName;
            streetAddress = streetAdd;
            city = City;
            state = State;
            zipcode = Zipcode;
        }

        //Encapsulate / Getters and Setters
        public string CompanyName { get => companyName; set => companyName = value; }
        public string FullName { get => fullName; set => fullName = value; }
        public string StreetAddress { get => streetAddress; set => streetAddress = value; }
        public string City { get => city; set => city = value; }
        public string State { get => state; set => state = value; }
        public string Zipcode { get => zipcode; set => zipcode = value; }



        //Print out of company info
        public override string ToString()
        {
            return "testing";
            Console.ReadKey();
        }
    }
}

