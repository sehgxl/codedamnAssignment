type userType = {
  name: string;
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
};
