import React from "react";
import "@/app/ResumeBtn.css";
import { HiDownload } from "react-icons/hi";

function ResumeBtn() {
  return (
    <button
      onClick={() => {
        window.open("/resume.pdf", "_blank");
      }}
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <HiDownload size={24} />
        </div>
      </div>
      <span>Resume</span>
    </button>
  );
}

export default ResumeBtn;
