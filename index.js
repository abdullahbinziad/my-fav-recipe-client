const express = require('express')
const chef = require('./data/chef.json')
const food = require('./data/food.json')
const cors = require('cors')
const app = express()
const port = 3000
//to avoid cors policy
app.use(cors());




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/food', (req, res) => {
  res.send(food)
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
const id = req.params.id;
const theData = chef.find(n=> n._id== id);
res.send(theData);

  res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})