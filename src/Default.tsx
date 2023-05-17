import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "./assets/imgs/rmklogo.png";
import "./css/default.css";
import Sidebar from "./component/desktop/Sidebar";
import MainBody from "./component/desktop/MainBody";
import ChatBox from "./component/desktop/ChatBox";
import MobileSidebar from "./component/mobile/MobileSidebar";
import MobileMainBody from "./component/mobile/MobileMainBody";
import MobileChatBox from "./component/mobile/MobileChatBox";

export default function Default() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [sideDrawerType, setSideDrawerType] = useState(false);
  const [chatDrawerType, setChatDrawerType] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  return (
    <div
      className={`default ${
        isLargeScreen ?
        "flex h-screen max-h-screen max-w-screen overflow-hidden" : "drawer"
      }`}
    >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={e => setDrawerType(e.target.value)} />
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      {/* Sidebar */}
      {isLargeScreen ? (
        <Sidebar SiteLogo={logo} />
      ) : (
        <>
          <div className="drawer-content">
            {/* Page content here  */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>

            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open chatbox
            </label>
          </div>
          <MobileSidebar SiteLogo={logo} />
        </>
      )}

      {/* Main Body */}
      {isLargeScreen && <MainBody />}

      {/* Chatbox */}
      {isLargeScreen && <ChatBox />}
    </div>
  );
}
