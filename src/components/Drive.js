import React from "react";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export default function Drive() {
  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-flex-1 tw-bg-gray-100">
        <Navbar />
        <div className=" tw-w-full tw-flex tw-flex-wrap tw-p-5 tw-justify-center tw-gap-5"></div>
      </div>
    </div>
  );
}
