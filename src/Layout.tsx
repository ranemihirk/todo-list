import React, { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "./assets/imgs/rmklogo.png";
import "./css/default.css";
import Sidebar from "./component/desktop/Sidebar";
import MainBody from "./component/desktop/MainBody";
import ChatBox from "./component/desktop/ChatBox";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Popup from "./component/popupModal";

import { todoTasks, inProgressTasks, completeTasks } from "./data";

type TaskDataProps = {
  id: string | null;
  type: string | null;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  width: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 2,
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
  let currentTask = {
    id: 1,
    title:
      "[Memo] - Create Prototype Mobile for Get Notification in Principle.",
    description: "",
    assigned: {
      name: "Mihir Rane",
      initial: "MR",
    },
    reporter: {
      name: "Mihir Rane",
      initial: "MR",
    },
    status: "warning",
    estimatedTime: "Mar 23",
    createdAt: "",
    updatedAt: "",
  };

  const [currTask, setCurrTask] = React.useState(currentTask);

  useEffect(() => {
    let taskStatus = false;
    console.log("task: ", task);
    if (task["type"] == "todo") {
      setOpen(true);
      taskStatus = true;
      todoTasks.map((item) => {
		console.log('item.id == Number(task.id): ', item.id == Number(task.id));
        if (item.id == Number(task.id)) {
			setCurrTask(item);
        }
      });
    }
    if (task["type"] == "progress") {
      setOpen(true);
      taskStatus = true;
      inProgressTasks.map((item) => {
		console.log('item.id == Number(task.id): ', item.id == Number(task.id));
        if (item.id == Number(task.id)) {
			setCurrTask(item);
        }
      });
    }
    if (task["type"] == "complete") {
      setOpen(true);
      taskStatus = true;
      completeTasks.map((item) => {
		console.log('item.id == Number(task.id): ', item.id == Number(task.id));
        if (item.id == Number(task.id)) {
			setCurrTask(item);
        }
      });
    }
    // }
	console.log('currentTask: ', currentTask);
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
          <Popup newTask={currTask} open={open} />
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
