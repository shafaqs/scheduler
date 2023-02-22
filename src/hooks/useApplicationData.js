import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState(prevState => ({ ...prevState, day }));

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        // Update days data to include new number of spots remaining
        return axios.get('/api/days');
      })
      .then(res => {
        setState(prevState => ({
          ...prevState,
          appointments,
          days: res.data
        }));
      });
  };


  const cancelInterview = id => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        // Update days data to include new number of spots remaining
        return axios.get('/api/days');
      })
      .then(res => {
        setState(prevState => ({
          ...prevState,
          appointments,
          days: res.data
        }));
      });
  };


  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(all => {
      const [days, appointments, interviewers] = all.map(res => res.data);
      setState(prevState => ({ ...prevState, days, appointments, interviewers }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
