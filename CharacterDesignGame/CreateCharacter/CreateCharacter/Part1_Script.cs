using System;
using System.Collections.Generic;
using System.Text;
using static System.Console;
namespace CreateCharacterMain
{
    class Part1_Script : IntroPlot
    {

        private static string gameName = "Unknown Quest";
        public static void FirstPart()
        {
            Clear();
            ContinueToGame();
            NameGame();
            Clear();

            WriteLine("\nWelcome to the very beginning of the adventure\n");
            ReadKey(false);
            Clear();
            WriteLine("\nYou feel cold, and you're trying to open your eyes. You don't remember " +
                "anything recent but you know your name is " + playerSheet.Name + "." +
                "\nYou also remember that you are " + playerSheet.Age + " years old." + " " +
                "Because of your age, you realize that you can only be a " + playerSheet.Race + ".");
            WriteLine("\nYou finally managed to open your eyes you notice a smouldered fire pit in front of you." +
                " Your hands are tied together, it's like someone captured and drugged you.\n");
            WriteLine("You know you need to get out of this place, good thing you are a " + playerSheet.CharClass + ". " +
                "You know just the trick to get out of this situation!");
            ReadKey(false);
            GetOutOfRope();
        }// end FirstPart


        /// <summary>
        /// Let's user re enter set up
        /// </summary>
        public static void ContinueToGame()
        {
            Clear();
            WriteLine("Are you happy with your decisions?  If not type n now if you want to restart the set up");
            string choice = ReadLine();

            if (choice.ToUpper() == "N")
            {
                Beep();
                Clear();
                AskForName();
                GetRace();
                GetClass();
                GetStats();
                Clear();
            }

            else
            {


               
                Clear();
            }
        }// end ContinueToGame

        public static void NameGame()
        {

            WriteLine("Would you like to rename this game? Enter Y if so\n");
            string choice = ReadLine();


            if (choice.ToUpper() == "Y")
            {
                WriteLine("\nEnter a new name, otherwise press the enter key:\n");
                string newName = ReadLine();

                gameName = newName;
                Clear();

                WriteLine("\nYou've decided to name the game:\n" + gameName.ToUpper());
                ReadKey(false);
                Clear();



            }
            else
            {
                Clear();
                WriteLine("Welcome to " + gameName.ToUpper());
                ReadKey(false);
                Clear();
            }



        }// end Rename Game

        /// <summary>
        /// Gets out of rope
        /// </summary>
        /// 
        public static void GetOutOfRope()
        {
            Clear();
            if (playerSheet.CharClass == "Warrior")
            {
                WriteLine("You use your imense strength to break out of the rope.");
            }
            if (playerSheet.CharClass == "Mage")
            {
                WriteLine("Your intelligence makes you think outside of the box. You come up with a quick way" +
                    " to combust the area around the rope into fire. Once the rope has burned just enough, you rip out of the bondage!");
            }
            if (playerSheet.CharClass == "Theif")
            {
                WriteLine("Since you're a Theif you already got yourself out of the bondage.");
            }
            if (playerSheet.CharClass == "Cleric")
            {
                WriteLine("The bondage is so tight aroudn your hands, it's very hard for you to get out. Usually in tight situations" +
                    " you send a prayer off.  You go into deep mediation and relay a connection with your entity and the bondage starts to loosen.  " +
                    "You're safely able break loose.");
            }
            ReadKey(false);

        }

        //--------------------------------------------------//

        /// <summary>
        /// Second part of the first -- I know, bad naming
        /// </summary>
        public static void SecondPart()
        {
            Clear();
            WriteLine("Now that you're out of the rope you decided to stand up and observe the cave.\n");
            WriteLine("From what you can tell, you're at the back of a cave. The fire pit you are by looks abandoned.\n" +
                "There is no trace of whoever brought you here, so you decide to leave the cave.\n");
         
            ReadKey(false);
            Clear();
            WriteLine("You stumble out of the cave and find that you're at the top of a small hill. You can see a " +
                "rugged path through some weak woods that is followed by a very thick swamp and in the other direction there is a fairly" +
                " used path.");
            WriteLine("\nYou decide to look up at the sun to figure out how much daylight you have and to figure out your directions."
                + " You reailze the Swamp faces North and the nicer trail is to the West.");
            ReadKey(false);
            SwampOrWest();
            West();
            StrangerEncounter();


        }



