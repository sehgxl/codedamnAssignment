import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";
import project1 from "../public/project1.png";
import reactIcon from "../public/react.svg";
const Projects: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col gap-10 pt-10">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
        <SecondaryBtn
          state={true}
          handleClick={() => {
            console.log("Abhinav");
          }}
          btnText="Create New Project"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 border-2">
        {user?.projects.map((project, index) => {
          return (
            <div key={index} className="flex flex-col border-2 p-4">
              <Image
                className=" h-full w-full"
                alt="ProjectIcon"
                src={project1}
              />
              <h1 className="pt-5 text-2xl font-bold">{project.title}</h1>
              <div className="text-md flex flex-row gap-6 pt-2">
                {project.stack.map((el, idx) => {
                  return (
                    <div key={idx} className="flex flex-row gap-2">
                      <Image alt="htmlIcon" src={reactIcon} />
                      <span className=" text-xl text-gray-500">{el}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;