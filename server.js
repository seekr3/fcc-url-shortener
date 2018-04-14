const log = console.log;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const express = require('express')
const app = express()
app.listen(process.env.PORT || 3000);

const mLabUrl = process.env.MLABURL

function logObj(obj) {
  for (let x in obj) {
    console.log(x);
  }
  console.log(obj);
}


MongoClient.connect(mLabUrl, function (err, db) {
  if (err) console.log(err);
  else {
    log(db.collection('url'));
    db.close();
  }
});

app.get('/', (req, res) => 
  res.sendFile(__dirname + '/views/root.html')
);

app.get(/\/.+/, (req, res) => {
  res.json({
    original: null,
    shortened: null,
  });
});
