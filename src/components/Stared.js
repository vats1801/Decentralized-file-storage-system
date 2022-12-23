import React from "react";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

export default function Stared() {
  return (
    <div className="tw-flex tw-h-screen ">
      <Sidebar />
      <div className="tw-overflow-y-auto tw-flex-1 tw-bg-gray-100">
        <Navbar />
        <Gallery />
      </div>
    </div>
  );
}
