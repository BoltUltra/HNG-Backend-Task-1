const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable or 5000 as the default

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

  // Format UTC time in "2023-09-07T13:31:46Z" format
  const formattedUtcTime = currentDate.toISOString().replace(/\.\d{3}Z$/, "Z");

  // Calculation of a random offset within +/-2 minutes for UTC time
  const offsetMinutes = Math.floor(Math.random() * 5) - 2;
  currentDate.setMinutes(currentDate.getMinutes() + offsetMinutes);
  const currentUtcTimeWithOffset = currentDate
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");

  // GitHub repository URLs
  const githubFileUrl =
    "https://github.com/BoltUltra/HNG-Backend-Task-1/blob/main/app.js";
  const githubRepoUrl = "https://github.com/BoltUltra/HNG-Backend-Task-1";

  // JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: formattedUtcTime, // Use the formatted UTC time
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
