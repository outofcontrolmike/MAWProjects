using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;


namespace BrewGlobal
{
    class questions

    {
        // variables
     
        static string city;
        static string zip;
        static CompanyInfo c1 = new CompanyInfo();
        //1.  Ask for name and company info
        /// <summary>
        /// Asking for compnay name
        /// </summary>
        public static void AskCompName()
        {
            string name;
            string num;
            do
            {
                WriteLine("Please enter your compaines name:\n");
                name = ReadLine();
                if (name == "")
                {
                    name = "You didn't give us a name.";
                }
                WriteLine("Does '" + name + "' look correct for your company name?\n");
                WriteLine("Enter 1 to continue, enter any other key to rename.");
                num = ReadLine();
            } while (num != "1");
            c1.CompanyName = name;
            WriteLine("\nsuccess to your company name: " + c1.CompanyName);
            ReadKey();
        }

        /// <summary>
        /// Ask for Owners Name
        /// </summary>
        public static void OwnerName()
        {
            string cName;
            string num;
            do {
            Clear();
            WriteLine("Please enter the full name of the owner of your company:\n");
            cName = ReadLine();
            if (cName == "")
            {
                cName = "You didn't give us the owners name.";
            }
            WriteLine("Does '" + cName + "' look correct for your company name?\n");
            WriteLine("Enter 1 to continue, enter any other key to rename.");
            num = ReadLine();
        } while (num != "1" );
            c1.FullName = cName;
            WriteLine("\nYou set your company name to: " + c1.FullName);
            ReadKey();
    }

        //Grab street
        public static void GrabStreet()
        {
            string street;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the street address of your company:\n");
                street = ReadLine();
                if (street == "")
                {
                    street = "You didn't provide a street address!";
                }
                WriteLine("Does '" + street + "' fit your street description?\n");
                WriteLine("Enter 1 to continue, enter any other key to reenter.");
                num = ReadLine();
            } while (num != "1");
            c1.StreetAddress = street;
            WriteLine("\nYou set your street address to: " + c1.StreetAddress);
            ReadKey();
        }

        public static void GrabCity()
        {
            string city;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the city your company resides in:\n");
                city = ReadLine();
                if (city == "")
                {
                    city = "You didn't give us the city you are loacted";
                }
                WriteLine("Is '" + city + "' the name of your city?\n");
                WriteLine("Enter 1 to continue, enter any other key to rename.");
                num = ReadLine();
            } while (num != "1");
            c1.City = city;
            WriteLine("\nYou set your city address to: " + c1.City);
            ReadKey();
        }

        public static void GrabZip()
        {
            string zip;
            string num;
            do
            {
                Clear();
                WriteLine("Please enter the zipcode your company resides in:\n");
                zip = ReadLine();
                if (zip == "")
                {
                    zip = "You didn't give us the zipcode you are located in";
                }
                WriteLine("Is '" + zip + "' the correct zip code?\n");
                WriteLine("Enter 1 to continue, enter any other key re enter zip.");
                num = ReadLine();
            } while (num != "1");
            c1.Zipcode = zip;
            WriteLine("\nYou set your Zip code to " + c1.Zipcode);
            ReadKey();
        }


        public static void CompanyDetails()
        {
            Clear();
            WriteLine("Company Name" + c1.CompanyName);
            WriteLine("Owner Name: " + c1.FullName);
            WriteLine("Address: " + c1.StreetAddress + " " + c1.City + ", " + c1.Zipcode);
            Beep(100, 400);
            Console.BackgroundColor = ConsoleColor.DarkYellow;
            ReadKey();
        }
        
        public static void CompanyQuestions()
        {
            AskCompName();
            OwnerName();
            GrabStreet();
            GrabCity();
            GrabZip();
            c1.ToString();
            CompanyDetails();


        }
    }

        //    Verify that it's all correct

        //2.  Ask User if they want to enter a beer in

        //    Ask for info and verify

        //3.  Keep in a loop and continue asking, until user types exit

        //4.  Print all the types

        //5.  **Bonus - make this downloadable**

        //6
    }

