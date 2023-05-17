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

type AppBodyProps = {
  SiteLogo: string;
};

export default function MobileSidebar({ SiteLogo }: AppBodyProps): JSX.Element {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      {/* <label htmlFor="my-drawer-4" className="drawer-overlay"></label> */}
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* Sidebar content here  */}
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
}
