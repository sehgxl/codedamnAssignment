"use client";
export default function populateData() {
  const user: userType = {
    name: "Anna Cheng",
    resume:
      "https://drive.google.com/file/d/1Efand3sDVJO0NHvOxoAqWHhuqamQgloE/preview",
    socials: {
      github: "https://github.com",
      linkedin: "https.//linkedin.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
    },
    followActive: false,
    followers: 200,
    following: 50,
    dob: new Date("2001-06-01"),
    gender: "female",
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
        stack: ["html", "css", "react"],
        active: true,
      },
      {
        imgPath: "project1",
        title: "Tesla Website",
        stack: ["html", "css", "react"],
        active: true,
      },
      {
        imgPath: "project1",
        title: "React Website",
        stack: ["html", "css", "tailwind", "next"],
        active: false,
      },
      {
        imgPath: "project1",
        title: "NextJS Website",
        stack: ["html", "css", "bootstrap", "next"],
        active: false,
      },
    ],
    playgrounds: [
      {
        title: "React snippet",
        stack: ["html", "css", "react"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: true,
      },
      {
        title: "Python snippet",
        stack: ["python"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: true,
      },
      {
        title: "JS snippet",
        stack: ["html", "css", "javascript"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: true,
      },
      {
        title: "Typescript snippet",
        stack: ["html", "css", "typescript"],
        sharedCount: 8,
        sharedAccounts: ["Mehul", "Abhinav", "Tushar"],
        lastUpdated: "1min",
        active: true,
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
    populateFlag: true,
  };

  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
