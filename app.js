const express = require("express");
const app = express();
const port = 5000;

// Route that handles the GET requests
app.get("/api", (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const currentUtcTime = currentDate.toISOString();

  // Calculation of a random offset within +/-2 minutes for UTC time
  const offsetMinutes = Math.floor(Math.random() * 5) - 2;
  currentDate.setMinutes(currentDate.getMinutes() + offsetMinutes);
  const currentUtcTimeWithOffset = currentDate.toISOString();

  // GitHub repository URLs
  const githubFileUrl =
    "https://github.com/BoltUltra/repo/blob/main/file_name.ext";
  const githubRepoUrl = "https://github.com/BoltUltra/repo";

  // Construct the JSON response
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUtcTimeWithOffset,
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
