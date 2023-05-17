import React, { lazy, Suspense, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ChatBox(): JSX.Element {
  return (
    <div className="chatroom hidden lg:flex flex-wrap content-between w-4/12 h-full py-5 px-5 bg-new-white border border-gray-300">
      {/* Members */}
      <div className="members flex flex-wrap items-center h-[15%] w-full">
        <div className="w-full">
          <div className="flex justify-between w-full mb-3">
            <div className="text-lg font-semibold">
              <h4 className="inline">Member</h4>{" "}
              <span className="inline text-cyan-950">(25)</span>
            </div>
            <div className="text-sm text-gray-600 cursor-pointer">view all</div>
          </div>
          <div className="flex w-full">
            <div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
            <div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
            <div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
            <div className="avatar online placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
            <div className="avatar offline placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
            <div className="avatar offline placeholder mx-2">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="">JO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[85%] w-full">
        {/* Chat */}
        <div className="h-[90%] w-full overflow-hidden">
          <h4 className="text-lg font-semibold mb-2 h-auto">Group Chat</h4>
          <div className="chatbox h-[90%] overflow-y-scroll">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                      <span className="text-xs">AA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                      <span className="text-xs">AA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>
        </div>

        {/* Message box */}
        <div className="message h-[10%] w-full flex items-center">
          <input
            type="text"
            placeholder="Write here..."
            className="input input-bordered w-full max-w-xs"
          />
          <div className="cursor-pointer ml-3">
            <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
