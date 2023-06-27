import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";
import project1 from "../public/project1.png";
import reactIcon from "../public/react.svg";
import handleSubmit from "@/lib/handleSubmit";
const ProjectsEdit: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col gap-10 pt-10">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <SecondaryBtn
          state={true}
          handleClick={() => {
            console.log("Abhinav");
          }}
          btnText="See all"
        />
      </div>

      <form
        onSubmit={() => {
          handleSubmit(user);
        }}
        id="projectForm"
      >
        <div className="grid grid-cols-1 grid-rows-4 gap-5 border-2 lg:grid-cols-2 lg:grid-rows-2">
          {user?.projects.map((project, index) => {
            return (
              <div key={index} className="flex flex-col border-2 p-4">
                <Image
                  className=" h-full w-full"
                  alt="ProjectIcon"
                  src={project1}
                />
                <h1 className="pt-5 text-2xl font-bold">{project.title}</h1>
                <div className="text-md flex flex-row flex-wrap gap-3 pt-2">
                  {project.stack.map((el, idx) => {
                    return (
                      <div key={idx} className="flex flex-row gap-2">
                        <Image alt="htmlIcon" src={reactIcon} />
                        <span className=" text-xl text-gray-500">{el}</span>
                      </div>
                    );
                  })}
                </div>
                {project.active ? (
                  <button
                    className=" mt-3 w-min rounded-md bg-red-500 px-3 py-1 text-sm text-white"
                    onClick={() => {
                      project.active = false;
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="mt-3 w-min rounded-md  bg-green-500 px-3 py-1 text-sm text-white"
                    onClick={() => {
                      project.active = true;
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </form>
    </section>
  );
};

export default ProjectsEdit;
