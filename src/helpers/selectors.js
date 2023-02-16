export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((currentDay) => currentDay.name === day);

  if (selectedDay.length === 0) {
    return [];
  }

  const selectedAppointments = selectedDay[0].appointments.map((id) => state.appointments[id]);

  return selectedAppointments;
}
