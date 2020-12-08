const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 5 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
	// Express will serve up production built assets
	// Example: main.js and main.css
	app.use(express.static("client/build"));

	// Express will serve up index.html if route
	// is not recognized
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Heroku Git Repository : https://git.heroku.com/boiling-shore-00390.git
// Heroku URL : https://boiling-shore-00390.herokuapp.com/

// Google Client ID : 922974926672-vb51toa3k2qambubaga40ahinfsphum3.apps.googleusercontent.com
// Client Secret : _CjwXXaCNti36Sy37aia9RHz

// KIMv76KCUYtx6Ple
