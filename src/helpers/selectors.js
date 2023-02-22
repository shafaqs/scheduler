export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((currentDay) => currentDay.name === day);

  if (selectedDay.length === 0) {
    return [];
  }

  const selectedAppointments = selectedDay[0].appointments.map((id) => state.appointments[id]);

  return selectedAppointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewer = state.interviewers && state.interviewers[interview.interviewer];

  if (interviewer) {
    return {
      student: interview.student,
      interviewer: {
        id: interviewer.id,
        name: interviewer.name,
        avatar: interviewer.avatar,
      },
    };
  } else {
    return null;
  }
}
export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  console.log(selectedDay);
  if (!selectedDay) {
    return [];
  }

  const interviewers = selectedDay.interviewers.map(
    (id) => state.interviewers[id]
  );


  return interviewers;
}
