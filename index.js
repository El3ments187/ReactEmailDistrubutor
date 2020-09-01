const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Heroku Git Repository : https://git.heroku.com/boiling-shore-00390.git
// Heroku URL : https://boiling-shore-00390.herokuapp.com/

// Google Client ID : 922974926672-vb51toa3k2qambubaga40ahinfsphum3.apps.googleusercontent.com
// Client Secret : _CjwXXaCNti36Sy37aia9RHz
