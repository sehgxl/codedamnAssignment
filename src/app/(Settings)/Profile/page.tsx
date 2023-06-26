"use client";
import Image from "next/image";
import profileIcon from "../../../public/profilePhoto.png";
import PrimaryBtn from "@/components/primaryBtn";
import { useState } from "react";
import SwitchToggle from "@/components/switchToggle";
import handleSubmit from "@/lib/handleSubmit";
export default function Profile() {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [profession, setProfession] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [showFollower, setShowFollower] = useState(false);

  return (
    <section className=" basis-2/3  ">
      <div className="mt-10 flex flex-row gap-6">
        <Image
          alt="profileIcon"
          src={profileIcon}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-row items-center gap-3">
          <PrimaryBtn btnText="Upload new picture" />
          <button className="px-4 py-2 hover:text-red-600">Delete</button>
        </div>
      </div>
      <h1 className="mt-10 basis-2/5 text-2xl font-bold">
        Your Basic Information
      </h1>
      <form
        id="profileForm"
        className="mt-8 flex flex-col gap-6"
        onSubmit={(e) => {
          handleSubmit({
            name: name,
            about: about,
            jobStatus: profession,
            dob: new Date(dob),
            gender: gender,
            followActive: showFollower,
          });
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Display Name
          </label>
          <input
            required
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Abhinav Sehgal"
          />
          <p className="text-gray-500">
            Name entered above will be used for all issued certificates
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            About
          </label>
          <input
            required
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="about"
            id="about"
            value={about}
            placeholder="I hope to work at Codedamn via this project."
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Profession
          </label>
          <input
            required
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="profession"
            id="profession"
            value={profession}
            placeholder="Student"
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Date of birth
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="date"
            name="dob"
            id="dob"
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Gender
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="gender"
            id="gender"
            value={gender}
            placeholder="Male"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </form>

      <section className="mt-10 flex flex-col">
        <h1 className="  text-2xl font-bold">Section visibility</h1>
        <p className="text-md mt-1 text-gray-500">
          Select which sections and content should show on your profile page.
        </p>
        <div className="mt-6 flex flex-col p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="gal-1 flex flex-col">
              <h1 className=" text-xl font-bold">Followers and following</h1>
              <p className="text-md mt-1 text-gray-500">
                Shows your followers and the users you follow on codedamn
              </p>
            </div>
            <SwitchToggle enabled={showFollower} setEnabled={setShowFollower} />
          </div>
        </div>
        <div className="flex flex-row items-center  justify-end gap-3">
          <button className="px-4 py-2 hover:text-red-600">Cancel</button>
          <input
            className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-lg font-medium text-white"
            type="submit"
            form="profileForm"
            value="Save your changes"
          />
        </div>
      </section>
    </section>
  );
}
