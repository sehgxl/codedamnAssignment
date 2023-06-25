import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";

import circleIcon from "../public/Ellipse.svg";
import jsIcon from "../public/javascript.svg";

import sharedIcons from "../public/sharedIcons.svg";
const Playgrounds: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col pt-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">Playgrounds</h1>
        <SecondaryBtn
          state={true}
          handleClick={() => {
            console.log("Abhinav");
          }}
          btnText="Create New Playground"
        />
      </div>
      <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-5 ">
        {user?.playgrounds.map((playground, index) => {
          return (
            <div key={index} className="flex flex-row items-start gap-3 p-4">
              <Image
                className="h-12 w-12"
                alt="ProjectIcon"
                height={400}
                width={400}
                src={jsIcon}
              />
              <div className="flex flex-col ">
                <h1 className=" S text-2xl font-bold">{playground.title}</h1>
                <div className="flex flex-row items-center gap-2 pt-1 text-lg text-gray-500">
                  <div className="flex flex-row gap-2">
                    {playground.stack.map((el, idx) => {
                      return <span key={idx}>{el.toUpperCase()}</span>;
                    })}
                  </div>
                  <Image
                    className="h-1 w-1"
                    alt="circleIcon"
                    src={circleIcon}
                  />
                  <p>{playground.lastUpdated}</p>
                </div>

                <div className="flex flex-row items-center gap-2 pt-2 text-lg text-gray-500">
                  <Image src={sharedIcons} alt="sharedIcon" />
                  <p>
                    Shared with{" "}
                    {playground.sharedAccounts.map((el, idx) => {
                      if (idx === 0) {
                        return (
                          <span className=" font-bold" key={idx}>
                            {el + ", "}
                          </span>
                        );
                      }
                      if (idx === 1) {
                        return (
                          <span className=" font-bold" key={idx}>
                            {el + `.. `}
                          </span>
                        );
                      }
                    })}
                    + {playground.sharedCount} more
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Playgrounds;
