const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
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

  res.json(jsonResponse);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
