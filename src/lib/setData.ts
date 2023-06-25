"use client";
export default function setData() {
  const user: userType = {
    name: "Anna Cheng",
    subscription: "Pro",
    jobStatus: "Looking for job",
    about: "Full Stack dev at Codedamn",
    location: "Mumbai,India",
    skills: ["html", "css", "javascript", "react"],
    stats: {
      longestStreak: 2,
      expPoints: 1200,
      currentLeague: "Novice",
      karmaPoints: 120,
    },
    projects: [
      {
        imgPath: "project1",
        title: "Portfolio Website",
        stack: ["html", "css"],
        active: true,
      },
      {
        imgPath: "project1",
        title: "Tesla Website",
        stack: ["html", "css"],
        active: false,
      },
      {
        imgPath: "project1",
        title: "React Website",
        stack: ["html", "css"],
        active: false,
      },
      {
        imgPath: "project1",
        title: "NextJS Website",
        stack: ["html", "css"],
        active: false,
      },
    ],
    playgrounds: [
      {
        title: "React snippet",
        stack: ["html", "css"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: true,
      },
      {
        title: "React snippet",
        stack: ["html", "css"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: false,
      },
      {
        title: "React snippet",
        stack: ["html", "css"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: false,
      },
      {
        title: "React snippet",
        stack: ["html", "css"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: false,
      },
    ],
    certificates: [
      {
        title: "Advanced Theroretical Js",
        issueDate: "Dec 8, 2022",
      },
      {
        title: "Advanced Theroretical Js",
        issueDate: "Dec 8, 2022",
      },
      {
        title: "Advanced Theroretical Js",
        issueDate: "Dec 8, 2022",
      },
      {
        title: "Advanced Theroretical Js",
        issueDate: "Dec 8, 2022",
      },
    ],
  };
  localStorage.setItem("user", JSON.stringify(user));
}
