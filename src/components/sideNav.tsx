"use client";
import Image from "next/image";
import sideNavIcon from "../public/sideNav.svg";
import Link from "next/link";
import { useState } from "react";
const SideNav = () => {
  const [selectedButton, setSelectedButton] = useState({
    Profile: true,
    Socials: false,
    Portfolio: false,
    Resume: false,
  });
  return (
    <div className=" flex basis-1/3 flex-col gap-6 border-2  p-6">
      <Link href="/Profile">
        <div
          onClick={() =>
            setSelectedButton((prev) => {
              return {
                ...prev,
                Profile: true,
                Socials: false,
                Portfolio: false,
                Resume: false,
              };
            })
          }
          className={` ${
            selectedButton.Profile
              ? "border-l-4 border-l-black text-black"
              : "text-gray-500"
          } flex flex-row items-center justify-start gap-2 border-2  px-3 py-1  `}
        >
          <Image
            className={`${selectedButton.Profile ? null : "opacity-60"}`}
            alt="sideNavIcon"
            src={sideNavIcon}
          />
          <button className="text-lg  ">Profile</button>
        </div>
      </Link>

      <Link href="/Socials">
        <div
          onClick={() =>
            setSelectedButton((prev) => {
              return {
                ...prev,
                Socials: true,
                Profile: false,
                Portfolio: false,
                Resume: false,
              };
            })
          }
          className={` ${
            selectedButton.Socials
              ? "border-l-4 border-l-black text-black"
              : "text-gray-500"
          } flex flex-row items-center justify-start gap-2 border-2  px-3 py-1  `}
        >
          <Image
            className={`${selectedButton.Socials ? null : "opacity-60"}`}
            alt="sideNavIcon"
            src={sideNavIcon}
          />
          <button className="text-lg ">Socials</button>
        </div>
      </Link>

      <Link href="/Portfolio">
        <div
          onClick={() =>
            setSelectedButton((prev) => {
              return {
                ...prev,
                Portfolio: true,
                Socials: false,
                Profile: false,
                Resume: false,
              };
            })
          }
          className={` ${
            selectedButton.Portfolio
              ? "border-l-4 border-l-black text-black"
              : "text-gray-500"
          } flex flex-row items-center justify-start gap-2 border-2  px-3 py-1  `}
        >
          <Image
            className={`${selectedButton.Portfolio ? null : "opacity-60"}`}
            alt="sideNavIcon"
            src={sideNavIcon}
          />
          <button className="text-lg ">Portfolio</button>
        </div>
      </Link>

      <Link href="/Resume">
        <div
          onClick={() =>
            setSelectedButton((prev) => {
              return {
                ...prev,
                Resume: true,
                Socials: false,
                Portfolio: false,
                Profile: false,
              };
            })
          }
          className={` ${
            selectedButton.Resume
              ? "border-l-4 border-l-black text-black"
              : "text-gray-500"
          } flex flex-row items-center justify-start gap-2 border-2  px-3 py-1  `}
        >
          <Image
            className={`${selectedButton.Resume ? null : "opacity-60"}`}
            alt="sideNavIcon"
            src={sideNavIcon}
          />
          <button className="text-lg ">Resume </button>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
