const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);

});

app.get('/api/fortune', (req, res) => {
  const fortunes = ['A pleasant surprise is waiting for you',
    'A smooth long journery! Great expectations.', 'All will go well with you new project', 'Now is the time to try something new', 'Long life is in store for you']

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.get('/api/quote', (req, res) => {
  let theoQuote = `Believe you can and you're halfway there. -Theodore Rossevelt`

  res.status(200).send(theoQuote)
})

app.post('/api/name', (req, res) => {
  let firstName = req.body
  res.status(200).send(`${firstName}, I believe in you!`)
})

app.listen(4000, () => console.log("Server running on 4000"));
