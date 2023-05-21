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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Default() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [sideDrawerType, setSideDrawerType] = useState(false);
  const [chatDrawerType, setChatDrawerType] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={`default ${
        isLargeScreen
          ? "flex h-screen max-h-screen max-w-screen overflow-hidden"
          : "drawer"
      }`}
    >
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        onChange={(e) => setDrawerType(e.target.value)}
      />
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
      {/* {isLargeScreen && <MainBody handleOpen={handleOpen} />} */}

      {/* Chatbox */}
      {isLargeScreen && <ChatBox />}
    </div>
  );
}
