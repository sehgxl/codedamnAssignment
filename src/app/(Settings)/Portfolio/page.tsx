"use client";
import PlaygroundsEdit from "@/components/playgroundEdit";
import ProjectsEdit from "@/components/projectsEdit";

export default function Portfolio() {
  let user;
  if (typeof window !== "undefined") {
    const getuserData = localStorage.getItem("user");
    if (getuserData !== null) {
      user = JSON.parse(getuserData);
    }
  }

  return (
    <section className=" basis-2/3 ">
      <PlaygroundsEdit user={user} />
      <ProjectsEdit user={user} />
    </section>
  );
}
