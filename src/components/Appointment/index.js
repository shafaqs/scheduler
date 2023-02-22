import React, { useState } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  // mode variables
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);
  const [confirm, setConfirm] = useState(false);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW));
  };

  function deleteInterview() {
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY));
  }

  function confirmDelete() {
    setConfirm(true);
  }

  function editInterview() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={editInterview}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          editMode={true} // Pass editMode prop as true
        />
      )}
      {confirm && (
        <Confirm
          message="Are you sure you want to delete this appointment?"
          onCancel={() => {
            setConfirm(false);
          }}
          onConfirm={() => {
            transition(DELETE, true);
            deleteInterview();
            setConfirm(false);
          }}
          id={props.id}
        />
      )}
    </article>
  );
}