        public static void SwampOrWest()
        {
            Clear();

            int counter = 1;
            while (counter == 1)
            {
                Clear();
                WriteLine("Choose a direction:".ToUpper());

                WriteLine("\nWhich direction would you like to go?  Press 's' for swamp or 'w' for west:");
                string choice = ReadLine().ToUpper();

                if (choice == "S")
                {
                    counter++;
                    Swamp();
                    ReadKey(false);

                }

                if (choice == "W")
                {
                    counter++;
                    Clear();
                    WriteLine("You decide to head west and take the safe route.");
                    ReadKey(false);
                }

            }
        }// end SwampOrWest


        public static void Swamp()
        {
            Clear();
            WriteLine("You decide that the swamp looks like a neat place to explore, maybe you'll find out" +
                " more about why you woke up in a cave.\n" +
                "\nYou had no trouble bouldering down the small bluff. You notice there's an even bigger cave entrance behind you " +
                "facing the south, however it's boarded up. You press onward on the rugged trail towards the swamp.");
            ReadKey(false);
            Clear();
            WriteLine("After about a half mile down the trail, the trail opens up to the entrance of a gross looking swamp." +
                " You hear something that sounds like it's popping and you realize there are bubbles coming out of the swamp water" +
                " near you.");
            ReadKey();
         
            CheckBubbles();
            WriteLine("\nAfter coughing and gagging from the bog fog you realize you made it back to the cave you awoke from." +
                "  You end up heading down the fairly used path, towards the west.");
            ReadKey();
        }// end Swamp Scenario

        public static void CheckBubbles()
        {
            Clear();
            if (playerSheet.Wisdom >= 14)
            {
                WriteLine("Your Wisdom knows better than to stick your hand into a bubbling part of a swamp." +
                    " You decide to wait a minute or two.\n");
                ReadKey(false);

                if (playerSheet.Intelligence >= 15)
                {
                    WriteLine("You're aware that swamps sometimes produce bog gas which is a mixture of natural earth gasses." +
                        " You know best to turn back and quit wasting your time.");
                    ReadKey(false);
                }
                else
                {
                    WriteLine("You're not sure why the swamp is bubiling but you know not to get involved. You decide to turn back.");
                    ReadKey(false);
                }


            }// end if
            else
            {

                WriteLine("You seem intrigured by this, you've never seen anything like this.");
                WriteLine("Do you want to venture into the swamp and see what this is? \n\nEnter 1 for yes, press any other key to leave" +
                    " the swamp.");
                string choice = ReadLine();


                if (choice == "1")
                {
                    Clear();
                    int damage = 10;
                    int updatedHealth = playerSheet.TempHealth - damage;
                    playerSheet.TempHealth -= damage;

                    WriteLine("You take a few steps into the swamp. It is very hard to move through and it's suprisingly warm." +
                        "\nAs you walk closer to the bubbles you realize your about knee deep in the swamp.\n" +
                        "You notice an awful stench coming from the bubbles, it's worse than any farm work you've delt with." +
                        "\nYour knees start to buckle and you start gagging. You loose your footing and bang your knee into a small " +
                        "structure in the swamp, that really hurt!\n");
                    WriteLine("You lost " + damage + (" health points.") + " " +
                        "Your current health is " + (updatedHealth) + "/" + playerSheet.Health);

                    ReadKey(false);

                }// end



                WriteLine("\nYou decided to back out of the swamp and go back to where it's safe.");

                ReadKey(false);
                Clear();

                ReadKey(false);

            }// end else
        }// end check bubbles

