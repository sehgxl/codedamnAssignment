import SecondaryBtn from "./secondaryBtn";
import { useState } from "react";
import { FunctionComponent } from "react";
import Stats from "./stats";
import Projects from "./projects";
import Playgrounds from "./playground";
import Certificates from "./certificates";

const HomepageDashboard: FunctionComponent<{ user: userType }> = ({ user }) => {
  const [portfolio, setPorfolio] = useState(true);
  const [resume, setResume] = useState(false);
  return (
    <section className="pt-10">
      <div className="flex flex-row gap-4 px-6">
        <SecondaryBtn
          btnText="Portfolio"
          handleClick={() => {
            setPorfolio(true);
            setResume(false);
          }}
          state={portfolio}
        />
        <SecondaryBtn
          btnText="Resume"
          handleClick={() => {
            setResume(true);
            setPorfolio(false);
          }}
          state={resume}
        />
      </div>
      {resume ? (
        <iframe src={user.resume} className="mt-10 min-h-screen w-full" />
      ) : (
        <>
          <Stats user={user} />
          <Projects user={user} />
          <Playgrounds user={user} />
          <Certificates user={user} />
        </>
      )}
    </section>
  );
};

export default HomepageDashboard;
