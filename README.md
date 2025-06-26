A simple and responsive web application that allows users to search for any GitHub profile by username and view key information such as avatar, followers, following, and public repositories. Built using HTML, Tailwind CSS, and JavaScript, and powered by the GitHub API.

🚀 Features
Fetch GitHub user data via GitHub API

Displays avatar, username, bio (if available), followers, following, and public repositories

Responsive and minimal UI using Tailwind CSS

Real-time user input and error handling for invalid usernames

🛠️ Tech Stack
HTML – Structure of the app

Tailwind CSS – Styling and layout

JavaScript – API fetching and dynamic DOM manipulation

GitHub API – To retrieve profile data

🧰 How to Use
Clone the repository:

git clone https://github.com/deepakg2608/github-profile-fetcher.git


Navigate into the project folder:


cd github-profile-fetcher


Open index.html in your browser:


open index.html


📂 Project Structure
├── index.html
├── style.css (optional if using custom Tailwind config)
├── script.js
└── README.md


📌 Notes
Make sure your network allows access to the GitHub API.

No API key is required for public profile fetching, but rate limits may apply for frequent usage.


✨ Future Improvements
Dark mode toggle

Show top repositories with stars

Loading animation during fetch
