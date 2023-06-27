import { FunctionComponent } from "react";
import SecondaryBtn from "./secondaryBtn";
import Image from "next/image";
import project1 from "../public/project1.png";
import certificateIcon from "../public/achievments.svg";
const Certificates: FunctionComponent<{ user: userType }> = ({ user }) => {
  return (
    <section className="flex flex-col pt-10">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Certificates</h1>
        <SecondaryBtn
          state={true}
          handleClick={() => {
            console.log("Abhinav");
          }}
          btnText="Add New Certificate"
        />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 pt-6 sm:grid-cols-2 sm:grid-rows-2">
        {user?.certificates.map((certificate, index) => {
          return (
            <div key={index} className="flex flex-col p-5 ">
              <Image
                alt="ProjectIcon"
                className="h-12 w-12"
                src={certificateIcon}
              />
              <h1 className="pt-6 text-2xl font-bold">{certificate.title}</h1>
              <p className=" pt-1 text-xl text-gray-500">{`Issued on ${certificate.issueDate}`}</p>
              <button className="w-max pt-3 text-xl font-bold text-gray-600">
                See credentials
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