        public static void West()
        {
            Clear();
            WriteLine("You've been walking along this path now for about a mile, the scenery is a lightwooded area" +
                " that looks like is fading away" + 
                "\n\nSomething smells very odd close by, you happen to notice a corpse" +
                " lying on it's back.  " +
                "\nYou can't tell what sex it is, it looks like it was eaten alive, by you also can't tell" +
                " what from.\n");
            WriteLine("\nAre you interested in checking the corpse?  Checking corpses is a thing to keep in mind " +
                "since you can salvage useable things from them.");
            CheckCorpse();
        }// end West

        /// <summary>
        /// Option to search a coropse, boolean logic - checks to see if boolean is typed in
        /// </summary>
        public static void CheckCorpse()
        {
            WriteLine("\ntype in 'search' if you are interested in checking the corpse for valuables:\n");
            string search = ReadLine();

            if (search.ToUpperInvariant() == "SEARCH")

            {
                Clear();
                if (playerSheet.Race == "Human")
                {
                    WriteLine("You happen to spot something shinny beside the corpse. You realize it's a memento that you" +
                        " completely forgot about. You grab the sliver ring packed with an amythest.");
                    Beep(3908, 800);
                }
                if (playerSheet.Race == "Elf")
                {
                    WriteLine("You found your brooch that you've been missing.  You've had this for Many years.");
                    Beep(3098, 800);
                }
                if (playerSheet.Race == "Dwarf")
                {
                    WriteLine("Out of the corner of your eye you notice a leather bag right next to the corpse." +
                        " You quickly snatch it and open it to find a small batch of gold that is worth 100.");
                    playerSheet.Gold += 100;
                    Beep(2000, 800);
                }
                if (playerSheet.Race == "Hobbit")
                {
                    WriteLine("You notice a small little journal that looks like was used for notes. You grabbed and opened it up" +
                        " to find that there are recipies that you could be using for all of your future events. \n" +
                        "\nYou stash this away and save it for later.");
                    Beep(1506, 800);
                }
                
              
                ReadKey(false);
            }// end check Corpse

          

        }//End Check Corpse

        ///---------------------------------------------------------------///
        public static void StrangerEncounter()
        {
            Clear();
            WriteLine("You head down the path for about another half mile and you realize the woods are becoming less abundant.\n" +
                "You eventually break out of the woods at the top of huge valley.\n" +
                "\nThis valley has a giant landscape, and a river that flows from the northeast to the southwest, however " +
                "this looks rather far away, at least five miles to the river.\n");
            WriteLine("Past the river you see what seems to be a village. This whole place is somewhere you haven't" +
                " been before. " +
                "\nYou honestly don't know how to get back to your home, maybe it's best if you walk" +
                " down towards the river, you're rather thirsty.");
            ReadKey(false);
            ListenFor();
            ReadKey(false);


        }// end Stranger Encounter

