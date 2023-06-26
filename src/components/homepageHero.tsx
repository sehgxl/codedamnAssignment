import Image from "next/image";
import ProfilePhoto from "../public/profilePhoto.png";
import linkedinIcon from "../public/linkedinIcon.svg";
import twitterIcon from "../public/twitterIcon.svg";
import youtubeIcon from "../public/youtubeIcon.svg";
import githubIcon from "../public/githubIcon.svg";
import locationIcon from "../public/locationIcon.svg";
import bookmarkIcon from "../public/bookmarkIcon.svg";
import PrimaryBtn from "./primaryBtn";
import { FunctionComponent } from "react";
import Link from "next/link";
const HomepageHero: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="relative">
      <Image
        className=" absolute -top-16  left-6 z-10 h-40 w-40 rounded-full border-4 border-white "
        alt="Profile Photo"
        src={ProfilePhoto}
      />
      <div className="ml-48 flex flex-col gap-2 border-2  px-4 pt-6 ">
        <div className="flex flex-row items-center gap-3">
          <h1 className=" text-3xl font-bold ">{user?.name}</h1>
          <span className=" rounded-md bg-lime-300 p-1 px-2">
            {user?.subscription}
          </span>
          <span className=" font-bold text-sky-800">{user?.jobStatus}</span>
        </div>
        {user?.followActive ? (
          <p className="text-md text-start font-semibold">{`Followers : ${user?.followers} Following : ${user?.following}`}</p>
        ) : null}
        <p className="text-gray-500">{user?.about}</p>
        <div className="flex flex-row gap-2">
          <Image alt="locationIcon" src={locationIcon} />
          <p className="text-gray-400">{user?.location}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-3 pt-8">
          {user?.skills.map((skill, index) => {
            return (
              <span key={index} className="px-3 py-2 text-sm font-semibold">
                {skill.toUpperCase()}
              </span>
            );
          })}
        </div>

        <div className="flex flex-row justify-between pt-16">
          <div className="flex flex-row gap-4">
            <Link
              target="_blank"
              passHref={true}
              href={user?.socials?.github ?? ""}
            >
              <Image className="h-6 w-6" alt="githubIcon" src={githubIcon} />
            </Link>
            <Link
              target="_blank"
              passHref={true}
              href={user?.socials?.twitter ?? ""}
            >
              <Image className="h-7 w-7" alt="twitterIcon" src={twitterIcon} />
            </Link>
            <Link
              target="_blank"
              passHref={true}
              href={user?.socials?.linkedin ?? ""}
            >
              <Image
                className="h-7 w-7"
                alt="linkedinIcon"
                src={linkedinIcon}
              />
            </Link>
            <Link
              target="_blank"
              passHref={true}
              href={user?.socials?.youtube ?? ""}
            >
              <Image className="h-7 w-7" alt="youtubeIcon" src={youtubeIcon} />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Image className="" alt="bookmarkIcon" src={bookmarkIcon} />
            <PrimaryBtn btnText="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
