import Image from "next/image";
import searchIcon from "../public/searchIcon.svg";
import streakIcon from "../public/Lightning.svg";
import notifIcon from "../public/notifIcon.svg";
import navProfile from "../public/navProfileIcon.svg";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="mx-6  mt-3 flex flex-row  items-center justify-between">
      <h1 className=" basis-2/5 text-2xl  font-bold ">codedamn</h1>
      <div className="flex flex-row items-center gap-1 ">
        <Image className="h-4 w-4 " src={searchIcon} alt="searchIcon" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="px-4 py-2 text-start"
        />
      </div>
      <div className="flex basis-2/5 flex-row items-center justify-end gap-6 ">
        <select name="Courses" id=" " className="px-4 py-2 text-gray-400">
          <option value="" disabled selected hidden>
            Courses
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="FullStack">FullStack</option>
        </select>
        <Image className=" h-12 w-12" alt="streakIcon" src={streakIcon} />
        <Image className=" h-12 w-12" alt="notifIcon" src={notifIcon} />
        <Link href="/Profile">
          <Image className=" h-12 w-12 " alt="navProfile" src={navProfile} />{" "}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
