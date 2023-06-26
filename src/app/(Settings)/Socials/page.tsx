"use client";
import handleSubmit from "@/lib/handleSubmit";
import { useState } from "react";

const Socials = () => {
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  return (
    <section className=" basis-2/3  ">
      <form
        id="socialForm"
        className="mt-8 flex flex-col gap-6"
        onSubmit={(e) => {
          handleSubmit({
            socials: {
              github: github,
              twitter: twitter,
              linkedin: linkedin,
              youtube: youtube,
            },
          });
        }}
      >
        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Gtihub
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="github"
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="github.com/sehgxl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Linkedin
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="linkedin"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="github.com/sehgxl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Twitter
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="twitter"
            id="twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="github.com/sehgxl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Youtube
          </label>
          <input
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="youtube"
            id="youtube"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            placeholder="github.com/sehgxl"
          />
        </div>
      </form>
      <div className="flex flex-row items-center  justify-end gap-3">
        <button className="px-4 py-2 hover:text-red-600">Cancel</button>
        <input
          className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-lg font-medium text-white"
          type="submit"
          form="socialForm"
          value="Save changes"
        />
      </div>
    </section>
  );
};
export default Socials;
