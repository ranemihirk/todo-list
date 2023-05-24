import React, { useEffect, Dispatch, SetStateAction } from "react";
import Moment from 'react-moment';
import moment from 'moment';
import EditableLabel from "./EditableLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faEllipsis,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

type PopupDataProps = {
  newTask: CurrentTask;
  open: boolean;
};

type taskProps = {
    name: string;
    initial: string;
  };

type CurrentTask = {
  id: number;
  title: string;
  description: string;
  assigned: taskProps;
  reporter: taskProps;
  status: string;
  estimatedTime: string;
  createdAt: string;
  updatedAt: string;
};

export default function Popup({ newTask, open }: PopupDataProps): JSX.Element {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const today = new Date();
  const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + ' ' + today.getHours() + ':' + (today.getMinutes() + 1) + ':' + today.getSeconds();
  
  const currentTime = moment(date, 'DD-MM-YYYY hh:mm:ss');
  const createdTime = moment(newTask.createdAt, 'DD-MM-YYYY hh:mm:ss');

  const createdDuration = moment.duration(createdTime.diff(currentTime));

  const createdAt = (Math.abs(Number(createdDuration.days())) > 0 ? Math.abs(Number(createdDuration.days())) + ' days' : (Math.abs(Number(createdDuration.hours())) > 0 ? Math.abs(Number(createdDuration.hours())) + ' hrs' : (Math.abs(Number(createdDuration.minutes())) > 0 ? Math.abs(Number(createdDuration.minutes())) + ' mins' : (Math.abs(Number(createdDuration.seconds())) > 0 ? Math.abs(Number(createdDuration.seconds())) + ' secs' : 0 + ' secs'))));

  const updatedTime = moment(newTask.createdAt, 'DD-MM-YYYY hh:mm:ss');

  const updatedDuration = moment.duration(updatedTime.diff(currentTime));

  const updatedAt = (Math.abs(Number(updatedDuration.days())) > 0 ? Math.abs(Number(updatedDuration.days())) + ' days' : (Math.abs(Number(updatedDuration.hours())) > 0 ? Math.abs(Number(updatedDuration.hours())) + ' hrs' : (Math.abs(Number(updatedDuration.minutes())) > 0 ? Math.abs(Number(updatedDuration.minutes())) + ' mins' : (Math.abs(Number(updatedDuration.seconds())) > 0 ? Math.abs(Number(updatedDuration.seconds())) + ' secs' : 0 + ' secs'))));

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const handleClose = () => {
    open = !open;
  };

  useEffect(() => {
    console.log('newTask: ', newTask);
  },[newTask]);
  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div>
          <button className="ml-4">
            <FontAwesomeIcon icon={faEllipsis} size="xl" />
          </button>
          <button className="ml-4" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
      </div>
      <div className="flex">
        {/* Description Side */}
        <div className="w-[65%] min-w-[65%] max-w-[65%] p-4">
          <textarea
            className="textarea textarea-ghost w-full text-3xl font-medium px-0"
            placeholder="Add a description..."
          >
            {newTask?.title}
          </textarea>
          <h4 className="font-bold mt-6">Description</h4>
          <textarea
            className="textarea textarea-ghost w-full"
            placeholder="Add a description..."
          >
            {newTask.description}
          </textarea>
          <h4>Activity</h4>
          <div className="flex mt-4">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MR</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full ml-4"
            />
          </div>
        </div>

        {/* Dteails Side */}
        <div className="w-[35%] min-w-[35%] max-w-[35%] p-4">
          <div>
            <select className="select select-ghost focus:outline-none">
              <option disabled selected>
                Select status
              </option>
              <option value="warning" key="warning">Warning</option>
              <option value="success" key="success">success</option>
            </select>
            <select className="select select-ghost focus:outline-none">
              <option disabled selected>
                Select task type
              </option>
              <option key="todo">To Do</option>
              <option key="progress">In Progress</option>
              <option key="complete">Complete</option>
            </select>
          </div>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<FontAwesomeIcon icon={faCaretDown} size="lg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="border-2 border-gray-800"
              >
                <Typography>Details</Typography>
              </AccordionSummary>
              <AccordionDetails className="border-1 border-gray-800">
                <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                  <div className="flex items-center">
                    <h4 className="text-xs">Assignee</h4>
                  </div>
                  <div className="col-span-2 items-center">
                    {/* <select className="select select-ghost focus:outline-none">
                  <option selected>
                    <FontAwesomeIcon
                      icon={faUser}
                      size="xl"
                      className="mr-3"
                    />
                    Unassigned
                  </option>
                  <option>Mihir Rane</option>
                  <option>Brian Thomas</option>
                  <option>Francee</option>
                </select> */}
                    <EditableLabel
                      initialValue="Mihir Rane"
                      type="textavatar"
                    />
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-xs">Original estimate</h4>
                  </div>
                  <div className="col-span-2 items-center">
                    <EditableLabel initialValue="Click to edit" type="" />
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-xs">Reporter</h4>
                  </div>
                  <div className="col-span-2 items-center">
                    <EditableLabel
                      initialValue="Mihir Rane"
                      type="textavatar"
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mt-4">
            <h5 className="text-xs text-gray-500">Created {createdAt} ago</h5>
            <h5 className="text-xs text-gray-500 mt-2">Updated {updatedAt} ago</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
