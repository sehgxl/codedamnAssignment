import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";

import circleIcon from "../public/Ellipse.svg";
import jsIcon from "../public/javascript.svg";

import sharedIcons from "../public/sharedIcons.svg";
import handleSubmit from "@/lib/handleSubmit";
const PlaygroundsEdit: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col pt-6">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Playgrounds</h1>
        <SecondaryBtn state={true} btnText="See all" />
      </div>

      <form
        onSubmit={() => {
          handleSubmit(user);
        }}
        id="porfolioForm"
      >
        <div className="grid-col-1 grid-row-4 mt-8 grid gap-5 lg:grid-cols-2 lg:grid-rows-2 ">
          {user?.playgrounds.map((playground, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-3 p-4 lg:flex-row"
              >
                <Image
                  className="h-12 w-12"
                  alt="ProjectIcon"
                  height={400}
                  width={400}
                  src={jsIcon}
                />
                <div className="flex flex-col  ">
                  <div className="flex flex-row justify-between">
                    <h1 className=" S text-2xl font-bold">
                      {playground.title}
                    </h1>
                  </div>
                  <div className="flex flex-row items-center gap-2 pt-1 text-lg text-gray-500">
                    <div className="flex flex-row flex-wrap gap-2">
                      {playground.stack.map((el, idx) => {
                        return <span key={idx}>{el.toUpperCase()}</span>;
                      })}
                      <div className="flex flex-row items-center gap-1">
                        <Image
                          className="h-1 w-1"
                          alt="circleIcon"
                          src={circleIcon}
                        />
                        <p>{playground.lastUpdated}</p>
                      </div>
                    </div>
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
                  {playground.active ? (
                    <button
                      className=" mt-3  w-max rounded-md bg-red-500 px-3 py-1 text-sm text-white"
                      onClick={() => {
                        playground.active = false;
                      }}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className=" mt-3 w-max rounded-md  bg-violet-600 px-3 py-1 text-sm text-white"
                      onClick={() => {
                        playground.active = true;
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </section>
  );
};

export default PlaygroundsEdit;
