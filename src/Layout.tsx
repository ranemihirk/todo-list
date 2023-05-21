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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faTableColumns,
  faGear,
  faChartSimple,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type TaskDataProps = {
  id: string | null;
  type: string | null;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80vh",
  width: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Layout() {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [sideDrawerType, setSideDrawerType] = useState(false);
  const [chatDrawerType, setChatDrawerType] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState<TaskDataProps>({ id: "1", type: "" });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let currentTask = {};

  useEffect(() => {
    console.log("task: ", task);
    console.log('task["type"] =="todo": ', task["type"] == "todo");
    // if (!task && Object.keys(task).length > 0) {
    // setTotalUsers(data.rooms.paginatorInfo.total);
    let taskStatus = false;

    if (task["type"] == "todo") {
      setOpen(true);
      taskStatus = true;
    }
    if (task["type"] == "progress") {
      setOpen(true);
      taskStatus = true;
    }
    if (task["type"] == "complete") {
      setOpen(true);
      taskStatus = true;
    }
    // }
  }, [task]);

  return (
    <div className={`layout ${!isLargeScreen && "drawer"}`}>
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

      {isLargeScreen ? (
        <div className="flex h-screen max-h-screen max-w-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar SiteLogo={logo} />
          {/* Main Body */}
          <MainBody handleOpen={handleOpen} task={task} setTask={setTask} />
          {/* Chatbox */}
          <ChatBox />
        </div>
      ) : (
        //   <>
        //   <input
        //   id="my-drawer"
        //   type="checkbox"
        //   className="drawer-toggle"
        // />
        //     <div className="drawer-content">
        //       {/* Page content here  */}
        //       <label
        //         htmlFor="my-drawer"
        //         className="btn btn-primary drawer-button"
        //       >
        //         Open drawer
        //       </label>
        //     </div>
        //     <MobileSidebar SiteLogo={logo} />
        //   </>
        // <PersistentDrawerLeft />
        ""
      )}
    </div>
  );
}
