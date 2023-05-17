import React, { lazy, Suspense, useEffect, useState } from "react";
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

export default function MainBody(): JSX.Element {
  return (
    <div className="task grow py-5 px-5 bg-new-white h-screen">
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
              3
            </span>
          </h5>
          {Array.from({ length: 3 }).map((it, index) => (
            <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
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
                <div className="badge badge-success gap-2 text-sm">
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
            </div>
          ))}
          <button className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
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
            <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
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
            </div>
          ))}
          <button className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>

        {/* Complete */}
        <div className="w-3/12 max-w-3/12">
          <h5 className="flex justify-between bg-new-bg px-3 py-2 w-full font-semibold mb-5 rounded">
            Complete{" "}
            <span className="bg-new-black text-new-white rounded px-2 font-normal">
              1
            </span>
          </h5>
          {Array.from({ length: 1 }).map((it, index) => (
            <div className="task-item shadow-md mb-5 p-4 cursor-pointer rounded-lg hover:bg-gray-200">
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
            </div>
          ))}
          <button className="btn cursor-pointer mt-4 w-full flex justify-evenly bg-new-white text-new-black border-dashed">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
