const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

//
// middleware: will need for posting - required for all express for any request comming in

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const characters = [
    {
        name: "Yoda",
        role: "Jedi Master",
        forcePoints: 100000,
        age: 900,
        avator: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/top-crop/width/360/height/450?cb=20150206140125",
        routeName: "yoda"
    },
    {
        name: "Luke Skywalter",
        role: "Jedi Trainee",
        forcePoints: 10000,
        age: 42,
        avator: "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
        routeName: "lukeskywalter"
    },
    {
        name: "Princess Leia",
        role: "General Princess",
        forcePoints: 100,
        age: 42,
        avator: "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
        routeName: "princessleia"
    }    
]

// request and response
// home route

app.get("/", (req, res) => {
    //res.send("May the force be behind you!");
    console.log(path.join( __dirname + "/public/index.html"));

    res.sendFile( path.join( __dirname + "/public/index.html"));
})

//
// route to see /api/characters
// the api is convention to indicate that data is being returned

app.get("/api/characters", (req, res) => {
    res.json(characters);
})

//
// route to see a character (send parameter) /api/characters/yoda
// route to see a character (send parameter) /api/characters/:routeName

app.get("/api/characters/:route", (req, res) => {
    console.log(req.params);

    const targetCharacter = req.params.route;

    const character = characters.find(character => {
        return character.routeName === targetCharacter;
    })

    res.json(character);
})

//
// adding a new character, it is being sent via the body (using postman)

app.post("/api/characters/add", (req, res) => {

    console.log("post ttest", req.body);
    characters.push(req.body);

    const newcharacter = req.body;

    // make new route name based on the name, remove spaces and lower case
    newcharacter.routeName = newcharacter.name.replace(/ /g, "").toLowerCase();
    characters.push(newcharacter);

    console.log(characters);

    //
    // send a status back instead of just end

    res.status(200).send();
})

//
// start server so it starts and listens

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

