"use client";
export default function handleSubmit(props: any) {
  let user: userType;

  if (typeof window !== "undefined") {
    const getuserData = localStorage.getItem("user");
    if (getuserData !== null) {
      user = JSON.parse(getuserData);
      user = { ...user, ...props };

      localStorage.setItem("user", JSON.stringify(user));
    }
  }
}
