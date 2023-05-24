import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMagnifyingGlass,
  faBell,
  faUserTie,
  faEllipsisVertical,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { todoTasks, inProgressTasks, completeTasks } from "./../../data";

type TaskDataProps = {
  id: string | null;
  type: string | null;
};
type AppBodyProps = {
  handleOpen: () => void;
  task: {};
  setTask: Dispatch<SetStateAction<TaskDataProps>>;
};

const taskStatus = {
  "1": "warning",
  "2": "success",
};

const task = {
  id: 1,
  title: "",
  assigned: [
    {
      name: "",
      initial: "",
    },
  ],
  status: "1",
  estimatedTime: "",
};

type taskPProps = {
  id: number;
  title: string;
  assigned: Array<[]>;
  status: string;
  estimatedTime: string;
};

type assignedProps = {
  name: string;
  initial: string;
};

export default function MainBody({
  handleOpen,
  task,
  setTask,
}: AppBodyProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [popperElement, setPopperElement] = React.useState<string | null>();

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

  const handleTaskOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event.currentTarget: ", event, event.currentTarget);
    console.log(event.currentTarget.getAttribute("data-id"));
    let currentID = event.currentTarget.getAttribute("data-id");
    let currentTaskType = event.currentTarget.getAttribute("data-type");

    setTask({ id: currentID, type: currentTaskType });
  };

  function statusBadge(status: string) {
    let badgeClass = "";
    switch (status) {
      case "warning":
        badgeClass = "badge-warning";
        break;
      case "success":
        badgeClass = "badge-success";
        break;
    }
    return badgeClass;
  }

  return (
    <div className="task grow max-w-3/5 py-5 px-5 bg-new-white h-screen">
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
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Task Name..."
                  className="input input-bordered w-full max-w-xs mt-2"
                />
                <button className="btn w-full">Add</button>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>

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
      <div className="task-list flex justify-evenly h-4/5 overflow-hidden overflow-x-scroll lg:overflow-y-scroll">
        {/* To Do */}
        <div className="w-3/12 max-w-3/12">
          <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
            To Do{" "}
            <span className="bg-new-black text-new-white rounded px-2 font-normal">
              {todoTasks.length}
            </span>
          </h5>
          {todoTasks.map((item, index) => (
            <button
              className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200"
              onClick={handleTaskOpen}
              data-id={item.id}
              data-type="todo"
            >
              <div className="task-header flex justify-between">
                <h3 className=""></h3>
                <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                  <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                </div>
              </div>
              <div className="task-body mb-4">
                <h3>{item.title}</h3>
              </div>
              <div className="task-footer flex justify-between items-center">
                <div
                  className={`badge ${statusBadge(item.status)} gap-2 text-sm ${
                    !item.estimatedTime && "hidden"
                  }`}
                >
                  <FontAwesomeIcon icon={faClock} size="sm" />
                  {item.estimatedTime}
                </div>
                <div className={`avatar-group -space-x-6 ${item.assigned.initial == "" && "hidden"}`}>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">{item.assigned.initial}</span>
                      </div>
                    </div>
                </div>
              </div>
            </button>
          ))}
          <button
            className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed"
            onClick={handleClick("bottom")}
            id="new-task"
            data-id="new-task"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>

        {/* In Progress */}
        <div className="w-3/12 max-w-3/12">
          <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
            In Progress{" "}
            <span className="bg-new-black text-new-white rounded px-2 font-normal">
              {inProgressTasks.length}
            </span>
          </h5>
          {/* {Array.from({ length: 2 }).map((it, index) => (
            <button
              className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200"
              onClick={handleOpen}
            >
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
            </button>
          ))} */}
          {inProgressTasks.map((item, index) => (
            <button
              className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200"
              onClick={handleTaskOpen}
              data-id={item.id}
              data-type="progress"
            >
              <div className="task-header flex justify-between">
                <h3 className=""></h3>
                <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                  <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                </div>
              </div>
              <div className="task-body mb-4">
                <h3>{item.title}</h3>
              </div>
              <div className="task-footer flex justify-between items-center">
                <div
                  className={`badge ${statusBadge(item.status)} gap-2 text-sm ${
                    !item.estimatedTime && "hidden"
                  }`}
                >
                  <FontAwesomeIcon icon={faClock} size="sm" />
                  {item.estimatedTime}
                </div>
                <div className={`avatar-group -space-x-6 ${item.assigned.initial == "" && "hidden"}`}>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">{item.assigned.initial}</span>
                      </div>
                    </div>
                </div>
              </div>
            </button>
          ))}
          <button
            className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed"
            onClick={handleClick("bottom")}
            id="new-task"
            data-id="new-task"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>

        {/* Complete */}
        <div className="w-3/12 max-w-3/12">
          <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
            Complete{" "}
            <span className="bg-new-black text-new-white rounded px-2 font-normal">
              {completeTasks.length}
            </span>
          </h5>
          {/* {Array.from({ length: 1 }).map((it, index) => (
            <button
              className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200"
              onClick={handleOpen}
            >
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
            </button>
          ))} */}
          {completeTasks.map((item, index) => (
            <button
              className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200"
              onClick={handleTaskOpen}
              data-id={item.id}
              data-type="complete"
            >
              <div className="task-header flex justify-between">
                <h3 className=""></h3>
                <div className="task-option rounded-md px-4 py-2 hover:bg-gray-300">
                  <FontAwesomeIcon icon={faEllipsisVertical} size="sm" />
                </div>
              </div>
              <div className="task-body mb-4">
                <h3>{item.title}</h3>
              </div>
              <div className="task-footer flex justify-between items-center">
                <div
                  className={`badge ${statusBadge(item.status)} gap-2 text-sm ${
                    !item.estimatedTime && "hidden"
                  }`}
                >
                  <FontAwesomeIcon icon={faClock} size="sm" />
                  {item.estimatedTime}
                </div>
                <div className={`avatar-group -space-x-6 ${item.assigned.initial == "" && "hidden"}`}>
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">{item.assigned.initial}</span>
                      </div>
                    </div>
                </div>
              </div>
            </button>
          ))}
          <button
            className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed"
            onClick={handleClick("bottom")}
            id="new-task"
            data-id="new-task"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
