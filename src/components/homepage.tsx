"use client";
import setData from "@/lib/setData";
import editIcon from "../public/editIcon.svg";
import ProfileHero from "./profileHero";
import Image from "next/image";

import ProfileDashboard from "./profileDashboard";
import { useEffect } from "react";
const Homepage = () => {
  setData();
  // useEffect(setData, []);
  let user;
  const getuserData = localStorage.getItem("user");
  if (getuserData !== null) {
    user = JSON.parse(getuserData);
  }
  return (
    <section className="relative mx-48  mb-32 mt-16  rounded-lg border-2 bg-gradient-to-r from-blue-500 to-pink-500 pt-36">
      <button className=" absolute right-6 top-5 flex flex-row items-center gap-1 rounded-lg border-2 border-white bg-pink-400 px-2 py-1 font-semibold text-white">
        <Image alt="editIcon" src={editIcon} />
        <span>Edit Cover</span>
      </button>
      <section className="bg-white">
        <ProfileHero user={user} />
        <ProfileDashboard user={user} />
      </section>
    </section>
  );
};

export default Homepage;
