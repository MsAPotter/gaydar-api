const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

const accomodationRouter = require('./routes/accomodationRoute.js');
const reviewsRouter = require('./routes/reviewRoute.js');

app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json()); 

// MOUNT ROUTES
// app.use = require('./routes/index')
app.use('/api/accomodations/', accomodationRouter);
app.use('/api/reviews/', reviewsRouter);

app.get('/', (req,res) => {
    res.redirect('/api/accomodations/');
});

// app.set('port', process.env.PORT || 3001);

// app.listen('port', () => {
//     console.log(`finding a safespot to vacay on ${app.get('port')}`);
//   });

app.listen(4000, () => {
  console.log("app listening on port 4000");
});