        /// <summary>
        /// These scenarios branch out, be careful
        /// </summary>
        public static void ListenFor()
        {
            Clear();
            WriteLine("All of a sudden you hear the sound of horse hooves coming up from way you came.");
            ReadKey(false);
            //1st route
            if (playerSheet.Dexterity >= 16)
            {
                Clear();
                WriteLine("You've got plenty of time to hide and possibly sneak up on the stranger that's about to appear.");
                ReadKey(false);
                SneakUp();

                

            }
            //2nd route
            if (playerSheet.Dexterity < 16 && playerSheet.Dexterity >= 13)
            {
                Clear();
                WriteLine("You managed to sneak behind a boulder just before the stranger arrived.\n");
                DescStranger();
                WriteLine("\n The stranger knows that someone is around.");
                WriteLine("\n\n STRANGER: 'Whoever it is, come out now. I don't have time for these games.'" +
                    " \nFrom what you can tell the stranger sounds like a man.");
                ReadKey(false);
                Confortation();

                // Call Scenario Logic for Befriend
                Befriend();

            }
            //3rd route
            if (playerSheet.Dexterity < 13)
            {
                Clear();
                WriteLine("You weren't quick enough to hide behind anything, the stranger looks suprised to run into you.");
                if (playerSheet.Charisma > 14)
                {

                    WriteLine("Since your Charisma is one of your best attributes you are easliy able to talk to the stranger easily.");
                    if (playerSheet.CharClass == "Cleric")
                    {
                        WriteLine("\nYou can sense that the stranger has a wound that needs healed up");
                        WriteLine("YOU: 'Hey stranger, I know you're in pain at the moment.  I am a cleric and" +
                            " I can heal your wound with a spell.");
                        WriteLine("\nThe stranger trusts you well enough and struggles" +
                            " to get off his horse and then sits on the ground. ");
                        WriteLine("\nMy foots hurts very badley, I think it's broken.");
                        ReadKey(false);
                        Clear();
                        WriteLine("You tell the stranger to take his boot off and he cries out in pain while he's attempting it.");
                        WriteLine("You can definitley tell his foot is messed up.  You decide a good way to handle this would be" +
                            " to use the Cure Spell you have.");
                        WriteLine("\nYou start concentrating very hard and focusing your energy on mending the wound.");
                        WriteLine("\nOver the past two minutes you were able to speed up the healing of the foot by tenfold." +
                            " You watch as relief changes the face of the stranger.");
                        ReadKey(false);
                        Clear();
                        WriteLine("STRANGER: 'Thank the heavens that we ran into eachother' I wasn't sure if I'd be" +
                            " able to fight anything I encountered next.");
                        WriteLine("\nWould you happen to want a ride down to the village?");
                        WriteLine("\nYou realized your tired and exhausted yourself and there's not way you could make" +
                            " it to the village on foot by the end of the day.");
                        WriteLine("\nYou gladly get on the back of the horse with the stranger and head down into the valley.");

                    }//end innerest if
                    else
                    {
                        WriteLine("STRANGER: 'You look absolutley awful, you need to drink some water quick!'");
                        WriteLine("\nYou struggle your way on to the back of the horse and head down further into the valley.");
                    }
                   

                }//end inner If

                ReadKey(false);
                Befriend();
            }//end slow

        }// end Listen for

        /// <summary>
        /// Confront the Stranger
        /// </summary>
        public static void Confortation()
        {

            if (playerSheet.Charisma >= 14 && playerSheet.Charisma < 16)
            {
                WriteLine("You step out from behind the boulder, trying not to appear intimidating.");
                WriteLine("\nYOU: 'Hello Stranger, I was not trying to seem like a threat.  I am not familair with the area" +
                    " I woke up in a cave a couple miles back from where you came from and I'm trying to get back home." +
                    "  I don't know where to even start.'");
                ReadKey(false);
                Clear();
                WriteLine("STRANGER: 'You really look like you could use some water, you probably haven't seen yourself latley.'" +
                    " I could give you a ride down to the river and help you become rejuvinated.\n");
                WriteLine("\nNormally you would say no to strangers but you can barely think straight at the moment." +
                    "\nYou gladly accept the offer and hop on the back of the stranger's horse.");
                ReadKey(false);

            }
            if (playerSheet.Charisma < 14)
            {
                WriteLine("You step out from behind the boulder, with a weapon in hand.");
                WriteLine("\nYOU: 'I'm not sure where I am, but I don't have time for games either." +
                    " \nI woke up in a cave a couple miles back from where you came from and I'm trying to get back home." +
                    "  \nI don't know where to even start.' ");
                ReadKey(false);
                Clear();
                WriteLine("STRANGER: 'I see that you feel threatned, if you put up that mean face and weapon I could help you out.");
                WriteLine("\nSTRANGER: 'You really look like you could use some water, you probably haven't seen yourself latley.'" +
                    " I could give you a ride down to the river and help you become rejuvinated.\n");
                WriteLine("\nNormally you would say no to strangers but you can barely think straight at the moment." +
                    "\nYou gladly accept the offer and hop on the back of the strangers horse.");
                ReadKey(false);
            }
        }// end confrotation

