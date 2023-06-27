type userType = {
  name: string;
  dob: Date;
  socials: {
    [k: string]: string;
  };
  resume: string;
  followActive: boolean;
  followers: numeber;
  following: number;
  gender: string;
  subscription: string;
  jobStatus: string;
  about: string;
  location: string;
  skills: string[];
  stats: {
    [k: string]: string | number;
  };
  projects: {
    imgPath: StaticImageData;
    title: string;
    stack: string[];
    active: boolean;
  }[];
  playgrounds: {
    title: string;
    stack: string[];
    sharedCount: number;
    sharedAccounts: string[];
    lastUpdated: string;
    active: boolean;
  }[];
  certificates: {
    title: string;
    issueDate: string;
  }[];
  populateFlag: boolean;
};

declare module "*.pdf";
