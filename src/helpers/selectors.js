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
  if (!selectedDay) {
    return [];
  }

  const appointments = selectedDay.appointments.map(
    (id) => state.appointments[id]
  );
  const interviewers = appointments
    .filter((appointment) => appointment.interview)
    .map((appointment) => state.interviewers[appointment.interview.interviewer]);

  return interviewers;
}
