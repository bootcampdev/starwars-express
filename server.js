const express = require("express");
const app = express();
const PORT = 3000;

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
app.get("/", (req, res) => {
    res.send("May the force be behind you!");
})

// route to see /api/characters
// the api is convention to indicate that data is being returned
app.get("/api/characters", (req, res) => {
    res.json(characters);
}

)

// route to see a character (send parameter) /api/characters/yoda


// route to see a character (send parameter) /api/characters/:routeName

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})

