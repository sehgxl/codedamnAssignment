import Image from "next/image";
import searchIcon from "../public/searchIcon.svg";
import streakIcon from "../public/Lightning.svg";
import notifIcon from "../public/notifIcon.svg";
import navProfile from "../public/navProfileIcon.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="mx-6  mt-3 flex flex-col items-start justify-between gap-4 md:flex-row">
      <div className="w-full sm:w-max sm:basis-0 lg:flex-grow ">
        <h1 className=" text-center text-2xl font-bold sm:text-start">
          <Link href="/">codedamn</Link>
        </h1>
      </div>

      <div className="flex w-full flex-row   items-center justify-start gap-1 sm:w-max sm:justify-center ">
        <Image className="h-4 w-4 " src={searchIcon} alt="searchIcon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="w-full px-4 py-2 text-start"
        />
      </div>

      <div className="flex w-full flex-col items-start justify-end  gap-6 sm:w-max sm:flex-row lg:flex-grow lg:basis-0 ">
        <select
          defaultValue={"Courses"}
          name="Courses"
          id=" "
          className="w-full px-4 py-2 text-gray-400 sm:w-max"
        >
          <option value="Default" disabled hidden>
            Courses
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="FullStack">FullStack</option>
        </select>
        <div className=" flex w-full flex-row items-start justify-center gap-6 sm:w-max sm:justify-start">
          <Image className=" h-12 w-12" alt="streakIcon" src={streakIcon} />
          <Image className=" h-12 w-12" alt="notifIcon" src={notifIcon} />
          <Link href="/Profile">
            <Image className=" h-11 w-11  " alt="navProfile" src={navProfile} />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
