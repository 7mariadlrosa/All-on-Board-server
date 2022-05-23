// OJO -> Ejecutar aparte con Node: node config/seeds.js
const mongoose = require('mongoose');
const BoardGame = require('../models/BoardGame.model');

const MONGO_URI = 'mongodb+srv://AllOnBoard:board1234@cluster0.zkf1r.mongodb.net/AllOnBoard'

mongoose
    .connect(MONGO_URI)
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error("Error connecting to mongo: ", err))

const boardGames = [
    {
        name: "Hotel Tycoon",
        description:
            "Hotel Tycoon, first published as Hotels, is a Monopoly-like game in which hotel tycoons try to buy and build the best hotels in the world and compete for guests. The game caters two to four players, ages eight and up. An average game lasts about 90 minutes.",
        playingTime: "60 min",
        age: "+8",
        gameImg: "https://cf.geekdo-images.com/6V0Q4AcqeM1eGOn606aSmA__imagepage/img/jy3z8wekCD-n6nS_wUn4wn5g6h0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2078499.jpg",
        players: { min: 2, max: 4 },
        kind: "ORIGINAL",
    },
    {
        name: "The inheritance of aunt Agata",
        description:
            "A bluffing game where you try to conceal your identity.On your turn you move two of the character pawns on the board.Movement is decided by dice. The board is a 3D house with several traps.If you move a character to a trap space, you may spring the trap if you have the corresponding card in your hand.You can bluff by moving your opponents' characters towards the entrance or moving your own character onto a trap space, but not release it.",
        playingTime: "45 min",
        age: "+9",
        gameImg: "https://cf.geekdo-images.com/M3GKVde2v0ygCgM9qYC23g__imagepage/img/qJRpLNKqPBBHoDsD5wtZO7cLMZY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic96697.jpg",
        players: { min: 2, max: 4 },
        kind: "ORIGINAL",
    },
    {
        name: "The Mysteries of Peking",
        description:
            "As one of the best detectives in Chinatown, you'll have to solve one of the mysteries in the casebook and reveal the criminal. To get clues, you must go to the different witnesses and interrogate them. You may move the dragons with the help of fortune cookies and prevent the other detectives from getting there before you. When you discover the culprit, you must go to the dragon he is hiding in.",
        playingTime: "30 min",
        age: "+8",
        gameImg: "https://cf.geekdo-images.com/qF2zl0O1tQIBRa0aTWHXkQ__imagepage/img/HjuDuGaX9Z82iwkQb_sgf2AqCaQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic185698.jpg",
        players: { min: 2, max: 6 },
        kind: "ORIGINAL",
    },
    {
        name: "BANG!",
        description:
            "The Outlaws hunt the Sheriff.The Sheriff hunts the Outlaws.The Renegade plots secretly, ready to take one side or the other.Bullets fly.Who among the gunmen is a Deputy, ready to sacrifice himself for the Sheriff? And who is a merciless Outlaw, willing to kill him? If you want to find out, just draw(your cards)!",
        playingTime: "20-40 min",
        age: "+10",
        gameImg: "http://4.bp.blogspot.com/-p6_uWO8dYp0/T0qGU0KWAdI/AAAAAAAAE54/s6sWMSRgsYo/s400/Image4.jpg",
        players: { min: 4, max: 7 },
        kind: "ORIGINAL",
    },
    {
        name: "Clu(E)2",
        description:
            "The classic detective game! In Clue, players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make a suggestion against a character saying they did it in that room with a specific weapon.",
        playingTime: "45 min",
        age: "+8",
        gameImg: "https://cf.geekdo-images.com/owlmDA10KegcwPaapY5auw__imagepage/img/Rt9I1XN5Nl12_aGaLae2BP9nbDM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5146918.png",
        players: { min: 2, max: 6 },
        kind: "ORIGINAL",
    },
    {
        name: "Taboo",
        description:
            "Taboo is a party word game. Players take turns describing a word or phrase on a drawn card to their partner without using five common additional words or phrases also on the card. The opposing partners watch a timer and use a buzzer to stop the game, buzz the player describing if one of the five off limits words or phrases is used, or the describing player makes any gestures. ",
        playingTime: "20 min",
        age: "+12",
        gameImg: "https://cf.geekdo-images.com/e8wVvax1VqQkgCu_AST5Aw__imagepage/img/N2F-Ul9aZMG-86YGJe8NkZP08BE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic212946.jpg",
        players: { min: 4, max: 10 },
        kind: "ORIGINAL",
    },
    {
        name: "Risk",
        description:
            "Possibly the most popular, mass market war game. The goal is conquest of the world.Each player's turn consists of:gaining reinforcements through number of territories held, control of every territory on each continent, and turning sets of bonus cards.Attacking other players using a simple combat rule of comparing the highest dice rolled for each side.Players may attack as often as desired.If one enemy territory is successfully taken, the player is awarded with a bonus card.Moving a group of armies to another adjacent territory.",
        playingTime: "120 min",
        age: "+10",
        gameImg: "https://cf.geekdo-images.com/Oem1TTtSgxOghRFCoyWRPw__imagepage/img/4wrkUvOM1FWJ6PAlG0C-LbeQ984=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4916782.jpg",
        players: { min: 2, max: 6 },
        kind: "ORIGINAL",
    },
    {
        name: "Zombies!!!",
        description:
            "Players take on the role of a survivor amid city streets sprawling with Zombies. Movement is determined by dice roll as is combat when the player's piece is in the same square as a Zombie. Players must conserve bullets and protect their life counters. At the end of the turn a dice roll directs the player to move a number of Zombies one square (because they are the slow George Romero type).",
        playingTime: "60-90 min",
        age: "+15",
        gameImg: "https://cf.geekdo-images.com/MLkRHrISvHx8plwBsCk9iw__imagepage/img/11aW9WGaraWKRbSizwGFj1uvA3A=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2525171.jpg",
        players: { min: 2, max: 6 },
        kind: "ORIGINAL",
    },
    {
        name: "Trivial Pursuit: Genus Edition",
        description:
            "Trivial Pursuit is the original trivia game that started it all.Each player has a circular playing piece with six pie- shaped holes.The goal of the game is to collect a pie in each color.The colors correspond to different question categories.The board consists of a circular track with spaces in seven different colors.Six of the colors correspond to question categories while the last color gives a new dice roll.",
        playingTime: "90 min",
        age: "+12",
        gameImg: "https://cf.geekdo-images.com/oMJ0w0TsaIqTwhZ3ZBCKNw__imagepage/img/yRnPJkqw5qI4roA9qZ_bXHk3nzE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic387612.jpg",
        players: { min: 2, max: 24 },
        kind: "ORIGINAL",
    },
    {
        name: "Jumanji",
        description:
            "The Game That Pursues You! Stalking lions, charging rhinos, lunging, snapping crocodiles, and more. In the wild world of Jumanji, they're only a dice roll away. Choose your pawn and set out on a deadly journey.Decode rhyming card messages that could spell disaster! Roll 8-sided dice together to rescue a fellow player in danger! Fail to escape, and the jungle could swallow you whole! The only way out is to finish the game.Only then will the terrors of the jungle disappear… The game is based on the movie of the same name.",
        playingTime: "45 min",
        age: "+8",
        gameImg: "https://cf.geekdo-images.com/hXE6-VJAIQcpMpkaRYlaAA__imagepage/img/Pt9Q1LQx39Byw4qNOTnE_RZLOr0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6064.jpg",
        players: { min: 2, max: 4 },
        kind: "ORIGINAL",
    },
    {
        name: "Monopoly",
        description:
            "Released in 1995 for the 60th anniversary of Monopoly, Deluxe Edition has a variety of visual improvements over the original game, as well as some additional pawns. The box, board, and pieces are more detailed and colorful. There is a rotating holder for deed cards. Money is held in a fancier holder. It is all just fancier pieces. Gameplay is the same as the original Monopoly.",
        playingTime: "180 min",
        age: "+8",
        gameImg: "https://cf.geekdo-images.com/1yq3A6tEuS6E6Z-ldawqPQ__imagepage/img/nVpqfDTKufDaDlpQf7c5B3TzK_I=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3674930.jpg",
        players: { min: 2, max: 10 },
        kind: "ORIGINAL",
    },
    {
        name: "Batman: Gotham City Chronicles",
        description:
            "In Batman: Gotham City Chronicles, one villain faces off against a team of heroes in one of multiple scenarios. Each hero has their own character, and they control this character by spending energy to perform actions (such as Melee and Ranged attacks, defusing bombs...)",
        playingTime: "60-90 min",
        age: "+14",
        gameImg: "https://cf.geekdo-images.com/YGNk9UF-QqLWT58aWiRV7w__imagepage/img/snfrD1FHiVYVH6I1ewkusciLUUY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3893551.png",
        players: { min: 2, max: 4 },
        kind: "ORIGINAL",
    },
    {
        name: "Party",
        description:
            "In Batman: Gotham City Chronicles, one villain faces off against a team of heroes in one of multiple scenarios. Each hero has their own character, and they control this character by spending energy to perform actions (such as Melee and Ranged attacks, defusing bombs...)",
        playingTime: "45 min",
        age: "+14",
        gameImg: "https://cf.geekdo-images.com/xTlPcUzqDC3HEG35e1MsfA__imagepage/img/_k6qDh7Lu_TxxBREHYycRoWuLYY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic97241.jpg",
        players: { min: 3, max: 20 },
        kind: "ORIGINAL",
    },
    {
        name: "Scrabble",
        description:
            "In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.Skip- a - cross was licensed by Selchow & Righter and manufactured by Cadaco.Both games have identical rules but Skip - a - cross has tiles and racks made of cardboard instead of wood.The game was also published because not enough Scrabble games were manufactured to meet the demand.",
        playingTime: "90 min",
        age: "+10",
        gameImg: "https://cf.geekdo-images.com/HHUOkGIvJyxZSv4cpGOfwQ__imagepage/img/M-Ii2SrpyDXwdOr6AK5fRvVehgc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic413500.jpg",
        players: { min: 2, max: 4 },
        kind: "ORIGINAL",
    },
    {
        name: "Pictionary",
        description:
            "In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard. Each word laid out earns points based on the commonality of the letters used, with certain board spaces giving bonuses. But a word can only be played if it uses at least one already-played tile or adds to an already-played word. This leads to slightly tactical play, as potential words are rejected because they would give an opponent too much access to the better bonus spaces.Skip- a - cross was licensed by Selchow & Righter and manufactured by Cadaco.Both games have identical rules but Skip - a - cross has tiles and racks made of cardboard instead of wood.The game was also published because not enough Scrabble games were manufactured to meet the demand.",
        playingTime: "90 min",
        age: "+12",
        gameImg: "https://i.etsystatic.com/11161633/r/il/a7dc14/2638408919/il_fullxfull.2638408919_ghit.jpg",
        players: { min: 3, max: 16 },
        kind: "ORIGINAL",
    }
];

BoardGame
    .create(boardGames)
    .then(boardGamesFromDB => {
        console.log(`Created ${boardGamesFromDB.length} boardGames`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));




