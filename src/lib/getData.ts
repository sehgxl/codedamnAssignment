"use client";
export default function getData() {
  let user: userType;
  const getuserData = localStorage.getItem("user");
  if (getuserData !== null) {
    user = JSON.parse(getuserData);
    return user;
  }
}
