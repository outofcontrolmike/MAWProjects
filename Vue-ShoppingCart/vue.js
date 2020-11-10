//Crash course on using Vue


var app2 = new Vue({
    el: '#chrono',
    data: {
        title: 'Chrono Trigger',
        developer: 'SquareSoft',
        desc: ' is a 1995 role-playing video game developed and published by Square for the Super Nintendo Entertainment System that began the Chrono series',
        price: '121.99',
        condition: 'used',
        stock: 4,
        orderCount: 0
    }
})

var app = new Vue({
    el: '#bof2',
    data: {
        title: 'Breath of fire 2',
        developer: 'Capcom',
        desc: 'is a role-playing video game developed and published by Capcom. First released in 1994, the game was licensed to Laguna for European release in 1996. It is the second entry in the Breath of Fire series',
        price: '49.99',
        condition: 'used',
        stock: 10,
        orderCount: 0
    }
})

var app3 = new Vue({
    el: '#megaman',
    data: {
        title: 'Megamanx3',
        developer: 'Capcom',
        desc: 'Mega Man X3, known as Rockman X3 (ロックマンX3) in Japan, is a video game released by Capcom for the Super Nintendo Entertainment System (SNES).',
        price: '219.89',
        stock: 2,
        condition: 'used',
        orderCount: 0
    }
})
