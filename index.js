const express = require("express");
const parser = require('body-parser');
const cors = require('cors');
const app = express();

const accomodationRouter = require('./routes/accomodationRoute');
const reviewsRouter = require('./routes/reviewRoute');


app.use(cors());
app.use(parser.urlencoded({extended: true}))   
app.use(parser.json()) 

// app.use = require('./routes/index')
app.use('/api/accomodations/', accomodationRouter);
app.use('/api/accomodations/:accomodationId/reviews', reviewsRouter);

// app.get('/', (req,res) => {
// })

app.set('port', process.env.PORT || 3001);

app.listen('port', () => {
    console.log("finding a safespot to vacay on ${app.get('port')}");
  });

app.listen(4000, () => {
  console.log("app listening on port 4000");
});