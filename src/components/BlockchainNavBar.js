import React from "react";
import Nav from "react-bootstrap/Nav";
import { BsCloudUpload, BsFiles, BsStar } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

export default function BlockchainNavBar() {
  return (
    <div className="tw-h-16 tw-w-full tw-flex tw-bg-blue-900 tw-items-center tw-justify-between tw-px-10">
      <div className="tw-flex tw-space-x-6">
        <div
          className={
            "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
          }
        >
          <BsFiles size={28} />
          <span>
            <Nav.Link className="link" href="/">
              Your Files
            </Nav.Link>
          </span>
        </div>
        <div
          className={
            "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
          }
        >
          <BsCloudUpload size={28} />
          <span>
            <Nav.Link className="link" href="/">
              Upload File
            </Nav.Link>
          </span>
        </div>
      </div>
      <div className="tw-flex tw-space-x-6">
        <div className="tw-flex tw-h-10 tw-space-x-2 tw-bg-white tw-text-black tw-items-center tw-rounded-2xl tw-text-center tw-px-4">
          <span>15</span>
          <FaEthereum size={20} />
        </div>
        <div className=" tw-flex tw-h-10 tw-bg-white tw-text-black tw-items-center tw-rounded-2xl tw-px-4">
          1523uuf2dqhjHDBdahfb445
        </div>
      </div>
    </div>
  );
}
