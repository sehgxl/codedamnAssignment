import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";

import circleIcon from "../public/Ellipse.svg";
import jsIcon from "../public/javascript.svg";

import sharedIcons from "../public/sharedIcons.svg";
const Playgrounds: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col pt-6">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Playgrounds</h1>
        <SecondaryBtn state={true} btnText="Create New Playground" />
      </div>
      <div className="mt-8 grid grid-cols-1 grid-rows-4  gap-5 lg:grid-cols-2 lg:grid-rows-2  ">
        {user?.playgrounds.map((playground, index) => {
          return playground.active ? (
            <div
              key={index}
              className="flex flex-col items-start gap-3 p-4 sm:flex-row "
            >
              <Image
                className="h-12 w-12"
                alt="ProjectIcon"
                height={400}
                width={400}
                src={jsIcon}
              />
              <div className="flex flex-col ">
                <h1 className=" text-2xl font-bold md:text-lg">
                  {playground.title}
                </h1>
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
          ) : null;
        })}
      </div>
    </section>
  );
};

export default Playgrounds;
