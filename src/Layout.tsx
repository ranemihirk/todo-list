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
  faXmark,
  faEllipsis,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={`layout ${!isLargeScreen && "drawer"}`}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <div></div>
            <div>
              <button className="ml-4">
                <FontAwesomeIcon icon={faEllipsis} size="xl" />
              </button>
              <button className="ml-4">
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%] min-w-[65%] max-w-[65%] p-4">
              <textarea
                className="textarea textarea-ghost w-full text-3xl font-medium px-0"
                placeholder="Add a description..."
              >
                [Memo] - Create Prototype Mobile for Get Notification in
                Principle.
              </textarea>
              <h4 className="font-bold mt-6">Description</h4>
              <textarea
                className="textarea textarea-ghost w-full"
                placeholder="Add a description..."
              ></textarea>
            </div>
            <div className="w-[35%] min-w-[35%] max-w-[35%] p-4">
              <div>
                <select className="select select-ghost focus:outline-none">
                  <option disabled selected>
                    Select status
                  </option>
                  <option value="warning">Warning</option>
                  <option value="success">success</option>
                </select>
                <select className="select select-ghost focus:outline-none">
                  <option disabled selected>
                    Select task type
                  </option>
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>Complete</option>
                </select>
              </div>
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      <FontAwesomeIcon icon={faCaretDown} size="lg" />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="border-1 border-gray-800"
                  >
                    <Typography>Details</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="border-1 border-gray-800">
                    <div className="grid grid-cols-3 gap-4">
                      {/* {new Array(10).fill(0).map((row, idx) => {
                        return (
                          <div
                            key={idx}
                            className={`${idx % 2 != 0 && "col-span-2"}`}
                          >
                            {idx}
                          </div>
                        );
                      })} */}
                      <div className="flex items-center">
                        <h4>Assignee</h4>
                      </div>
                      <div className="col-span-2 items-center">
                        <select className="select select-ghost focus:outline-none">
                          <option selected><FontAwesomeIcon icon={faUser} size="xl" className="mr-3" />Unassigned</option>
                          <option>Mihir Rane</option>
                          <option>Brian Thomas</option>
                          <option>Francee</option>
                        </select>
                      </div>
                      <div className="flex items-center">
                        <h4>Assignee</h4>
                      </div>
					  <div className="col-span-2 items-center">
                        <select className="select select-ghost focus:outline-none">
                          <option selected>Unassigned</option>
                          <option>Mihir Rane</option>
                          <option>Brian Thomas</option>
                          <option>Francee</option>
                        </select>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
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