        /// <summary>
        /// Called by Listen For - Theif
        /// </summary>
        public static void SneakUp()
        {
            Clear();
            WriteLine("Press 1 if you'd like to hide!\n".ToUpper());
            string choice = ReadLine();

            if (choice == "1")
            {
                WriteLine("\nYou scaled to the top of a nearby tree along the path, no one can tell you're up there.\n");
                WriteLine("After a minute passes by you finally see a traveler appear.");
                DescStranger();
                Clear();
                WriteLine("You definitley have the option to try to steal this stranger's horse.\n" +
                    "Choose from the two options below: \n\n" +
                    "Wait --- type in 'W'" +
                    "\nKnockOut --- type in 'K'");


                string option = ReadLine().ToUpper();

                if (option == "W")
                {
                    WriteLine("\nYou decide to wait out the stranger.");
                    WriteLine("\n Time passes by and you watch the stranger ride his horse further down into the valley," +
                        " and head towards the river. You decide to follow in his steps.");
                    ReadKey(false);
                    LoneWolf();

                }
                if (option == "K")
                {
                    KnockOut();
                    StolenHorse();
                }

                ReadKey(false);
            }//end choice

            else
            {
                Clear();
                WriteLine("You end up befriending the stranger and heading down with them into the valley");
                ReadKey(false);
                Befriend();
               
            }
           

        }// end SneakUp

        public static void KnockOut()
        {
            int slingChance = playerSheet.Dexterity * 6;
            int chanceToHit = 30;
            Clear();
            WriteLine("You deicde to try to knock out the stranger. Since you have good depth perception you should be able to " +
                "attempt this by using handy dandy sling.\n" +
                "You pull out your far range weapon and load it with one of your dull rocks and stretch back" +
                " as far as you can.");
            WriteLine("\nPress enter to fire ");
            ReadKey(false);
            if (slingChance > chanceToHit)
            {
                Clear();
                WriteLine("The rock zips downward toward the strangers head and knocks him straight down." +
                    " \nThe horse is causing a rampage and about to get away, however you drop from the tree onto the horse" +
                    " and start heading down towards the valley.");
                ReadKey(false);
            }
            /// else

        }// end Knock Out

        /// <summary>
        /// Describes the Stranger
        /// </summary>
        public static void DescStranger()
        {
            Clear();
            WriteLine("The stranger is clothed in long sleeve chestware and wool pants. They have a hood on, otherwise" +
                " you could tell what gender they are. They are sitting riding on a well build dark brown horse, looks" +
                " well fed and taken care of.");
            ReadKey();
        }// end Describe Stranger

        /// <summary>
        /// Scenario for getting down to the river -- Stranger takes you to town
        /// </summary>
        public static void Befriend()
        {
            Clear();
            WriteLine("You watch as the scenery into the valley gets much more beatiful, time slips by" +
                " and you notice you have about two hours of daylight left.");
            WriteLine("\nSTRANGER: 'Oh by the way, I forgot to mention my name, my name is Jobe.  What is yours?'");
            WriteLine("\nYOU: 'My name is " + playerSheet.Name + "'.");
            WriteLine("\nJobe: 'Okay then " + playerSheet.Name + "!  We are going to stop near the river and make camp for the night, I don't feel comfortable" +
                " riding my horse at night.'");
            WriteLine("\nYou agree with the stranger completley.");
            WriteLine("\nMoment's pass by and the stranger stops at a certain spot a long the river.");
            ReadKey(false);
            Clear();
            WriteLine("Jobe: ' " +
                "This place looks like a safe place. If you want to search the nearby woods for some firewood" +
                " I can catch some fish for dinner form the river.  Make sure you go get some water first.'");
            WriteLine("\nWater does sound pretty damn good about now. You dash out towards the river and fall into it, comsuming water." +
                " After drinking as much water as you could you start hiccuping.");
            WriteLine("\nAfter your attack of the hiccups you head out towards the woods and find plenty of dry wood ot use to start a fire." +
                "\nYou head back to the camping spot and build a make shift fire pit out of some near by rocks and" +
                " managed to make a cooking pit to easily cook over.");
            WriteLine("\nYou watch Jobe walking the river side with a heafty size net full of fish.");
            CookMorning();
            VillageDesc();

            // Don't go past Village Desc -- make a new class for Tavern

        }// end Befriend

