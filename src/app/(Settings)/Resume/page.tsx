"use client";
import handleSubmit from "@/lib/handleSubmit";
import { useState } from "react";

export default function Resume() {
  const [resume, setResume] = useState("");
  return (
    <section className="basis-2/3">
      <form
        onSubmit={() => {
          handleSubmit({ resume: resume });
        }}
        id="resumeLink"
      >
        <div className="flex flex-col gap-2">
          <label className="text-md font-bold" htmlFor="">
            Upload your resume link
          </label>
          <input
            required
            className=" rounded-lg   px-3 py-4"
            type="text"
            name="resumelink"
            id="resumelink"
            onChange={(e) => setResume(e.target.value)}
            placeholder="www.drive.com/resume/abhinav_resume/preview"
          />
        </div>
      </form>
      <div className="flex  flex-col items-start justify-end gap-3  sm:flex-row sm:items-center">
        <button className="px-4 py-2 hover:text-red-600">Cancel</button>
        <input
          className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-lg font-medium text-white"
          type="submit"
          form="resumeLink"
          value="Save your changes"
        />
      </div>
    </section>
  );
}
