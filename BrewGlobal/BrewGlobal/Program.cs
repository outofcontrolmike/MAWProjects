using System;

namespace BrewGlobal
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Thank you for chosing Brew Global!");

            Mead mead1 = new Mead("title","type",14.4,"fish and shrimp", 22.2, "blue", "yeast and water", 22.99);

            Console.WriteLine(mead1.Abv);
        }
    }
}
