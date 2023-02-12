import React from 'react';
import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;

  return (
    <li
      className={`interviewers__item ${selected ? "interviewers__item--selected" : ""}`}
      onClick={() => setInterviewer(id)}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected ? name : ""}
    </li>
  );
};


