import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./css/default.css";
import logo from "../src/assets/imgs/rmklogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faCheck,
  faTableColumns,
  faGear,
  faChartSimple,
  faPlus,
  faMagnifyingGlass,
  faBell,
  faUserTie,
  faEllipsisVertical,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const mainMenu = [
  {
    title: "Dashboard",
    url: "/",
    icon: <FontAwesomeIcon icon={faTableColumns} size="lg" />,
  },
  {
    title: "Settings",
    url: "/",
    icon: <FontAwesomeIcon icon={faGear} size="lg" />,
  },
  {
    title: "All Activity",
    url: "/",
    icon: <FontAwesomeIcon icon={faChartSimple} size="lg" />,
  },
];

const projects = [
  "Daily Task",
  "Meeting Summary",
  "Resources",
  "Availability",
  "All Projects",
  "Archive",
  "Brainstorming",
];

export default function Default() {
  return (
    <div className="flex h-screen max-h-screen max-w-screen overflow-hidden">
      <div className="sidebar w-3/12 max-h-screen py-5 px-5 bg-new-bg border border-gray-300 grid grid-cols-1 content-between">
        {/* Profile tab */}
        <div className="flex items-center mb-4 p-1 rounded-md bg-new-white cursor-pointer">
          <div className="flex items-center w-4/5">
            <img
              src={logo}
              alt=""
              className="w-12 rounded-full border-1 border-black"
            />
            <h3 className="font-semibold ml-2">Mihir Rane</h3>
          </div>
          <div className="w-1/5 text-center">
            <FontAwesomeIcon icon={faCaretDown} size="xl" />
          </div>
        </div>

        {/* Main Menu */}
        <div className="mb-4 text-neutral-400">
          {mainMenu.map((item) => (
            <div className="flex items-center px-4 py-1 my-2 cursor-pointer">
              {item.icon}
              <h4 className="ml-4">{item.title}</h4>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="project-menu mb-4 h-auto overflow-hidden overflow-y-scroll">
          {projects.map((item) => (
            <div className="flex items-center px-4 py-1 my-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faCaretRight}
                size="lg"
                className="text-neutral-600"
              />
              <h4 className="ml-2">{item}</h4>
            </div>
          ))}
        </div>

        {/* New Project Button */}
        <button className="btn mt-4  w-full flex justify-evenly">
          <FontAwesomeIcon icon={faPlus} size="lg" />
          New Project
        </button>
      </div>

      <div className="task grow py-5 px-5 bg-new-white h-screen">
        {/* Project Title */}
        <div className="flex flex-wrap h-1/5">
          <div className="w-4/6">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap w-full items-center mb-4">
                <FontAwesomeIcon icon={faCheck} size="2xl" />
                <h2 className="font-bold text-3xl ml-4">Daily Task</h2>
              </div>
              <p className="w-full text-gray-500">
                Click +New to create new list and wait for project manager card.
              </p>
              <p className="w-full text-gray-500">
                Don't create a card by yourself to manage a good colaboration.
              </p>
            </div>
          </div>
          <div className="w-2/6 flex items-start justify-evenly">
            <div className="bg-new-bg rounded-full px-4 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </div>
            <div className="bg-new-bg rounded-full px-4 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faBell} size="sm" />
            </div>
            <div className="bg-new-bg rounded-full px-4 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faUserTie} size="sm" />
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="task-list flex justify-evenly h-4/5 overflow-hidden overflow-y-scroll">
          {/* To Do */}
          <div className="w-3/12 max-w-3/12">
            <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
              To Do{" "}
              <span className="bg-new-black text-new-white rounded px-2 font-normal">
                3
              </span>
            </h5>
            {Array.from({ length: 3 }).map((it, index) => (
              <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
                <div className="task-header flex justify-between">
                  <h3 className=""></h3>
                  <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                    <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                  </div>
                </div>
                <div className="task-body mb-4">
                  <h3>
                    Create Prototype Mobile for Get Notification in Principle.
                  </h3>
                </div>
                <div className="task-footer flex justify-between items-center">
                  <div className="badge badge-success gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} size="sm" />
                    Mar 23
                  </div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In Progress */}
          <div className="w-3/12 max-w-3/12">
            <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
              In Progress{" "}
              <span className="bg-new-black text-new-white rounded px-2 font-normal">
                2
              </span>
            </h5>
            {Array.from({ length: 2 }).map((it, index) => (
              <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
                <div className="task-header flex justify-between">
                  <h3 className=""></h3>
                  <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                    <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                  </div>
                </div>
                <div className="task-body mb-4">
                  <h3>
                    Create Prototype Mobile for Get Notification in Principle.
                  </h3>
                </div>
                <div className="task-footer flex justify-between items-center">
                  <div className="badge badge-warning gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} size="sm" />
                    Mar 23
                  </div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complete */}
          <div className="w-3/12 max-w-3/12">
            <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
              Complete{" "}
              <span className="bg-new-black text-new-white rounded px-2 font-normal">
                1
              </span>
            </h5>
            {Array.from({ length: 1 }).map((it, index) => (
              <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
                <div className="task-header flex justify-between">
                  <h3 className=""></h3>
                  <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                    <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                  </div>
                </div>
                <div className="task-body mb-4">
                  <h3>
                    Create Prototype Mobile for Get Notification in Principle.
                  </h3>
                </div>
                <div className="task-footer flex justify-between items-center">
                  <div className="badge badge-warning gap-2 text-sm">
                    <FontAwesomeIcon icon={faClock} size="sm" />
                    Mar 23
                  </div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">AA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chatroom flex flex-wrap content-between w-4/12 h-full py-5 px-5 bg-new-white border border-gray-300">
        {/* Members */}
        <div className="members flex flex-wrap items-center h-[15%] w-full">
          <div className="w-full">
		  <div className="flex justify-between w-full mb-3">
            <div className="text-lg font-semibold">
              <h4 className="inline">Member</h4>{" "}
              <span className="inline text-cyan-950">(25)</span>
            </div>
            <div className="text-sm text-gray-600 cursor-pointer">view all</div>
          </div>
          <div className="flex w-full">
            <div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
			<div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
			<div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
			<div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
			<div className="avatar offline placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
			<div className="avatar offline placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
          </div>
		  </div>
        </div>

        {/* Chat */}
        <div className="chatbox h-[70%] w-full">
			<h4 className="text-lg font-semibold mb-2">Group Chat</h4>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-xs">AA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-xs">AA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>

        {/* Message box */}
        <div className="message h-[10%] w-full flex items-center">
			<input type="text" placeholder="Write here..." className="input input-bordered w-full max-w-xs" />
			<div className="cursor-pointer ml-3">
			<FontAwesomeIcon icon={faPaperPlane} size="2xl" />
			</div>
		</div>
      </div>
    </div>
  );
}
