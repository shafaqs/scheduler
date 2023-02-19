import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
  }
  //function  which removes the most recent mode from the history and sets the mode state to the previous mod
  function back() {
    //check if there is a previous mode in the history. If not,we won't do anything.
    if (history.length > 1) {
      //create a copy of current history array using the spread operator to avoid modifying the original array directly
      const newHistory = [...history];
      //removes the last element to go back one step in our mode history
      newHistory.pop();
      //update the history state with the new history array
      setHistory(newHistory);
      //set the mode state to the previous mode in the history (the new most recent mode)
      setMode(newHistory[newHistory.length - 1]);
    }
  }

  return { mode, transition, back };
};

