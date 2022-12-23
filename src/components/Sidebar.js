import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLogout, AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { IoLogOutOutline, IoTimeOutline } from "react-icons/io5";
import { BsBookmark, BsFiles, BsStar } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { logout } = useAuth();
  async function handleLogout() {
    try {
      await logout();
      toast.success("Log out successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch {
      toast.error("Failed to Log Out", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <div
      className={` tw-bg-blue-900 tw-h-screen  tw-relative tw-duration-300 ${
        open ? " tw-w-56" : "tw-w-20"
      } `}
    >
      <div className="tw-flex tw-gap-x-4 tw-items-center tw-h-16 tw-bg-white tw-px-5 ">
        <img
          alt=""
          src="https://layer3com.com/img/hosted-icon.png"
          className={`tw-cursor-pointer tw-duration-500 tw-h-10 tw-w-10 ${
            open && "tw-rotate-[360deg]"
          }`}
        />
        <h1
          className={` tw-text-blue-800 tw-origin-left tw-font-medium tw-text-2xl tw-duration-200 ${
            !open && "tw-hidden"
          }`}
        >
          Minecloud
        </h1>
      </div>
      <div>
        <div className="tw-pt-6 tw-space-y-6 tw-px-5">
          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
          >
            <BsFiles size={28} />
            <span className={`${!open && "tw-hidden"} tw-origin-left `}>
              <Nav.Link className="link" href="/">
                Files
              </Nav.Link>
            </span>
          </div>

          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
          >
            <IoTimeOutline size={28} />
            <span className={`${!open && "tw-hidden"} tw-origin-left `}>
              <Nav.Link className="link" href="/recent">
                Recent Files
              </Nav.Link>
            </span>
          </div>
          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
          >
            <BsStar size={28} />
            <span className={`${!open && "tw-hidden"} tw-origin-left `}>
              <Nav.Link className="link" href="/stared">
                Stared
              </Nav.Link>
            </span>
          </div>
          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
          >
            <FaEthereum size={28} />
            <span className={`${!open && "tw-hidden"} tw-origin-left `}>
              <Nav.Link className="link" href="/blockchain">
                Blockchain
              </Nav.Link>
            </span>
          </div>
          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
            onClick={handleLogout}
          >
            <AiOutlineLogout size={28} />

            <span className={`${!open && "tw-hidden"} tw-origin-left `}>
              Log out
            </span>
          </div>
          <div
            className={
              "tw-flex  tw-rounded-md tw-p-2 tw-cursor-pointer hover:tw-bg-light-white tw-text-gray-300 tw-text-lg tw-items-center tw-gap-x-4 hover:tw-bg-blue-400 hover:tw-text-black"
            }
            onClick={() => setOpen(!open)}
          >
            <AiOutlineArrowLeft
              size={28}
              className={`tw-cursor-pointer tw-duration-500 ${
                open && "tw-rotate-[180deg]"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
