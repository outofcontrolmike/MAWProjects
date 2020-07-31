using System;

namespace Rock_Paper_Scissors
{
    class Program : Checker
    {



        static void Main(string[] args)
        {
            Questions();
            game();
            credits();
        }

        /// <summary>
        /// Goes through intro and set's up name
        /// </summary>
        public static void Questions()
        {
            FirstQuestion();
            AskName();
        }

     
     

      
      
    }
}
