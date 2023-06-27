import { FunctionComponent } from "react";
import Image from "next/image";
import StarFour from "../public/StarFour.svg";
import Lightning from "../public/Lightning.svg";
import Heartbeat from "../public/Heartbeat.svg";
import Cup from "../public/Cup.svg";
const Stats: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="0 flex flex-col pt-10">
      <h1 className=" text-3xl font-bold ">Stats</h1>
      <div className=" grid grid-cols-1 grid-rows-4 gap-5 px-1 pt-6 sm:grid-cols-2 sm:grid-rows-2 sm:px-5">
        <div className="flex items-center">
          <Image className=" " alt="LightningIcon" src={Lightning} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">
              {user?.stats["longestStreak"]}
            </h1>
            <p className=" text-gray-500">Longest streak</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image className=" " alt="StarFourIcon" src={StarFour} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">{user?.stats["expPoints"]}</h1>
            <p className=" text-gray-500">Experience points</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image className=" " alt="CupIcon" src={Cup} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">
              {user?.stats["currentLeague"]}
            </h1>
            <p className=" text-gray-500">Current league</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image className=" " alt="HeartbeatIcon" src={Heartbeat} />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">
              {user?.stats["karmaPoints"]}
            </h1>
            <p className=" text-gray-500">Karma points</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
