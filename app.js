const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const cors=require('cors')
const Vehicle=require('./models/Vehicle')
const passport = require('passport')
const vehicleRouter=require('./routes/index')
const connectDB=require('./config/db')

dotenv.config({ path: './config/config.env' })





connectDB()

const app = express()



// // Logging
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }

// // Set global var
// app.use(function (req, res, next) {
//   res.locals.user = req.user || null
//   next()
// })
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json())

const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'https://shrouded-journey-38552.heroku']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

// Routes
app.use('/', require('./routes/index'))
app.use('/',vehicleRouter)


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'frontend/mercedes-api-front/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/mercedes-api-front/build', 'index.html'));
  });
}
// app.use('/auth', require('./routes/auth'))
// app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(Vehicle),
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)