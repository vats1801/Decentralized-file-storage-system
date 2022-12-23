import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineClose, AiOutlineStar } from "react-icons/ai";

export default function FileView() {
  return (
    <div className="tw-w-full tw-h-screen tw-bg-black tw-flex tw-items-center tw-justify-center">
      <div className="tw-flex tw-flex-col tw-space-y-8 tw-items-center tw-text-white">
        <div className="tw-flex tw-w-full tw-justify-center tw-items-center  tw-space-x-10">
          <BsCloudDownload size={32} />
          <AiOutlineDelete size={32} />
          <AiOutlineStar size={32} />
        </div>
        <img
          alt=""
          src="https://wallup.net/wp-content/uploads/2019/09/295784-mountains-landscapes-nature-california-streams-land.jpg"
          className=" tw-h-2/3 tw-w-2/3 tw-object-contain"
        />
        <AiOutlineClose size={32} />
      </div>
    </div>
  );
}
