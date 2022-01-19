import React from "react";
import ReMenu from "../../../components/residentevil/ReMenu";
import RePortrait from "../../../components/residentevil/RePortrait";
import ReBio from "../../../components/residentevil/ReBio";

export default function Residentevil() {
  //Game Data Response Array
  let data = [
    //Resident Evil Characters
    {
      name: "Chris Redfield",
      age: "23",
      height: "6ft 1in",
      weight: "177 lbs",
      games:
        "Resident Evil, Resident Evil Code Veronica, Resident Evil 5, Resident Evil 6, Resident Evil 8 - Village",
      gamesArray: ["RE", "RE Code Veronica", "RE 5", "RE Village"],
      bio: "Chris Redfield (Japanese: クリス・レッドフィールド, Hepburn: Kurisu Reddofīrudo) is a fictional character in Capcom's Resident Evil (Biohazard in Japan) survival horror video game series. Chris debuted as one of the two playable characters of the original Resident Evil video game, alongside his partner Jill Valentine, as a member of the Raccoon City police department's Special Tactics And Rescue Service (S.T.A.R.S). Vowing to never let any tragedies like Raccoon City happen again Chris becomes a founding member of the United Nations' Bioterrorism Security Assessment Alliance (B.S.A.A) in order to protect the innocent and prevent any B.O.W spread.",
    },
    {
      name: "Jill Valentine",
      age: "18",
      height: "5ft 5in",
      weight: "111 lbs",
      games:
        "Resident Evil, Resident Evil 3 Nemesis, Resident Evil Code Veronica, Resident Evil 5",
      gamesArray: ["RE", "RE 3", "RE 5"],
      bio: "She was introduced as one of two player characters in the original Resident Evil (1996). Valentine is a former member of the Raccoon City Police Department's S.T.A.R.S team, and initially worked alongside her partner Chris Redfield to fight the Umbrella Corporation, a pharmaceutical company whose bioterrorism creates zombies and other bio-organic weapons. Jill and Chris Redfield later became founding members of the United Nations' Bioterrorism Security Assessment Alliance (B.S.A.A).",
    },
    {
      name: "Leon S. Kennedy",
      age: "21",
      height: "5ft 10in",
      weight: "155 lbs",
      game: "Resident Evil 2, Resident Evil 4, Resident Evil 6",
      gamesArray: ["RE 2", "RE 4"],
      bio: "Leon Scott Kennedy (Japanese: レオン・スコット・ケネディ, Hepburn: Reon Sukotto Kenedi) is a fictional character in the Resident Evil (Biohazard in Japan) horror franchise by Capcom. He debuted as one of the two playable characters of the 1998 video game Resident Evil 2, where he is a rookie police officer for the Raccoon City Police Department (R.P.D) and later returns as a D.S.O Agent in Resident Evil 4.  During the events of Resident Evil 2, Leon is a rookie police officer who arrives in the doomed Raccoon City late for his first day on the job, only to confront a zombie outbreak first-hand. During the course of the game, he teams up with civilian survivor Claire Redfield, rescues the young Sherry Birkin, and is aided by the mysterious Ada Wong. Six years later, in Resident Evil 4, Leon returns as an agent for the U.S. federal government, part of a special anti-Umbrella task force, assigned to rescue the president's daughter, Ashley Graham, from a sinister cult. In Resident Evil 6, he continues to work for the U.S. government and reunites with Ada and an adult Sherry.",
    },
  ];

  //Images Array
  let imgArray = new Array();

  function setupImages() {
    //Alternate way of setting up array
    let count = 11;

    //Create array indexes for images
    for (let i = 0; i <= count; i++) {
      imgArray[i] = new Image();
    }

    //Resident Evil 1
    imgArray[0].src = "img/hikes/herculesGlades.jpg";
    imgArray[1].src = "img/hikes/herculesglades2.jpg";

    //Resident Evil 2
    imgArray[2].src = "img/hikes/busiek1.jpg";

    //Resident Evil 3 Nemesis
    imgArray[3].src = "img/residentEvil/res1_jill.png";

    //Resident Evil 4
    imgArray[4].src = "img/hikes/piney1.jpg";

    //Resident Evil Code Veronica
    imgArray[5].src = "img/hikes/busiek1.jpg";

    //Resident Evil 5
    imgArray[6].src = "img/hikes/busiek1.jpg";
    imgArray[7].src = "img/hikes/busiek1.jpg";

    //Resident Evil 6
    imgArray[8].src = "img/hikes/busiek1.jpg";
    imgArray[9].src = "img/hikes/busiek1.jpg";
    imgArray[10].src = "img/hikes/busiek1.jpg";
    //Resident Evil 7... or Village
    imgArray[11].src = "img/hikes/busiek1.jpg";
  }

  setupImages();

  return (
    <div
      className="ui container fluid very relaxed padded"
      id="residentEvilProject"
    >
      <ReMenu imgs={imgArray} />
      <div className="ui two column doubling stackable grid fluid padded">
        <RePortrait data={data} imgs={imgArray} />
        <ReBio data={data} imgs={imgArray} />
      </div>
    </div>
  );
}
