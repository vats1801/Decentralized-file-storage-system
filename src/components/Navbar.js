import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser } = useAuth();
  return (
    <div className="tw-h-16 tw-w-full tw-flex tw-bg-white tw-items-center tw-justify-between tw-px-10">
      <div className=" tw-items-center tw-h-10 tw-w-2/4 ">
        <input
          type="text"
          placeholder="Search Title/Tag"
          className="tw-h-full tw-px-5  tw-w-full tw-rounded-full tw-placeholder-gray-800 tw-bg-slate-200"
        />
      </div>
      <div className="tw-flex tw-items-center tw-space-x-8">
        <h1 className="tw-text-lg tw-font-medium">{currentUser.email}</h1>
        <img
          src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=205&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="tw-h-10 tw-w-10 tw-rounded-full"
        />
      </div>
    </div>
  );
}
