let totalAmount = 0;

//Crash course on using Vue
var app = new Vue({
  el: "#app", // links Vue to the Div
  data: {
    total: 0,
    quantity: 0,
    games: [
      // this is an array filled with objects
      {
        name: "Breath of Fire II",
        developer: "Capcom",
        stock: 5,
        total: 54.99,
        ordered: 0,
        imgSrc: "img/Breathoffire2_box.jpg",
        remove: "delete.jpg",
        description:
          "Breath of Fire II is a role-playing video game developed and published by Capcom. First released in 1994, the game was licensed to Laguna for European release in 1996. It is the second entry in the Breath of Fire series.",
      },
      {
        name: "Chrono Trigger",
        developer: "SquareSoft",
        stock: 5,
        total: 104.95,
        ordered: 0,
        imgSrc: "img/chrono.jpg",
        description:
          "Chrono Trigger (クロノ・トリガー Kurono Torigā?) is a console role-playing game developed and published by Square for the Super Nintendo Entertainment System (SNES) in 1995. The game's story follows a group of adventurers who travel through time to prevent a global catastrophe.",
      },
      {
        name: "Megaman X3",
        developer: "Capcom",
        stock: 5,
        total: 339.94,
        ordered: 0,
        imgSrc: "img/megamanx3.jpg",
        description:
          "Mega Man X3, known as Rockman X3 in Japan, is a video game released by Capcom for the Super Nintendo Entertainment System. The game was originally released in Japan on December 1, 1995 and later in North American and PAL regions in 1996. It is the third game in the Mega Man X series and the last to appear on the SNES",
      },
    ], // an array that the inputs print to
    
  },
  
  methods: {
    // these methods make adjustments to the shopping cart
    addGame(theGame) {
      if(theGame.stock > 0)
      theGame.ordered++;
      theGame.stock--;
      (this.total += theGame.total).toFixed(2);
      this.quantity++;
      // totalAmount += theGame.total;
      // document.getElementById('totalAmount').innerHTML += totalAmount;
    },
    removeGame(theGame) {
      theGame.stock++;
      theGame.ordered--;
      (this.total -= theGame.total).toFixed(2);
      this.quantity--;

    },

    // cartTotal(theGame) {
    // },
  },
});

console.log(app);
