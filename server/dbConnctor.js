const path = require('path')

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const dbConnector = ((mongoose) => {
  try {
     mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('Successfully connected to mongodb atlas')
    })
    ;

  } catch (error) {
    console.log(error, 'Connection failed!')
  }
});

module.exports = dbConnector; 