        public static void CookMorning()
        {
            WriteLine("\nJobe: 'We ain't going hungry tonight my friend.'");
            WriteLine("\nYou watch Jobe quckily skin and remove the guts from 12 fish and observe him" +
                " skewer them all. \n" +
                "You built a roaring fire and the fish cooks with no problem at all.");
            WriteLine("\nYou guys share some stories about your childhoods and make a plan to leave early the next morning.");
            WriteLine("Eventually the two of you fall asleep covered in cloaks, listening to the roaring sound of the river.");
            ReadKey(false);
            Clear();
            WriteLine("\nYou both awake in the morning and luckily nothing messed with you overnight. Jobe picked a pretty good" +
                " spot to camp and hide out.");
            WriteLine("You guys picked up camp and load up on water, You know it will be at least a few hours until you get to town.");
            WriteLine("\nYou and Jobe get on the horse and find a small bridge to cross over the river.");
            WriteLine("\nAfter about an 1 hour of riding through the valley, Jobe starts talking your ear off.");
            ReadKey(false);
            Conversation();
            Clear();
            WriteLine("After some miscellanous conversations you arrive to the village entrance.");
            WriteLine("\nJobe: 'Well, this is where I say goodbye.  Maybe I'll see you again someday if I run" +
                " into you out in the world. Good luck on finding your home.");
            ReadKey(false);
        }

       
        public static void StolenHorse()
        {
            Clear();
            WriteLine("You're making very quick time, you're already at the river." +
                "\nYou let the horse and yourself take a break and drink from the vigrously flowing river, it tastes delicious." +
                "\nAfter about half an hour of a rest you decide it's a good idea to keep moving to the village off in the distance.");
            ReadKey(false);
            Clear();
            WriteLine("You rip through the land over a couple hours of time and are arriving the front of the village." +
                " As the horse, you stole, slows down you notice something very weird happening." +
                " The horse starts slowey fading and all of a sudden you fall to the ground." +
                " \nLuckily you weren't moving too fast, the collision with the ground didn't cause any damage to you." +
                " The horse owner must have used a spell on the horse to transport it back, You've heard about the Blink spell before.");
            ReadKey(false);
            Clear();
            VillageDesc();


        }// end StolenHorse

        /// <summary>
        /// Scenario for LoneWolf -- Later run into stranger
        /// </summary>
        public static void LoneWolf()
        {
            Clear();
            WriteLine("You've been walking for quite a while now.  It's about 2 hours until night time." +
                "\nYou eventually make it close to the river and you see the stranger setting up camp.");
            WriteLine("You can either go confront the stranger or you can wait til later in the night to steal the" +
            " stranger's horse.");
            ReadKey(false);
            StealOrConfront();
            VillageDesc();
            

        }// end LoneWolf

        public static void StealOrConfront()
        {
            Clear();
            WriteLine("Would you like to Confront the stranger and gain an ally?\n" +
                "/nEnter yes to confront the stranger.  Otherwise we're assuming you're going" +
                "to steal the horse overnight.");
            string choice = ReadLine();
            ReadKey(false);

            if(choice.ToUpper() == "YES")
            {
                Confront();
                CookMorning();
            }
            else
            {
                StealHorse();
            }
            

        }//End StealOrConfront

