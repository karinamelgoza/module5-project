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
  // console.log(req.body.firstName)

  let firstName = req.body.firstName
  res.status(200).send(`${firstName}, I believe in you!`)
})

// End of day Review

let items = ['hello', 'sunshine']

app.get('/api/items', (req, res) => {
  res.status(200).send(items)
})

app.post('/api/items', (req, res) => {
  const { newItem } = req.body
  items.push(newItem)
  res.sendStatus(200)
})

app.delete('/api/items/:indexPos', (req, res) => {
  const { indexPos } = req.params
  const removedItem = items.splice(+indexPos, 1)
  res.status(200).send(removedItem)
})

app.listen(4000, () => console.log("Server running on 4000"));
