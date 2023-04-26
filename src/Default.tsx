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
    <div className="flex flex-wrap h-screen max-h-screen overflow-hidden">
      <div className="w-2/12 max-h-screen py-5 px-5 bg-new-bg border border-gray-300 grid grid-cols-1 content-between">

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

      <div className="grow py-5 px-5 bg-new-white h-screen">

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
            <div className="bg-new-bg rounded-full px-4 py-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </div>
            <div className="bg-new-bg rounded-full px-4 py-2">
              <FontAwesomeIcon icon={faBell} size="sm" />
            </div>
            <div className="bg-new-bg rounded-full px-4 py-2">
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
              <div className="shadow-md aspect-square mb-5">{index}</div>
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
              <div className="shadow-md aspect-square mb-5">{index}</div>
            ))}
          </div>
		  
		  {/* Complete */}
		  <div className="w-3/12 max-w-3/12">
            <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
			Complete{" "}
              <span className="bg-new-black text-new-white rounded px-2 font-normal">
                2
              </span>
            </h5>
            {Array.from({ length: 2 }).map((it, index) => (
              <div className="shadow-md aspect-square mb-5">{index}</div>
            ))}
          </div>
        </div>
		
      </div>

      <div className="w-3/12 py-5 px-5 bg-new-white border border-gray-300">
        ChatRoom
      </div>
    </div>
  );
}