        public static void Confront()
        {
            Clear();
            WriteLine("You've decided to confront the stranger.");
            WriteLine("\nYou start walking their way and as you get closer you notice they are facing the" +
                " sunset.  You decide yell out at them to get there attention." +
                " YOU: 'HEYYYYYYYYY!!!'");
            WriteLine("The stranger turns around and with their hand around their sword sheath.");
            WriteLine("\nYou slow down and lock eyes with the stranger." +
                "\nSTRANGER: 'Who are you?! Were you following me?  if so,how far!?'");
            WriteLine("YOU: 'My name is " + playerSheet.Name + ".  I mean no harm." +
                " I've known about you since the bluff south of here. I heard someone coming from the cave" +
                " so I hid up in a tree and waited for them to pass by." +
                " Believe it or not I woke up this morning in the cave above the bluff and I'm not sure" +
                " how to get back to my hometown. I don't know where I am.");
            ReadKey(false);
            Clear();
            WriteLine("The stranger locks eyes with you.\n\n" +
                "Stranger: 'My name is Jobe. You're welcome to stay hear at the fire with me." +
                " You better do yourself a favor and get you some water to drink from the river, you look rough." +
                "\nWhile you're over grabbing some water can you check my fishing trap?" +
                "\n\n'If you're lucky there might be enough dinner for the both of us.");
            ReadKey(false);
            Clear();
            WriteLine("You walk over to the river and fill up on water and also wash yourself." +
                "\nYou walk over to where the fishing trap is.  It's one of the biggest" +
                " net's you've ever seen." +
                "\nThe net has quite a haul and you're happy to see it since you're hungy as well." +
                "\nYou bring the fishing back to the fire pit and Jobe has a big smile on his face," +
                " he must love food.");

        }

        public static void StealHorse()
        {
            Clear();
            WriteLine("You decided to wait til later in the night to steal the horse." +
                "\nHours passed by, you managed to sleep a little. It's slightly hard to see but you can see" +
                "embers of the stranger's campfire." +
                "\n\nYou stealthly walk over to stranger's fire." +
                "\nThe stranger needs to be knocked out so that he doesn't know who's taking his horse." +
                "\n\nYou deicde to use some of a special elixir to place on a cloth to put over" +
                "the strangers face to drug him.");
                ReadKey(false);
            Clear();
            WriteLine("You sneak up to the stranger sleeping on the ground and place the" +
                " drugged cloth over his face." +
                "\nThe stranger starts to reach out to stop what's going on then instantely he" +
                " slows down and eventually falls back asleep.");
            WriteLine("\nYou find a thick stick to catch on fire" +
                " to use as a light source.\n" +
                "After about half a minute you've gota strong fire on the torch you made." +
                "\n\nYou calmly walk over to the horse and mount it. It seems to be" +
                " okay with you getting on top of it. You direct the horse to the east to a small" +
                "bridge and you cross it.");
            ReadKey(false);
            Clear();
            WriteLine("After about an hour of riding you notice towards the east the sun is rising.");
            WriteLine("You realize the town is probably another couple hours away, so you continue to journey.");
            WriteLine("\nAfter sometime you reach the edging of the village.");
            WriteLine(
            "\nAs the horse, you stole, slows down you notice something very weird happening." +
                " The horse starts slowey fading and all of a sudden you fall to the ground." +
                " \nLuckily you weren't moving too fast, the collision with the ground didn't cause any damage to you." +
                " The horse owner must have used a spell on the horse to transport it back, You've heard about the Blink spell before.");
            ReadKey(false);
            Clear();
            VillageDesc();

        }// end StealHorse

        public static void VillageDesc()
        {
            Clear();
            WriteLine("You walk into the village along a dirt path and notice there is basically one" +
                " main road that goes through." +
                "\nYou see a few main bulidings and a what looks like a tavern down in the distance");
            WriteLine("\nSurronding the village you see lot's of agriculture. \nThe village seems to be inhabbited by some decently smart" +
                " people to surive on their own.");
            WriteLine("\nYou decide to head to the tavern and get more information about what's around the area.");
            ReadKey(false);
        }// end Village Desc

