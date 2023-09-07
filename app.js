// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;

// // Function to format the current UTC time
// function getCurrentUtcTime() {
//   const currentDate = new Date();
//   const currentMinutes = currentDate.getUTCMinutes();
//   const offsetMinutes = Math.floor(Math.random() * 5) - 2; // Random offset within +/-2 minutes
//   const adjustedMinutes = currentMinutes + offsetMinutes;

//   currentDate.setUTCMinutes(adjustedMinutes);

//   return currentDate.toISOString().slice(0, -5) + "Z";
// }

// // GET requests route
// app.get("/api", (req, res) => {
//   // Get query parameters
//   const slackName = req.query.slack_name;
//   const track = req.query.track;

//   // Get the current date and time
//   const currentDate = new Date();
//   const currentDay = currentDate.toLocaleDateString("en-US", {
//     weekday: "long",
//   });

//   // Format UTC time within a +/-2 minute window
//   const formattedUtcTime = getCurrentUtcTime();

//   // GitHub repository URLs
//   const githubFileUrl =
//     "https://github.com/BoltUltra/HNG-Backend-Task-1/blob/main/app.js";
//   const githubRepoUrl = "https://github.com/BoltUltra/HNG-Backend-Task-1";

//   // JSON response
//   const jsonResponse = {
//     slack_name: slackName,
//     current_day: currentDay,
//     utc_time: formattedUtcTime,
//     track: track,
//     github_file_url: githubFileUrl,
//     github_repo_url: githubRepoUrl,
//     status_code: 200,
//   };

//   // Send the JSON response
//   res.json(jsonResponse);
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// GET requests route
app.get("/api", (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  // Format the current UTC time
  const formattedUtcTime = currentDate.toISOString().slice(0, -5) + "Z";

  // GitHub repository URLs
  const githubFileUrl =
    "https://github.com/BoltUltra/HNG-Backend-Task-1/blob/main/app.js";
  const githubRepoUrl = "https://github.com/BoltUltra/HNG-Backend-Task-1";

  // JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: formattedUtcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
