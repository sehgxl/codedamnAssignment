"use client";
import popuplateData from "@/lib/populateData";
import editIcon from "../public/editIcon.svg";
import HomepageHero from "./homepageHero";
import Image from "next/image";
import HomepageDashboard from "./homepageDashboard";
import { useState } from "react";
const Homepage = () => {
  const [populate, setPopuplate] = useState(false);
  let user;
  if (typeof window !== "undefined") {
    const getuserData = localStorage.getItem("user");
    if (getuserData !== null) {
      user = JSON.parse(getuserData);
    } else {
      popuplateData();
      setPopuplate(true);
    }
  }

  return (
    <section className="relative mx-6 mb-32  mt-16 rounded-lg   bg-gradient-to-r from-blue-500 to-pink-500 pt-36 sm:mx-28 lg:mx-48">
      <button className=" absolute right-6 top-5 flex flex-row items-center gap-1 rounded-lg border-2 border-white bg-pink-400 px-2 py-1 font-semibold text-white">
        <Image alt="editIcon" src={editIcon} />
        <span>Edit Cover</span>
      </button>
      <section className="bg-white">
        <HomepageHero user={user} />
        <HomepageDashboard user={user} />
      </section>
    </section>
  );
};

export default Homepage;
