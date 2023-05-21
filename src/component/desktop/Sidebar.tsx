import React, { lazy, Suspense, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faTableColumns,
  faGear,
  faChartSimple,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { JsxElement } from "typescript";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

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

// let currentElement: string | null;

type AppBodyProps = {
  SiteLogo: string;
};

let siteLogo = "";

export default function Sidebar({ SiteLogo }: AppBodyProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [popperElement, setPopperElement] = React.useState<string | null>();

  siteLogo = SiteLogo;

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("event.currentTarget: ", event, event.currentTarget);
      console.log(event.currentTarget.getAttribute("data-id"));
      let currentElement = event.currentTarget.getAttribute("data-id");

      setPopperElement(currentElement);
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <div className="sidebar hidden w-5/12 max-h-screen py-5 px-5 bg-new-bg border border-gray-300 lg:grid grid-cols-1 content-between">
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        className={`${
          popperElement == "workplace"
            ? "task-list h-[50vh] overflow-hidden overflow-y-scroll"
            : ""
        } ml-2`}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              {popperElement == "workplace" ? (
                <ul className="menu bg-base-100 w-56">
                  {projects.map((item) => (
                    <li>
                      <a>
                        <img
                          src={siteLogo}
                          alt=""
                          className="w-12 rounded-full border-1 border-black"
                        />
                        <p className="text-ellipsis">{item}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Project Name..."
                    className="input input-bordered w-full max-w-xs mb-2"
                  />
                  <button className="btn w-full">Add</button>
                </div>
              )}
            </Paper>
          </Fade>
        )}
      </Popper>
      {/* Profile tab */}
      <button
        className="flex items-center mb-4 p-1 rounded-md bg-new-white cursor-pointer"
        onClick={handleClick("right")}
        id="workplace"
        data-id="workplace"
      >
        <div className="flex items-center w-4/5">
          <img
            src={SiteLogo}
            alt=""
            className="w-12 rounded-full border-1 border-black"
          />
          <h3 className="font-semibold ml-2">Mihir Rane</h3>
        </div>
        <div className="w-1/5 text-center">
          <FontAwesomeIcon icon={faCaretDown} size="xl" />
        </div>
      </button>

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
      <button
        className="btn mt-4  w-full flex justify-evenly"
        onClick={handleClick("right")}
        id="new-project"
        data-id="new-project"
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
        New Project
      </button>
    </div>
  );
}

const workplaceElement = (): JSX.Element => {
  return (
    <ul className="menu bg-base-100 w-56">
      {projects.map((item) => (
        <li>
          <a>
            <img
              src={siteLogo}
              alt=""
              className="w-12 rounded-full border-1 border-black"
            />
            <p className="text-ellipsis">{item}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