        public static void Conversation()
        {
            if (playerSheet.Race == "Human")
            {
                Clear();
                WriteLine("JOBE: 'It's a good thing that you're a Human. \nThe village we are going to is mainly popoulated " +
                    "by Humans.");
                WriteLine("'\nYou won't have any problems getting along with anybody in town. I'd suggest that you" +
                    " go to the Tavern to learn about what your next step should be.'");
                WriteLine("\nYou question Jobe: 'So you're saying you're not coming to the village?'");
                WriteLine("\nJobe: 'That is a correct assumption, I don't really like a lot of people.  I'm not welcome" +
                    " to the town anyways. I was banished long ago and I've been on my own for years.'");
                WriteLine("\nYOU 'Why were you BANISHED?'");
                WriteLine("\n'Let's just say me and the mayor have two different ideas on how handle the economy of the town.'");
                ReadKey(false);
            }// end Human

            if (playerSheet.Race == "Elf")
            {
                Clear();
                WriteLine("JOBE: 'You might have a little bit of trouble with fitting into the village" +
                    ". \nThe village we are going to is mainly populated " +
                    "by Humans.  I wouldn't stay long if I were you.'");
                WriteLine("' I'd suggest that you" +
                    " go to the Tavern to learn about what your next step should be.'");
                WriteLine("\nYou question Jobe: 'So you're saying you're not coming to the village?'");
                WriteLine("\nJobe: 'That is a correct assumption, I don't really like a lot of people.  I'm not welcome" +
                    " to the town anyways. I was banished long ago and I've been on my own for years.'");
                WriteLine("\nYOU 'Why were you BANISHED?'");
                WriteLine("\n'Let's just say me and the mayor have two different ideas on how handle the economy of the town.'");
                ReadKey(false);
            }// end Elf

            if (playerSheet.Race == "Dwarf")
            {
                Clear();
                WriteLine("JOBE: 'You shouldn't have too much trouble with fitting into the village" +
                    ". \nThe village we are going to is mainly populated " +
                    "by Humans and they like to trade with the Dwarven. I wouldn't stay long if I were you, the government " +
                    " may try to take advantage of you though. Therefore, be careful.'");
                WriteLine("' I'd suggest that you" +
                    " go to the Tavern to learn about what your next step should be.'");
                WriteLine("\nYou question Jobe: 'So you're saying you're not coming to the village?'");
                WriteLine("\nJobe: 'That is a correct assumption, I don't really like a lot of people.  I'm not welcome" +
                    " to the town anyways. I was banished long ago and I've been on my own for years.'");
                WriteLine("\nYOU: 'Why were you BANISHED?'");
                WriteLine("\n'Let's just say me and the mayor have two different ideas on how handle the economy of the town.");
                ReadKey(false);
            }// end Dwarf

            if (playerSheet.Race == "Hobbit")
            {
                Clear();
                WriteLine("JOBE: 'You shouldn't have too much trouble with fitting into the village" +
                    ". \nThe village we are going to is mainly populated " +
                    "by Humans and they like to be spoiled by Hobbits. I wouldn't stay long if I were you, the townsfolk  " +
                    " may try to take advantage of you though. Therefore, be careful.'");
                WriteLine("' I'd suggest that you" +
                    " go to the Tavern to learn about what your next step should be.'");
                WriteLine("\nYou question Jobe: 'So you're saying you're not coming to the village?'");
                WriteLine("\nJobe: 'That is a correct assumption, I don't really like a lot of people.  I'm not welcome" +
                    " to the town anyways. I was banished long ago and I've been on my own for years.'");
                WriteLine("\nYOU: 'Why were you BANISHED?'");
                WriteLine("\n'Let's just say me and the mayor have two different ideas on how handle the economy of the town.'");
                ReadKey(false);
            }//end Hobbit
        }// end Conversation
        /// <summary>
        /// Scenario for getting down to the river 
        /// </summary>

    }


}
